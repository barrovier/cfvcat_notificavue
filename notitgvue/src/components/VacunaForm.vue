<template>
  <q-card style="width: 80vw; max-width: 80vw;">
    <q-card-section class="row q-pb-none q-mb-none">
      <div class="text-h6">{{ $t('headEditar') }} {{ $t('lblVacuna') }}</div>
      <q-space/>
      <q-btn flat round dense icon="close" v-close-popup/>
    </q-card-section>

    <q-separator />

    <form @submit.prevent="submitForm">
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="row items-start">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('lblDataVacunacio')"
              ref="dataVacunacio"
              outlined dense v-model="subformData.dataVacunacio"
              :rules="[ val => testData(val, false) || $t('errorData')]"/>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('lblLlocAdmin')"
              ref="llocAdmin"
              outlined dense v-model="subformData.llocAdmin"/>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('lblVacunaNDosi')"
              ref="vacunaNDosi"
              v-model="subformData.vacunaNDosi"
              :options="options.vacunaNDosi"/>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 q-px-xs q-pb-xs">
            <div class="q-pa-none p-ma-none" v-if="subformData.vacunaNDosi.value>2">
              <q-select
                outlined
                hide-bottom-space
                dense
                :label="$t('lblNotiRADosiPrev')"
                ref="notiRADosiPrev"
                v-model="subformData.notiRADosiPrev"
                :options="options.siNo"/>
              </div>
          </div>
        </div>
        <div class="row items-start" v-if="subformData.notiRADosiPrev.value===3">
          <div class="col-xs-12 col-sm-12 col-md-12 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('lblNotiRADosiPrevEspecif')"
              ref="notiRADosiPrevEspecif"
              outlined dense v-model="subformData.notiRADosiPrevEspecif"/>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('lblVacunaCOVIDSN')"
              ref="vacunaCOVIDSN"
              v-model="subformData.vacunaCOVIDSN"
              :options="options.siNo"/>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 q-px-xs q-pb-xs" v-if="subformData.vacunaCOVIDSN.value===3">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('lblVacunaNom')"
              ref="vacuna"
              v-model="subformData.vacuna"
              :options="options.vacuna"
              :rules="[ val => (val.value > 1) || $t('errorOpcioInvalida')]"/>
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacuna.value===10">
          <div class="col-xs-12 col-sm-12 col-md-12 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('lblVacunaEspecif')"
              ref="lblVacunaEspecif"
              outlined dense v-model="subformData.vacunaEspecif"/>
            </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('lblPacientHaPatitCOVID')"
              ref="pacientHaPatitCOVID"
              v-model="subformData.pacientHaPatitCOVID"
              :options="options.siNo"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <div class="q-pa-none p-ma-none" v-if="subformData.pacientHaPatitCOVID.value===3">
              <q-select
                outlined
                hide-bottom-space
                dense
                :label="$t('lblExisteixProvaPositiva')"
                ref="existeixProvaPositiva"
                v-model="subformData.existeixProvaPositiva"
                :options="options.siNo"/>
            </div>
          </div>
        </div>
        <div class="row items-start" v-if="subformData.pacientHaPatitCOVID.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.covidAsimptomatic"
              :label="$t('lblCovidAsimptomatic')" />
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.covidSimptomatic"
              :label="$t('lblCovidSimptomatic')" />
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.covidSimptomaticIH"
              :label="$t('lblCovidSimptomaticIH')" />
          </div>
        </div>
        <div class="row items-start" v-if="subformData.pacientHaPatitCOVID.value===3">
          <div class="col-xs-12 col-sm-12 col-md-12 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('lblPacientHaPatitCOVIDEspecif')"
              ref="pacientHaPatitCOVIDEspecif"
              outlined dense v-model="subformData.pacientHaPatitCOVIDEspecif"/>
            </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-12 col-md-12 q-px-xs q-pb-xs text-caption">
            <strong>{{ $t('headGrupsRisc') }}</strong>
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscMajor65Anys"/>
            {{ $t('lblGrupriscMajor65Anys') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscProfSanitari"/>
            {{ $t('lblGrupriscProfSanitari') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscMalaltiaCardioVascular" />
            {{ $t('lblGrupriscMalaltiaCardioVascular') }}
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscDiabetisTipus2"/>
            {{ $t('lblGrupriscDiabetisTipus2') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscEPOC"/>
            {{ $t('lblGrupriscEPOC') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscCancer" />
            {{ $t('lblGrupriscCancer') }}
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscTrasplOrganSolid"/>
            {{ $t('lblGrupriscTrasplOrganSolid') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscMalaltiaRenalCronica"/>
            {{ $t('lblGrupriscMalaltiaRenalCronica') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscObsesitat" />
            {{ $t('lblGrupriscObsesitat') }}
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscHTA"/>
            {{ $t('lblGrupriscHTA') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscDiabetisTipus1"/>
            {{ $t('lblGrupriscDiabetisTipus1') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscAsma" />
            {{ $t('lblGrupriscAsma') }}
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscImmunosup"/>
            {{ $t('lblGrupriscImmunosup') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscEmbaras"/>
            {{ $t('lblGrupriscEmbaras') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscTrastNeuroPsiq" />
            {{ $t('lblGrupriscTrastNeuroPsiq') }}
          </div>
        </div>
        <div class="row items-start" v-if="subformData.vacunaCOVIDSN.value===3">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscMalaltiaHapatoCron"/>
            {{ $t('lblGrupriscMalaltiaHapatoCron') }}
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs q-pb-xs text-caption">
            <q-checkbox
              hide-bottom-space dense
              v-model="subformData.grupriscTrastMetabolCongen"/>
            {{ $t('lblGrupriscTrastMetabolCongen') }}
          </div>
        </div>
      </q-card-section>

      <q-separator />

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
  props: ['vacuna'],
  data () {
    return {
      subformData: ref({
        indexFarmac: -1,
        dataVacunacio: '',
        llocAdmin: '',
        vacunaNDosi: { value: 1, label: '-' },
        notiRADosiPrev: { value: 1, label: '-' },
        notiRADosiPrevEspecif: '',
        vacunaCOVIDSN: { value: 1, label: '-' },
        vacuna: { value: 1, label: '-' },
        vacunaEspecif: '',
        pacientHaPatitCOVID: { value: 1, label: '-' },
        existeixProvaPositiva: { value: 1, label: '-' },
        covidAsimptomatic: false,
        covidSimptomatic: false,
        covidSimptomaticIH: false,
        pacientHaPatitCOVIDEspecif: '',
        grupriscMajor65Anys: false,
        grupriscProfSanitari: false,
        grupriscMalaltiaCardioVascular: false,
        grupriscDiabetisTipus2: false,
        grupriscEPOC: false,
        grupriscCancer: false,
        grupriscTrasplOrganSolid: false,
        grupriscMalaltiaRenalCronica: false,
        grupriscObsesitat: false,
        grupriscHTA: false,
        grupriscDiabetisTipus1: false,
        grupriscAsma: false,
        grupriscImmunosup: false,
        grupriscEmbaras: false,
        grupriscTrastNeuroPsiq: false,
        grupriscMalaltiaHapatoCron: false,
        grupriscTrastMetabolCongen: false
      })
    }
  },
  methods: {
    testData (val, buidaOk) {
      return (buidaOk && (val === null || val === '' || val.length === 0)) || /^(([0-3]\d\/)?[0-1]\d\/)?[\d]{4}$/.test(val)
    },
    submitForm () {
      this.$refs.dataVacunacio.validate()
      if (this.subformData.vacunaCOVIDSN.value === 3) {
        this.$refs.vacuna.validate()
        if ((!this.$refs.dataVacunacio.hasError) &&
            (!this.$refs.vacuna.hasError)) {
          this.$emit('close', this.subformData)
        }
      } else {
        if (!this.$refs.dataVacunacio.hasError) {
          this.$emit('close', this.subformData)
        }
      }
    }
  },
  watch: {
    'subformData.vacunaNDosi': {
      handler (val) {
        if (val.value < 3) {
          this.subformData.notiRADosiPrev = { value: 1, label: '-' }
          this.subformData.notiRADosiPrevEspecif = null
        }
      }
    },
    'subformData.notiRADosiPrev': {
      handler (val) {
        if (val.value !== 3) {
          this.subformData.notiRADosiPrevEspecif = null
        }
      }
    },
    'subformData.vacunaCOVIDSN': {
      handler (val) {
        if (val.value !== 3) {
          this.subformData.vacuna = { value: 1, label: '-' }
          this.subformData.pacientHaPatitCOVID = { value: 1, label: '-' }
          this.subformData.grupriscMajor65Anys = false
          this.subformData.grupriscProfSanitari = false
          this.subformData.grupriscMalaltiaCardioVascular = false
          this.subformData.grupriscDiabetisTipus2 = false
          this.subformData.grupriscEPOC = false
          this.subformData.grupriscCancer = false
          this.subformData.grupriscTrasplOrganSolid = false
          this.subformData.grupriscMalaltiaRenalCronica = false
          this.subformData.grupriscObsesitat = false
          this.subformData.grupriscHTA = false
          this.subformData.grupriscDiabetisTipus1 = false
          this.subformData.grupriscAsma = false
          this.subformData.grupriscImmunosup = false
          this.subformData.grupriscEmbaras = false
          this.subformData.grupriscTrastNeuroPsiq = false
          this.subformData.grupriscMalaltiaHapatoCron = false
          this.subformData.grupriscTrastMetabolCongen = false
        }
      }
    },
    'subformData.vacuna': {
      handler (val) {
        if (val.value !== 10) {
          this.subformData.vacunaEspecif = null
        }
      }
    },
    'subformData.pacientHaPatitCOVID': {
      handler (val) {
        if (val.value !== 3) {
          this.subformData.existeixProvaPositiva = { value: 1, label: '-' }
          this.subformData.covidAsimptomatic = false
          this.subformData.covidSimptomatic = false
          this.subformData.covidSimptomaticIH = false
          this.subformData.pacientHaPatitCOVIDEspecif = null
        }
      }
    },
    'subformData.covidAsimptomatic': {
      handler (val) {
        if (val) {
          this.subformData.covidSimptomatic = false
          this.subformData.covidSimptomaticIH = false
        }
      }
    },
    'subformData.covidSimptomatic': {
      handler (val) {
        if (val) {
          this.subformData.covidAsimptomatic = false
          this.subformData.covidSimptomaticIH = false
        }
      }
    },
    'subformData.covidSimptomaticIH': {
      handler (val) {
        if (val) {
          this.subformData.covidSimptomatic = false
          this.subformData.covidAsimptomatic = false
        }
      }
    }
  },
  created () {
    const idx = this.vacuna.indexFarmac
    this.subformData.indexFarmac = idx
    if (idx !== -1) {
      this.subformData.dataVacunacio = idx === -1 ? '' : this.vacuna.dataVacunacio
      this.subformData.llocAdmin = idx === -1 ? '' : this.vacuna.llocAdmin
      this.subformData.vacunaNDosi = idx === -1 ? { value: 1, label: '-' } : this.vacuna.vacunaNDosi
      this.subformData.notiRADosiPrev = idx === -1 ? { value: 1, label: '-' } : this.vacuna.notiRADosiPrev
      this.subformData.notiRADosiPrevEspecif = idx === -1 ? '' : this.vacuna.notiRADosiPrevEspecif
      this.subformData.vacunaCOVIDSN = idx === -1 ? { value: 1, label: '-' } : this.vacuna.vacunaCOVIDSN
      this.subformData.vacuna = idx === -1 ? { value: 1, label: '-' } : this.vacuna.vacuna
      this.subformData.vacunaEspecif = idx === -1 ? '' : this.vacuna.vacunaEspecif
      this.subformData.pacientHaPatitCOVID = idx === -1 ? '' : this.vacuna.pacientHaPatitCOVID
      this.subformData.existeixProvaPositiva = idx === -1 ? '' : this.vacuna.existeixProvaPositiva
      this.subformData.covidAsimptomatic = idx === -1 ? false : this.vacuna.covidAsimptomatic
      this.subformData.covidSimptomatic = idx === -1 ? false : this.vacuna.covidSimptomatic
      this.subformData.covidSimptomaticIH = idx === -1 ? false : this.vacuna.covidSimptomaticIH
      this.subformData.pacientHaPatitCOVIDEspecif = idx === -1 ? '' : this.vacuna.pacientHaPatitCOVIDEspecif
      this.subformData.grupriscMajor65Anys = idx === -1 ? false : this.vacuna.grupriscMajor65Anys
      this.subformData.grupriscProfSanitari = idx === -1 ? false : this.vacuna.grupriscProfSanitari
      this.subformData.grupriscMalaltiaCardioVascular = idx === -1 ? false : this.vacuna.grupriscMalaltiaCardioVascular
      this.subformData.grupriscDiabetisTipus2 = idx === -1 ? false : this.vacuna.grupriscDiabetisTipus2
      this.subformData.grupriscEPOC = idx === -1 ? false : this.vacuna.grupriscEPOC
      this.subformData.grupriscCancer = idx === -1 ? false : this.vacuna.grupriscCancer
      this.subformData.grupriscTrasplOrganSolid = idx === -1 ? false : this.vacuna.grupriscTrasplOrganSolid
      this.subformData.grupriscMalaltiaRenalCronica = idx === -1 ? false : this.vacuna.grupriscMalaltiaRenalCronica
      this.subformData.grupriscObsesitat = idx === -1 ? false : this.vacuna.grupriscObsesitat
      this.subformData.grupriscHTA = idx === -1 ? false : this.vacuna.grupriscHTA
      this.subformData.grupriscDiabetisTipus1 = idx === -1 ? false : this.vacuna.grupriscDiabetisTipus1
      this.subformData.grupriscAsma = idx === -1 ? false : this.vacuna.grupriscAsma
      this.subformData.grupriscImmunosup = idx === -1 ? false : this.vacuna.grupriscImmunosup
      this.subformData.grupriscEmbaras = idx === -1 ? false : this.vacuna.grupriscEmbaras
      this.subformData.grupriscTrastNeuroPsiq = idx === -1 ? false : this.vacuna.grupriscTrastNeuroPsiq
      this.subformData.grupriscMalaltiaHapatoCron = idx === -1 ? false : this.vacuna.grupriscMalaltiaHapatoCron
      this.subformData.grupriscTrastMetabolCongen = idx === -1 ? false : this.vacuna.grupriscTrastMetabolCongen
    }
  }
}
</script>
