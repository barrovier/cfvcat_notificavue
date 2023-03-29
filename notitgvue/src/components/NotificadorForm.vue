<template>
  <div class="row full-width items-start">
    <div class="col-xs-12 col-sm-12 col-md-12 q-pa-xs q-pb-xs">
      <q-select outlined v-model="mynotificador.professio" label="Selecciona la teva professió" :options="options.professio" dense options-dense
        bottom-slots
        error-message="És necessari seleccionar una opció"
        :error="errorProfessio"/>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 q-pa-xs" v-if="mynotificador.professio && mynotificador.professio.value===8">
      <q-input outlined dense v-model="mynotificador.altraProfessio" label="Professió del notificador" hint="Descriu la teva professió"/>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="mynotificador.nomEmisor" label="Nom del notificador" hint="Escriu el teu nom"
        bottom-slots
        error-message="El camp no es pot deixar buit"
        :error="errorNomEmisor"/>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="mynotificador.cognomsEmisor" label="Cognoms del notificador" hint="Escriu els teus cognoms"
        bottom-slots
        error-message="El camp no es pot deixar buit"
        :error="errorCognomsEmisor"/>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="mynotificador.adreca" label="Adreça del notificador" hint="Escriu la teva adreça"/>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="mynotificador.nomPoblacio" label="Població del notificador" hint="Escriu la teva població"/>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-select outlined v-model="mynotificador.provincia" label="Selecciona la teva provincia" :options="options.provincia" dense options-dense/>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-select
        outlined
        v-model="mynotificador.centreTreball"
        use-input
        hide-selected
        fill-input
        new-value-mode="add-unique"
        input-debounce="0"
        clearable
        :options="centres"
        @filter="filtraCentre"
        dense label="Centre de treball del notificador"
        hint="Escriu i selecciona una opció o prem ENTER per validar la teva entrada"
        bottom-slots
        error-message="És necessari seleccionar una opció"
        :error="errorCentreTreball">
      </q-select>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="mynotificador.telefon" type="tel" label="Telèfon de contacte del notificador" hint="Escriu el teu telèfon de contacte"/>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="mynotificador.email" type="email" label="Adreça email del notificador" hint="Escriu la teva adreça Email"
        bottom-slots
        error-message="L'adreça no té un format correcte"
        :error="errorEmail"/>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
      <q-input outlined dense v-model="verificaEmail" type="email" label="Escriu un altre cop l'adreça email del notificador" hint="Confirmació adreça Email" @paste.prevent
        bottom-slots
        error-message="L'adreça no coincideix"
        :error="errorVerificaEmail"/>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'
import { api } from 'boot/axios'
import { Notify } from 'quasar'

const verificaEmail = ref('')
const centres = ref([])
const mynotificador = ref({
  professio: { value: 1, label: '-' },
  altraProfessio: '',
  nomEmisor: '',
  cognomsEmisor: '',
  adreca: '',
  nomPoblacio: '',
  provincia: { value: 1, label: '-' },
  centreTreball: '',
  telefon: '',
  email: ''
})

export default {
  computed: {
    ...mapState('optionstore', ['options'])
  },
  props: ['notificador'],
  methods: {
    filtraCentre (val, update, abort) {
      update(() => {
        if ((val.length === 0) || (val.length < 2)) {
          this.centres = []
          abort()
          return
        }
        const needle = val.toLowerCase()
        api.get('/centres?term=' + needle).then(response => {
          if (response.data.error === 0) {
            this.centres = response.data.centres
          }
        }).catch(error => {
          console.log(error)
          Notify.create({
            message: error.message
          })
        })
      })
    },
    validaProfessio (val) {
      if (val.value === 1) {
        this.errorProfessio = true
      } else {
        this.errorProfessio = false
        if (val.value !== 8) {
          this.mynotificador.altraProfessio = ''
        }
      }
    },
    validaNomEmisor (val) {
      const nomBuit = this.mynotificador.nomEmisor === null || this.mynotificador.nomEmisor === ''
      this.errorNomEmisor = nomBuit
    },
    validaCognomsEmisor (val) {
      const nomBuit = this.mynotificador.cognomsEmisor === null || this.mynotificador.cognomsEmisor === ''
      this.errorCognomsEmisor = nomBuit
    },
    validaCentreTreball (val) {
      const okCentre = (typeof val === 'object' && val !== null) || (typeof val === 'string' && val !== '')
      this.errorCentreTreball = !okCentre
    },
    validaEmail (val, verifica) {
      if (!verifica) {
        this.errorEmail = (!val) || (val.length < 6) || !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val))
      } else {
        this.errorVerificaEmail = val !== this.mynotificador.email
      }
    },
    validaNotificador () {
      this.validaProfessio(this.mynotificador.professio)
      this.validaNomEmisor(this.mynotificador.nomEmisor)
      this.validaCognomsEmisor(this.mynotificador.cognomsEmisor)
      this.validaCentreTreball(this.mynotificador.centreTreball)
      this.validaEmail(this.mynotificador.email, false)
      this.validaEmail(this.verificaEmail, true)
      return (this.errorProfessio || this.errorNomEmisor || this.errorCognomsEmisor || this.errorCentreTreball || this.errorEmail || this.errorVerificaEmail)
    }
  },
  setup () {
    return {
      centres,
      verificaEmail,
      mynotificador,
      loading: ref(true),
      errorProfessio: ref(false),
      errorNomEmisor: ref(false),
      errorCognomsEmisor: ref(false),
      errorCentreTreball: ref(false),
      errorEmail: ref(false),
      errorVerificaEmail: ref(false)
    }
  },
  mounted () {
    this.mynotificador = this.notificador
  },
  watch: {
    'mynotificador.professio': {
      handler (val) {
        if (this.loading) {
          this.loading = false
          return
        }
        this.validaProfessio(val)
        this.$emit('input', val)
      }
    },
    'mynotificador.nomEmisor': {
      handler (val) {
        this.validaNomEmisor(val)
        this.$emit('input', val)
      }
    },
    'mynotificador.cognomsEmisor': {
      handler (val) {
        this.validaCognomsEmisor(val)
        this.$emit('input', val)
      }
    },
    'mynotificador.centreTreball': {
      handler (val) {
        this.validaCentreTreball(val)
        this.$emit('input', val)
      }
    },
    'mynotificador.email': {
      handler (val) {
        this.validaEmail(val, false)
        this.$emit('input', val)
      }
    },
    verificaEmail: {
      handler (val) {
        this.validaEmail(val, true)
      }
    }

  }
}
</script>
