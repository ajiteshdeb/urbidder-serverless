"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const ping = async (event, context, callback) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
            context: context,
            callback: callback,
        }, null, 2),
    };
};
exports.ping = ping;
//# sourceMappingURL=ping.js.map