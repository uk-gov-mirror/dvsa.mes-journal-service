import { ExaminerWorkSchedule } from '../../../../common/domain/Journal';
import * as logger from '../../../../common/application/utils/logger';

export function getJournal(): ExaminerWorkSchedule {
  logger.info('Returning static journal...');
  return {
    staffNumber: 12345,
    examinerName: {
      title: 'Mr',
      firstName: 'Joe',
      secondName: 'Frederic',
      thirdName: 'Englbert',
      lastName: 'Bloggs',
    },
    permTestCentre: {
      centreId: 54321,
      centreName: 'Example Test Centre',
      costCode: 'EXTC1',
    },
    testSlot: [
      {
        slotDetail: {
          slotId: 1001,
          start: '2018-12-10T08:10:00+00:00',
          duration: 57,
        },
        vehicleSlotType: 'B57mins',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC1',
        },
        booking: {
          candidate: {
            candidateId: 101,
            age: 17,
            candidateName: {
              title: 'Miss',
              firstName: 'Florence',
              lastName: 'Pearson',
            },
            driverNumber: 'PEARS015220A99HC',
            gender: 'Female',
            candidateAddress: {
              addressLine1: '1 Station Street',
              addressLine2: 'Someplace',
              addressLine3: 'Sometown',
              addressLine4: '',
              addressLine5: '',
              postcode: 'AB12 3CD',
            },
            primaryTelephone: '01234 567890',
            secondaryTelephone: '04321 098765',
            mobileTelephone: '07654 123456',
          },
          application: {
            applicationId: 1234567,
            bookingSequence: 3,
            checkDigits: 1,
            welshTest: false,
            extendedTest: false,
            meetingPlace: '',
            progressiveAccess: false,
            specialNeeds: 'Candidate has dyslexia',
            entitlementCheck: false,
            vehicleSeats: undefined,
            vehicleHeight: undefined,
            vehicleWidth: undefined,
            vehicleLength: undefined,
            testCategory: 'A1',
            vehicleGearbox: 'Automatic',
          },
          previousCancellation: [
            {
              initiator: 'Act of nature',
            },
          ],
        },
      },
      {
        slotDetail: {
          slotId: 1003,
          start: '2018-12-10T10:14:00+00:00',
          duration: 57,
        },
        vehicleSlotType: 'B57mins',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC1',
        },
        booking: {
          candidate: {
            candidateId: 103,
            age: 56,
            candidateName: {
              title: 'Mrs',
              firstName: 'Jane',
              lastName: 'Doe',
            },
            driverNumber: 'DOEXX625220A99HC',
            gender: 'Female',
            candidateAddress: {
              addressLine1: 'My House',
              addressLine2: 'Someplace',
              addressLine3: 'Sometown',
              addressLine4: '',
              addressLine5: '',
              postcode: 'AB45 6CD',
            },
            mobileTelephone: '07654 123456',
          },
          application: {
            applicationId: 1234569,
            bookingSequence: 1,
            checkDigits: 9,
            welshTest: false,
            extendedTest: false,
            meetingPlace: '',
            progressiveAccess: false,
            specialNeeds: '',
            entitlementCheck: false,
            vehicleSeats: undefined,
            vehicleHeight: undefined,
            vehicleWidth: undefined,
            vehicleLength: undefined,
            testCategory: 'B1',
            vehicleGearbox: 'Automatic',
          },
          previousCancellation: [
            {
              initiator: 'DSA',
            },
            {
              initiator: 'Act of nature',
            },
          ],
        },
      },
      {
        slotDetail: {
          slotId: 1004,
          start: '2018-12-10T11:11:00+00:00',
          duration: 57,
        },
        vehicleSlotType: 'B57mins',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC1',
        },
        booking: {
          candidate: {
            candidateId: 104,
            age: 30,
            candidateName: {
              title: 'Miss',
              firstName: 'Theresa',
              lastName: 'Shaw',
            },
            driverNumber: 'SHAWX885220A99HC',
            gender: 'Female',
            candidateAddress: {
              addressLine1: '999 Letsby Avenue',
              addressLine2: 'Someplace',
              addressLine3: 'Sometown',
              addressLine4: '',
              addressLine5: '',
              postcode: 'AB67 8CD',
            },
            mobileTelephone: '07654 123456',
          },
          application: {
            applicationId: 1234570,
            bookingSequence: 2,
            checkDigits: 2,
            welshTest: false,
            extendedTest: false,
            meetingPlace: '',
            progressiveAccess: false,
            specialNeeds: '',
            entitlementCheck: false,
            vehicleSeats: 2,
            vehicleHeight: 5,
            vehicleWidth: 2.5,
            vehicleLength: 10,
            testCategory: 'C1+E',
            vehicleGearbox: 'Manual',
          },
        },
      },
      {
        slotDetail: {
          slotId: 1005,
          start: '2018-12-10T12:38:00+00:00',
          duration: 57,
        },
        vehicleSlotType: 'B57mins',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC1',
        },
        booking: {
          candidate: {
            candidateId: 105,
            age: 38,
            candidateName: {
              title: 'Mr',
              firstName: 'Ali',
              lastName: 'Campbell',
            },
            driverNumber: 'CAMPB805220A89HC',
            gender: 'Male',
            candidateAddress: {
              addressLine1: '1 Station Street',
              addressLine2: 'Someplace',
              addressLine3: 'Somearea',
              addressLine4: 'Somecity',
              addressLine5: '',
              postcode: 'UB40 1AA',
            },
            primaryTelephone: '01234 567890',
            mobileTelephone: '07654 123456',
          },
          application: {
            applicationId: 1234571,
            bookingSequence: 2,
            checkDigits: 6,
            welshTest: false,
            extendedTest: false,
            meetingPlace: '',
            progressiveAccess: false,
            specialNeeds: '',
            entitlementCheck: false,
            vehicleSeats: 20,
            vehicleHeight: 4,
            vehicleWidth: 3.5,
            vehicleLength: 8.5,
            testCategory: 'D',
            vehicleGearbox: 'Automatic',
          },
        },
      },
      {
        slotDetail: {
          slotId: 1006,
          start: '2018-12-10T13:35:00+00:00',
          duration: 57,
        },
        vehicleSlotType: 'B57mins',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC1',
        },
        booking: {
          candidate: {
            candidateId: 106,
            age: 27,
            candidateName: {
              title: 'Mr',
              firstName: 'James',
              lastName: 'Brown',
            },
            driverNumber: 'BROWN915220A99HC',
            gender: 'Male',
            candidateAddress: {
              addressLine1: 'The Gables Cottage',
              addressLine2: 'Home Farm',
              addressLine3: 'Farm Road',
              addressLine4: 'Farm Area',
              addressLine5: 'Farmtown',
              postcode: 'FA43 9XY',
            },
            primaryTelephone: '01234 567890',
            secondaryTelephone: '04321 098765',
            mobileTelephone: '07654 123456',
          },
          application: {
            applicationId: 1234572,
            bookingSequence: 1,
            checkDigits: 3,
            welshTest: false,
            extendedTest: false,
            meetingPlace: '',
            progressiveAccess: false,
            specialNeeds: '',
            entitlementCheck: false,
            vehicleSeats: 50,
            vehicleHeight: 5,
            vehicleWidth: 2,
            vehicleLength: 15,
            testCategory: 'D+E',
            vehicleGearbox: 'Manual',
          },
        },
      },
      {
        slotDetail: {
          slotId: 1007,
          start: '2018-12-10T14:32:00+00:00',
          duration: 57,
        },
        vehicleSlotType: 'B57mins',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC1',
        },
        booking: {
          candidate: {
            candidateId: 107,
            age: 81,
            candidateName: {
              title: 'Captain',
              firstName: 'Montague',
              lastName: 'Smythe',
            },
            driverNumber: 'SMYTH375220A99HC',
            gender: 'Male',
            candidateAddress: {
              addressLine1: '1 Hangar Lane',
              addressLine2: 'Someplace',
              addressLine3: 'Sometown',
              addressLine4: '',
              addressLine5: '',
              postcode: 'AB78 9CD',
            },
            primaryTelephone: '01234 567890',
          },
          application: {
            applicationId: 1234573,
            bookingSequence: 7,
            checkDigits: 7,
            welshTest: true,
            extendedTest: false,
            meetingPlace: '',
            progressiveAccess: false,
            specialNeeds: '',
            entitlementCheck: false,
            vehicleSeats: undefined,
            vehicleHeight: undefined,
            vehicleWidth: undefined,
            vehicleLength: undefined,
            testCategory: 'B',
            vehicleGearbox: 'Manual',
          },
        },
      },
    ],
    nonTestActivities: [
      {
        slotDetail: {
          slotId: 1002,
          start: '2012-10-05T09:07:00+01:00',
          duration: 57,
        },
        activityCode: '091',
        activityDescription: 'Travel period to detached TC and/or outstation',
        testCentre: {
          centreId: 54321,
          centreName: 'Example Test Centre',
          costCode: 'EXTC',
        },
      },
    ],
  };
}
