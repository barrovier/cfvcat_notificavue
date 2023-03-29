import { Notify } from 'quasar'
import { api } from 'boot/axios'

export function loginUser ({ commit }, payload) {
  api.post('/v1/user/login', payload).then(response => {
    commit('setUserDetails', {
      username: payload.username,
      accesstoken: response.data['x-access-token']
    })
    this.$router.push('app')
  }).catch(error => {
    console.log(error)
    Notify.create({
      message: error.message
    })
    payload.submitting = false

    commit('setUserDetails', {
      username: payload.username,
      accesstoken: 'abcd1234'
    })
    this.$router.push('app')
  })
}

export function logoutUser ({ commit }) {
  commit('setUserDetails', {
    username: '',
    accesstoken: ''
  })
  this.$router.push('/')
}
