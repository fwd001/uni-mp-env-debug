import { request } from '@/commons/request'

export function getTest(data = {}) {
  return request.get('/get?p=2', {
    data: {
      ...data
    },
  })
}

export function postTest(data = {}) {
  return request.post('/post', data)
}