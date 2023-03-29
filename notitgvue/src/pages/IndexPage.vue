<template>
  <q-page class="flex">

    <div class="q-pa-md full-width text-tg text-size16" align="center">
      <p class="text-h4 text-secondary">{{ $t('idxBenvingut') }}</p>
      <p class="text-h5 text-secondary">{{ $t('idxProgramaTG') }}</p>
      <div class="q-pa-md" align="left">
        <p>
          {{ $t('idxProfSalut') }} <strong>{{ $t('idxCiutada') }} <a href="https://www.notificaram.es">{{ $t('idxLlocWeb') }}</a></strong><br/><br/>
          {{ $t('idxNotificacioTG') }}<br />
          {{ $t('idxCFVCAT') }}
          <br /> <br />
          <strong>{{ $t('idxQueNotificar') }}</strong>
          <br />
          {{ $t('idxEssencial') }}
          <ul>
            <li v-html="$t('idxEssencial1')"/>
            <li v-html="$t('idxEssencial2')"/>
            <li v-html="$t('idxEssencial3')"/>
          </ul>
        </p>
      </div>
      <div class="q-pa-none" align="center">
        <q-btn push color="grey-4" text-color="primary" :label="$t('btnNotifica')" @click="notifica"/>
      </div>
      <div class="q-pa-none" align="center">
        <q-checkbox v-model="accepto" /> {{ $t('idxAccepto') }}
      </div>
      <div class="q-pa-md" align="left">
        <p class="text-body2" v-html="$t('idxCondicions')"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'IndexPagex',
  methods: {
    notifica () {
      if (this.accepto) {
        this.$router.push('/notifica')
      } else {
        Notify.create({
          color: 'negative',
          icon: 'warning',
          message: this.$t('idxLlegeix')
        })
      }
    }
  },
  setup () {
    return {
      accepto: ref(false)
    }
  }
})
</script>
