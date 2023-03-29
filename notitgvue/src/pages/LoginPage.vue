<template>
  <q-page class="flex flex-center">
    <img class="q-pl-md q-pr-md"
    alt="Quasar logo"
    src="~assets/quasar-logo-vertical.svg"
    style="width: 200px; height: 200px"
    >
    <div class="q-pl-md q-pr-md" style="min-width: 300px; max-width: 400px">
      <q-form
        @submit.prevent="submitForm"
        class="q-gutter-md"
      >
        <q-input
          outlined
          v-model="formData.username"
          type="email"
          label="Your email *"
          lazy-rules
          :rules="[val => !!val || 'Email is missing', isValidEmail]"
        />

        <q-input
          outlined
          v-model="formData.password"
          :type="isPwd ? 'password' : 'text'"
          label="Your password *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="flex flex-center">
          <q-btn
            type="submit"
            label="Submit"
            :loading="formData.submitting"
            color="primary"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
      </q-form>

      <div class="q-mt-lg text-body2">
        Forgot the password? Click here (TODO)
      </div>

      <div class="q-mt-lg text-body2">
        If you don't have an account, you may <a href="/#/register">sign up</a>.
      </div>

    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      isPwd: true,
      formData: {
        submitting: false,
        username: 'pepe@pepe.es',
        password: '1234'
      }
    }
  },
  methods: {
    ...mapActions('userstore', ['loginUser']),
    submitForm () {
      if (this.submitting) {
        return
      }
      this.formData.submitting = true
      // timeout is only for network delay simulation
      this.loginUser(this.formData)
    },
    isValidEmail () {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(this.formData.username) || 'Invalid email'
    }
  }
}
</script>
