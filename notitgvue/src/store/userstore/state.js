import { ref } from 'vue'

export default function () {
  return {
    userDetails: ref({
      username: '',
      accesstoken: ''
    })
  }
}
