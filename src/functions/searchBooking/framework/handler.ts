import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import createResponse from '../../../common/application/utils/createResponse';

export async function handler(event: APIGatewayProxyEvent, fnCtx: Context) {
  return createResponse('success');
}
