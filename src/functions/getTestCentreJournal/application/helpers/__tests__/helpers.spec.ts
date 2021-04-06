import * as moment from 'moment';
import { constructResponseArray } from '../helpers';
import {
  mockExaminerWorkSchedulesOrEmpty,
  mockTestCentreDetailFromDynamo,
} from '../__mocks__/helpers.mock';
import { TestCentreDetailResponse } from '../../../../../common/domain/TestCentreDetailRecord';

describe('constructResponseArray', () => {
  // tslint:disable-next-line:max-line-length
  it('should filter the examiner work schedules by testCentreID and date, returning errors if journals not found', () => {
    const response: TestCentreDetailResponse = constructResponseArray(
      mockTestCentreDetailFromDynamo,
      mockExaminerWorkSchedulesOrEmpty,
    );
    const date = new Date();
    const today: string = moment(date).format('YYYY-MM-DD');
    const tomorrow: string = moment(date).add(1, 'day').format('YYYY-MM-DD');
    expect(response).toEqual({
      staffNumber: '123456',
      examiners: [
        {
          name: 'Some name',
          staffNumber: '987654',
          journal: null,
          error: 'Journal not found',
        },
        {
          name: 'User name',
          staffNumber: '123456',
          journal: {
            examiner: {
              staffNumber: '123456',
              individualId: 47328923,
            },
            testSlots: [
              {
                slotDetail: { start: `${today}T12:00:00` },
                testCentre: { centreId: 1234, centreName: 'Swansea' },
              },
              {
                slotDetail: { start: `${today}T13:00:00` },
                testCentre: { centreId: 1234, centreName: 'Swansea' },
              },
              {
                slotDetail: { start: `${tomorrow}T12:00:00` },
                testCentre: { centreId: 1289, centreName: 'Neath' },
              },
            ],
            personalCommitments: [],
            nonTestActivities: [],
            advanceTestSlots: [],
            deployments: [],
          },
          error: undefined,
        },
        {
          name: 'Another name',
          staffNumber: '543789',
          journal: null,
          error: 'Journal decompression error',
        },
      ],
      testCentres: [
        { name: 'Swansea', id: 1234 },
        { name: 'Neath', id: 1289 },
      ],
    } as TestCentreDetailResponse);
  });
});
