import { ExaminerWorkSchedule } from '../../../../common/domain/Journal';
import { handler } from '../handler';
const lambdaTestUtils = require('aws-lambda-test-utils');
import * as createResponse from '../../../../common/application/utils/createResponse';
import { APIGatewayEvent, Context } from 'aws-lambda';
import * as FindJournal from '../../application/service/FindJournal';
import { tokens } from '../__mocks__/authentication-token.mock';

describe('getJournal handler', () => {
  const fakeJournal: ExaminerWorkSchedule = {
    examiner: {
      staffNumber: '123',
    },
  };
  let dummyApigwEvent: APIGatewayEvent;
  let dummyContext: Context;
  let createResponseSpy: jasmine.Spy;

  beforeEach(() => {
    createResponseSpy = spyOn(createResponse, 'default');
    dummyApigwEvent = lambdaTestUtils.mockEventCreator.createAPIGatewayEvent({
      pathParameters: {
        staffNumber: '12345678',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokens.employeeId_12345678,
      },
    });
    dummyContext = lambdaTestUtils.mockContextCreator(() => null);
  });

  describe('given the FindJournal returns a journal', () => {
    it('should return a successful response with the journal', async () => {
      spyOn(FindJournal, 'findJournal').and.returnValue(fakeJournal);
      createResponseSpy.and.returnValue({ statusCode: 200 });

      const resp = await handler(dummyApigwEvent, dummyContext);

      expect(resp.statusCode).toBe(200);
      expect(createResponse.default).toHaveBeenCalledWith(fakeJournal);
    });
  });

  describe('given the FindJournal returns null', () => {
    it('should return HTTP 404', async () => {
      spyOn(FindJournal, 'findJournal').and.returnValue(null);
      createResponseSpy.and.returnValue({ statusCode: 404 });

      const resp = await handler(dummyApigwEvent, dummyContext);

      expect(resp.statusCode).toBe(404);
      expect(createResponse.default).toHaveBeenCalledWith({}, 404);
    });
  });

  describe('given the FindJournal throws', () => {
    it('should respond with internal server error', async () => {
      spyOn(FindJournal, 'findJournal').and.throwError('Unable to retrieve journal');
      createResponseSpy.and.returnValue({ statusCode: 500 });

      const resp = await handler(dummyApigwEvent, dummyContext);

      expect(resp.statusCode).toBe(500);
      expect(createResponse.default).toHaveBeenCalledWith('Unable to retrieve journal', 500);
    });
  });

  describe('given there is no staffNumber provided', () => {
    it('should indicate a bad request', async () => {
      dummyApigwEvent.pathParameters = {};
      createResponseSpy.and.returnValue({ statusCode: 400 });

      const resp = await handler(dummyApigwEvent, dummyContext);

      expect(resp.statusCode).toBe(400);
      expect(createResponse.default).toHaveBeenCalledWith('No staffNumber provided', 400);
    });
  });

  describe('given there is no employeeId in the authorisation token', () => {
    it('should indicate a bad request', async () => {
      dummyApigwEvent.headers = {
        'Content-Type': 'application/json',
        Authorization: tokens.employeeId_null,
      };
      createResponseSpy.and.returnValue({ statusCode: 400 });

      const resp = await handler(dummyApigwEvent, dummyContext);

      expect(resp.statusCode).toBe(400);
      expect(createResponse.default).toHaveBeenCalledWith('Invalid authorisation token', 400);
    });
  });

  describe('given the staff number does not match the employeeId in the authorisation token', () => {
    it('should indicate a bad request', async () => {
      dummyApigwEvent.headers = {
        'Content-Type': 'application/json',
        Authorization: tokens.employeeId_01234567,
      };
      createResponseSpy.and.returnValue({ statusCode: 400 });

      const resp = await handler(dummyApigwEvent, dummyContext);

      expect(resp.statusCode).toBe(400);
      expect(createResponse.default).toHaveBeenCalledWith('Invalid staffNumber', 400);
    });
  });
});
