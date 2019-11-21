import { http } from './http'

export const login = (data: Record<string, any> = {}) => {
  const form = new URLSearchParams()

  Object.keys(data).forEach(key => form.append(key, data[key]))

  return http.post('/users/_/login', form, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
