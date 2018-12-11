/**
 * @typedef  {Object}  LoginData
 * @property {String}  username
 * @property {String}  password
 */

/**
*
* @param {LoginData} data
*/
const mockLogin = (data = {}) => {
  return new Promise((resolve, reject) => {
    const {username, password} = data
    const valid = username === 'admin' && password === 'admin'
    setTimeout(() => valid ? resolve(data) : reject(new Error('Invalid details')), 3000)
  })
}

export const login = (data = {}) => {
  return mockLogin(data)
}
