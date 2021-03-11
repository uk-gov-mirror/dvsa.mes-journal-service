import { ExaminerWorkSchedule } from '@dvsa/mes-journal-schema';

export type Examiner = {
  name: string;
  staffNumber: string;
  journal?: ExaminerWorkSchedule | null;
  error?: string;
};

export interface TestCentreDetail {
  staffNumber: string;
  examiners: Examiner[];
  testCentreIDs: number[];
}
