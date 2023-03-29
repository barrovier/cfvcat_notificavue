<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-terciary text-white">
      <q-toolbar>
        <img src="logo-tg-small.png">
        <q-space/>
        <img src="logo-cfvcat-bl-tr.png" class="gt-xs" height="70">
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-white">
      <q-toolbar>
        <q-space/>
        <p class="text-primary text-tg">{{ $t('tmplCFVCAT') }} Copyright &copy; {{ this.anyActual }} </p>
        <q-space/>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

const anyActual = new Date().getFullYear()

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      anyActual
    }
  }
})
</script>
