import { getJournal } from '../../framework/aws/DynamoJournalRepository';
import { ExaminerWorkSchedule } from '../../../../common/domain/Journal';
import { decompressJournal } from './journal-decompressor';
import * as logger from '../../../../common/application/utils/logger';

export async function findJournal(staffNumber: string): Promise<ExaminerWorkSchedule | null> {
  const journalRecord = await getJournal(staffNumber);
  if (!journalRecord) {
    return null;
  }

  try {
    return decompressJournal(journalRecord.journal);
  } catch (error) {
    logger.error(error);
    return null;
  }
}
