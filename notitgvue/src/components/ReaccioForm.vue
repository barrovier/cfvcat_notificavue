<template>
  <q-card style="width: 90vw; max-width: 90vw;">
    <q-card-section class="row q-pb-none q-mb-none">
      <div class="text-h6" v-if="this.formData.indexReaccio===-1">{{ $t('headAfegir') }} {{ $t('lblReaccio') }}</div>
      <div class="text-h6" v-else>{{ $t('headEditar') }} {{ $t('lblReaccio') }}</div>
      <q-space/>
      <q-btn flat round dense icon="close" v-close-popup/>
    </q-card-section>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="q-mb-xs q-pl-xs q-pr-xs">
          <p>{{ $t('subDadesReaccions') }}</p>
        </div>
        <div class="q-mb-xs q-pl-xs q-pr-xs">
          <q-input
            :label="$t('lblReaccioDesc')"
            ref="reaccio"
            outlined dense v-model="formData.reaccio"
            :rules="[ val => !!val || $t('errorDescripcioReaccio')]"/>
        </div>
        <div class="row q-mb-xs">
          <div class="col q-pl-xs q-pr-xs">
            <q-input
              :label="$t('lblDataInici')"
              ref="dataInici"
              outlined dense v-model="formData.dataInici"
              :rules="[ val => testData(val, false) || $t('errorData')]"/>
          </div>
          <div class="col q-pl-xs q-pr-xs">
            <q-input
              :label="$t('lblDataFinal')"
              ref="dataFinal"
              outlined dense v-model="formData.dataFinal"
              :rules="[ val => testData(val, true) || $t('errorData')]"/>
          </div>
        </div>
        <div class="q-mb-xs q-pl-xs q-pr-xs">
          <q-select
            outlined
            dense
            :label="$t('lblDesen')"
            ref="desen"
            v-model="formData.desen"
            :options="options.desen"
            :rules="[ val => (val.value > 1) || $t('errorOpcioInvalida')]"/>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn type="submit" :label="$t('btnGuardar')" color="primary"
          :ripple="{ center: true }"/>
      </q-card-actions>
    </form>

  </q-card>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('optionstore', ['options'])
  },
  props: ['reaccio'],
  data () {
    return {
      formData: ref({
        indexReaccio: -1,
        reaccio: '',
        dataInici: '',
        dataFinal: '',
        desen: { value: 1, label: '-' }
      })
    }
  },
  methods: {
    testData (val, buidaOk) {
      return (buidaOk && (val === null || val === '' || val.length === 0)) || /^(([0-3]\d\/)?[0-1]\d\/)?[\d]{4}$/.test(val)
    },
    submitForm () {
      this.$refs.reaccio.validate()
      this.$refs.dataInici.validate()
      this.$refs.dataFinal.validate()
      this.$refs.desen.validate()
      if ((!this.$refs.reaccio.hasError) &&
          (!this.$refs.desen.hasError) &&
          (!this.$refs.dataInici.hasError) &&
          (!this.$refs.dataFinal.hasError)) {
        this.$emit('close', this.formData)
      }
    }
  },
  mounted () {
    const idx = this.reaccio.indexReaccio
    this.formData.indexReaccio = idx
    if (idx !== -1) {
      this.formData.reaccio = idx === -1 ? '' : this.reaccio.reaccio
      this.formData.dataInici = idx === -1 ? '' : this.reaccio.dataInici
      this.formData.dataFinal = idx === -1 ? '' : this.reaccio.dataFinal
      this.formData.desen = idx === -1 ? { value: 1, label: '-' } : this.reaccio.desen
    }
  }
}
</script>
