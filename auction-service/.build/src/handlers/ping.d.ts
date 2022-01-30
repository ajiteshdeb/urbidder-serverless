import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';
import { LambdaResponse } from '../types/lambdaResponse.type';
export declare const ping: (event: APIGatewayProxyEvent, context: Context, callback: Callback) => Promise<LambdaResponse>;
