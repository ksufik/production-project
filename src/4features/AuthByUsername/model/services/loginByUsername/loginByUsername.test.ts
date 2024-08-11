import { userActions } from '5entities/User'
import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import axios from 'axios'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUsername', () => {
  const userFromServer = { username: '123', id: '1' }
  const userAuthData = { username: 'admin', password: '123' }
  //! читаемый сценарий - оставила для наглядности
  // let dispatch: useAppDispatch
  // let getState: () => StateSchema

  //  // запускается перед каждый тестом, т.е. dispatch и getState каждый раз создаются заново
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('success login', async () => {
  //   // замокали ответ с сервера
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userFromServer }))
  //   const action = loginByUsername(userAuthData)
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userFromServer))

  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userFromServer)
  // })

  // test('error login', async () => {
  //   // замокали ответ с сервера
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername(userAuthData)
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toBe('auth error')
  // })

  // а тут уже используем класс TestAsyncThunk, предназначенный для стандартизации тестирования асинх санков
  test('success login', async () => {
    // замокали ответ с сервера
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userFromServer }))
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userAuthData }))

    const result = await thunk.callThunk(userAuthData)

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userFromServer))

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userFromServer)
  })

  test('error login', async () => {
    // замокали ответ с сервера
    // mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)
    // замокали ответ с сервера
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(userAuthData)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('auth error')
  })
})
