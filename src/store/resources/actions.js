import axios from '@/utils/fd-axios'

export const getResource = (context, resourceId) => {
  return axios.defaults.baseURL + '/resources/' + resourceId
}
