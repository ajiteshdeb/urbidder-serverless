// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const hello = (event: unknown) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        input: event,
      },
      null,
      2
    ),
  };
};
export default hello;
