import { DynamoDB } from 'aws-sdk';
import * as logger from '../../../common/application/utils/logger';
import { TestCentreDetail } from '../../domain/TestCentreDetailRecord';

const createDynamoClient = () => {
  return process.env.IS_OFFLINE
    ? new DynamoDB.DocumentClient({ endpoint: 'http://localhost:8000' })
    : new DynamoDB.DocumentClient();
};

const ddb = createDynamoClient();
const tableName = getTestCentreTableName();

export async function getTestCentre(staffNumber: string): Promise<TestCentreDetail | null> {
  const testCentreGetResult = await ddb.get({
    TableName: tableName,
    Key: {
      staffNumber,
    },
  }).promise();

  if (testCentreGetResult.Item === undefined) {
    return null;
  }

  return testCentreGetResult.Item as TestCentreDetail;
}

function getTestCentreTableName(): string {
  let tableName = process.env.TEST_CENTRE_DDB_TABLE_NAME;
  if (tableName === undefined || tableName.length === 0) {
    logger.warn('No test centre table name set, using the default');
    tableName = 'test-centre';
  }
  return tableName;
}
