import axios from 'axios'

import * as graphqlService from './graphql.service'

describe('graphql service tests', () => {
  let axiosMock

  beforeAll(() => {
    axiosMock = jest.spyOn(axios, 'post')
  })

  describe('post graphql', () => {
    let response

    beforeAll(async () => {
      jest.clearAllMocks()
      axiosMock.mockImplementation(() => Promise.resolve({ data: {} }))

      response = await graphqlService.postGraphqlService({})
    })

    it('should return a object', () => {
      expect(response).toEqual({})
    })

    it('injector should be called', () => {
      expect(axiosMock).toBeCalledTimes(1)
    })
  })
})
