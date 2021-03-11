import { get } from 'lodash';
import * as moment from 'moment';
import { AdvanceTestSlot, Deployment, ExaminerWorkSchedule, NonTestActivity, TestSlot } from '@dvsa/mes-journal-schema';
import { Examiner, TestCentreDetail } from '../../../../common/domain/TestCentreDetailRecord';
import { ExaminerWorkScheduleOrEmpty } from '../../framework/handler';

export const constructResponseArray = (
  testCentreDetail: TestCentreDetail,
  journals: ExaminerWorkScheduleOrEmpty[],
): TestCentreDetail => {

  return {
    ...testCentreDetail,
    examiners: testCentreDetail.examiners.map((examiner: Examiner, index: number) => ({
      ...examiner,
      journal: assignJournalToStaff(testCentreDetail, examiner, journals),
      // returning undefined when no error so it removes the key, but can change to null to keep a static
      // data structure
      error: ('error' in journals[index]) ? (journals[index] as { error: string; }).error : undefined,
    })),
  } as TestCentreDetail;
};

const assignJournalToStaff = (
  testCentreDetail: TestCentreDetail,
  examiner: Examiner,
  journals: ExaminerWorkScheduleOrEmpty[],
): ExaminerWorkSchedule | null => {

  const journal = (journals as ExaminerWorkSchedule[])
    .find((journal: ExaminerWorkSchedule | null) =>
            get(journal, 'examiner.staffNumber') === examiner.staffNumber);

  if (!journal) {
    return null;
  }

  const {
    testSlots = [],
    nonTestActivities = [],
    deployments = [],
    advanceTestSlots = [],
  } = journal;

  return {
    ...journal,
    testSlots: filterByTestCentreAndDate(testCentreDetail, testSlots),
    nonTestActivities: filterByTestCentreAndDate(testCentreDetail, nonTestActivities),
    deployments: filterByTestCentreAndDate(testCentreDetail, deployments),
    advanceTestSlots: filterByTestCentreAndDate(testCentreDetail, advanceTestSlots),
  };
};

const isAnyOf = (
  dataValue: string | number | undefined,
  valuesToCheck: (string | number)[],
): boolean => valuesToCheck.some((value: string | number) => dataValue === value);

const filterByTestCentreAndDate = <T>(testCentreDetail: TestCentreDetail, info: T[] = []): T[] => {
  return info.filter((section: TestSlot | NonTestActivity | Deployment | AdvanceTestSlot) => {
    return (
      section.testCentre &&
      isAnyOf(section.testCentre.centreId, testCentreDetail.testCentreIDs) &&
      inNext2Days(section)
    );
  });
};

const inNext2Days = <T>(section: T): boolean => {
  const slotDate: string = get(section, 'slotDetail.start', '');

  const today: boolean = moment(slotDate).isSame(moment(), 'day');
  const tomorrow: boolean = moment(slotDate).isSame(moment().add(1, 'day'), 'day');

  return today || tomorrow;
};
