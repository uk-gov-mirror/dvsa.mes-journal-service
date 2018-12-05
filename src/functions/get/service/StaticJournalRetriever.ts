import { JournalRetriever } from './JournalRetriever';
import Journal from '../../../interfaces/Journal';
import { injectable } from 'inversify';

@injectable()
export class StaticJournalRetriever implements JournalRetriever {

  getJournal(): Journal {
    return {
      staffNumber: 1234,
      examinerName: {},
      permTestCentre: {},
      testSlot: [],
      personalCommitment: [],
      nonTestActivity: [],
      advanceTestSlot: [],
      deployment: [],
    };
  }

}
