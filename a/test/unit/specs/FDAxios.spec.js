import Vue from 'vue'
import 'vue-material/dist/vue-material.css'
import VueAxios from 'vue-axios'
import axios from '@/utils/fd-axios'
import App from '../../../src/App'

Vue.use(VueAxios, axios)

describe('FD Axios', () => {
  it('should retriever proper data from ', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$http.get(`/plugins`)
        .then(request => { expect(request.data).to.be.an('array') })
  })
})
