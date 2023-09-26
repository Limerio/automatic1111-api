import { Response } from './types.ts'

type RequestMethods = 'GET' | 'POST'

type Data = {
  method: RequestMethods
  body?: string
}

export interface Api {
  request: <D, P>(
    method: RequestMethods,
    path: string,
    payload?: P,
  ) => Promise<Response<D>>
}

export const api = (url: string, base: string) => {
  const request = async <D, P>(
    method: RequestMethods,
    path: string,
    payload?: P,
  ): Promise<Response<D>> => {
    let data: Data

    switch (method) {
      case 'GET':
        data = {
          method,
          body: JSON.stringify(payload),
        }
        break

      case 'POST':
        data = {
          method,
        }
        break
    }
    const res = await fetch(`${url}/${base}/${path}`, data)

    return { status: res.status, data: await res.json() }
  }
  return { request }
}
