import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';
import { LambdaResponse } from '../types/lambdaResponse.type';

export const ping = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<LambdaResponse> => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
        context: context,
        callback: callback,
      },
      null,
      2
    ),
  };
};
