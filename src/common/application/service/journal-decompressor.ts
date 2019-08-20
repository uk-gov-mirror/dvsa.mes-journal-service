import { ExaminerWorkSchedule } from '@dvsa/mes-journal-schema/Journal';
import { gunzipSync } from 'zlib';

export const decompressJournal = (compressedJournal: any): ExaminerWorkSchedule => {
  let journalToProcess;
  if (process.env.IS_OFFLINE) {
    journalToProcess = Buffer.from(compressedJournal, 'base64');
  } else {
    journalToProcess = compressedJournal;
  }
  const unzippedJson = gunzipSync(journalToProcess).toString();
  return JSON.parse(unzippedJson) as ExaminerWorkSchedule;
};
