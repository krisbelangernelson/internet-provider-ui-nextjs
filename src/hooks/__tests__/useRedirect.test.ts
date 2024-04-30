import { renderHook } from '@testing-library/react'
import useRedirect from '../useRedirect'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const mockedUseRouter = useRouter as jest.Mock<AppRouterInstance>

const pushMock = jest.fn()
jest.mock('next/navigation')

mockedUseRouter.mockImplementation(() => ({ ...jest.requireActual('next/navigation'), push: pushMock }))

describe('useRedirect', () => {
  it('should return a function', () => {
    renderHook(() => useRedirect(true, '/'))
    expect(pushMock).toHaveBeenCalledWith('/')
  })
})
