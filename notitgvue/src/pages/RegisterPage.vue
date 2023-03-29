<template>
  <q-page class="flex flex-center">
    <img class="q-pl-md q-pr-md"
    alt="Quasar logo"
    src="~assets/quasar-logo-vertical.svg"
    style="width: 200px; height: 200px"
    >
    <div class="q-pl-md q-pr-md" style="min-width: 300px; max-width: 400px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          outlined
          v-model="name"
          label="Your name *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          outlined
          v-model="email"
          type="email"
          label="Your email *"
          lazy-rules
          :rules="[val => !!val || 'Email is missing', isValidEmail]"
        />
        <q-input
          outlined
          v-model="password"
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

        <q-input
          outlined
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

      <div class="q-mt-lg text-body2">
        Some text about something about the service and bla bla bla.
      </div>

    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'RegisaterPage',
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const email = ref(null)
    const age = ref(null)
    const password = ref(null)
    const accept = ref(false)
    const isPwd = ref(true)

    return {
      name,
      email,
      password,
      age,
      accept,
      isPwd,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        email.value = null
        age.value = null
        accept.value = false
      }
    }
  },
  methods: {
    isValidEmail () {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(this.email) || 'Invalid email'
    }
  }
}
</script>
