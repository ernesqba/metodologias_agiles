export default {
  '/health': {
    get: {
      tags: [''],
      description: 'Check api health',
      operationId: 'health',
      security: [
        {
          bearerToken: [],
        },
      ],
      responses: {
        200: {
          description: 'Response to health check',
          content: {
            'application/json': {
              schema: {
                type: 'string',
                example: 'All good!!!',
              },
            },
          },
        },
      },
    },
  },
}
