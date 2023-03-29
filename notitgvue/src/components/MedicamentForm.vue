<template>
  <q-card style="width: 90vw; max-width: 90vw;">
    <q-card-section class="row q-pb-none q-mb-none">
      <div class="text-h6" v-if="this.formData.indexFarmac===-1">{{ $t('afegir') }} fàrmac</div>
      <div class="text-h6" v-else>{{ $t('editar') }} fàrmac</div>
      <q-space/>
      <q-btn flat round dense icon="close" v-close-popup/>
    </q-card-section>

    <q-separator />

    <form @submit.prevent="submitForm">
      <q-card-section style="max-height: 60vh" class="scroll">
        <div class="row items-start">
          <div class="col-xs-12 col-sm-12 col-md-12 q-px-xs q-pb-xs">
            <p>Per a les vacunes i altres medicaments biològics o biotecnològics, indica el lot i el nom complet del medicament.</p>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <div class="row items-start">
              <div class="col-xs-12 col-sm-6 col-md-6 q-pr-xs">
                <q-input
                  hide-bottom-space
                  :label="$t('numeroLot')"
                  ref="numeroLot"
                  outlined dense v-model="formData.numeroLot"
                  error-message="Indica el num. de lot o marca lot desconegut"
                  :error="errorLot"/>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 q-pl-xs">
               <q-checkbox left-label v-model="formData.numeroLotDesconegut" label="o lot desconegut"
                 :error="errorLot"/>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-select
              outlined
              dense
              hide-bottom-space
              :label="$t('vacunaSN')"
              ref="vacunaSN"
              v-model="formData.vacunaSN"
              :options="options.siNo"/>
          </div>
        </div>
        <div class="row items-start" v-if="formData.vacunaSN.value===3">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            Si us plau, prem el botó de la dreta per afegir la informació d'aquesta vacuna
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-btn dense :color="formData.dataVacunacio!=='' ? 'green-10' : 'negative'" label="Informació vacuna" @click="editarVacuna"/>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-select
              outlined
              dense
              hide-bottom-space
              :label="$t('clasFarmac')"
              ref="vaclasFarmaccunaSN"
              v-model="formData.clasFarmac"
              :options="options.clasFarmac"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-select
              outlined
              v-model="formData.farmac"
              new-value-mode="add-unique"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="farmacs"
              @filter="filtraFarmac"
              dense
              ref="farmac"
              :label="$t('farmac')"
              hint="Escriu i selecciona una opció. Si no trobes cap coincidència, prem ENTER per validar el teu text."
              :rules="[ val => !!val || 'És necessari especificar una opció vàlida. Si no trobes cap coincidència, prem ENTER per validar el teu text.']">
              <template v-if="formData.farmac" v-slot:append>
                <q-icon name="cancel" @click.stop="formData.farmac=null" class="cursor-pointer" />
              </template>
            </q-select>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-12 col-md-12 q-px-xs q-pb-xs">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('sospitaRAM')"
              ref="sospitaRAM"
              v-model="formData.sospitaRAM"
              :options="options.sospitaRAM"
              :rules="[ val => (val.value > 1) || 'És necessari especificar una opció vàlida']"/>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('dosi')"
              hint="Dosi i freqüència d'administració"
              ref="dosi"
              outlined dense v-model="formData.dosi"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('viaAdmin')"
              ref="viaAdmin"
              v-model="formData.viaAdmin"
              :options="options.viaAdmin"/>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('dataInici')"
              ref="dataInici"
              outlined dense v-model="formData.dataInici"
              :rules="[ val => /^(([0-3]\d\/)?[0-1]\d\/)?[\d]{4}$/.test(val) || 'La data ha de seguir el format aaaa o bé mm/aaaa o bé dd/mm/aaaa']"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('dataFinal')"
              ref="dataFinal"
              outlined dense v-model="formData.dataFinal"/>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-input
              hide-bottom-space
              :label="$t('prescripcio')"
              ref="prescripcio"
              outlined dense v-model="formData.prescripcio"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-px-xs q-pb-xs">
            <q-select
              outlined
              hide-bottom-space
              dense
              :label="$t('mesuraPresa')"
              ref="mesuraPresa"
              v-model="formData.mesuraPresa"
              :options="options.mesuraPresa"
              :rules="[ val => (val.value > 1) || 'És necessari especificar una opció vàlida']"/>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn type="submit" :label="$t('guardar')" color="primary"
          :ripple="{ center: true }"/>
      </q-card-actions>
    </form>
  </q-card>

  <q-dialog persistent v-model="mostraVacunaForm">
    <vacuna-form @close="actualitzarVacuna"
      :vacuna="vacuna" />
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'
import { api } from 'boot/axios'
import { Notify } from 'quasar'

export default {
  computed: {
    ...mapState('optionstore', ['options'])
  },
  props: ['medicament'],
  data () {
    return {
      farmacs: ref([]),
      vacuna: ref({}),
      mostraVacunaForm: ref(false),
      errorLot: ref(false),
      formData: ref({
        indexFarmac: -1,
        vacunaSN: { value: 1, label: '-' },
        dataVacunacio: '',
        numeroLot: '',
        numeroLotDesconegut: false,
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
        grupriscTrastMetabolCongen: false,
        clasFarmac: { value: 1, label: '-' },
        farmac: '',
        sospitaRAM: { value: 1, label: '-' },
        dosi: '',
        viaAdmin: { value: 1, label: '-' },
        dataInici: '',
        dataFinal: '',
        prescripcio: '',
        mesuraPresa: { value: 1, label: '-' }
      })
    }
  },
  methods: {
    testData (val, buidaOk) {
      return (buidaOk && (val === null || val === '' || val.length === 0)) || /^(([0-3]\d\/)?[0-1]\d\/)?[\d]{4}$/.test(val)
    },
    filtraFarmac (val, update, abort) {
      update(() => {
        if ((val.length === 0) || (val.length < 2)) {
          this.farmacs = []
          abort()
          return
        }
        const needle = val.toLowerCase()
        let endpoint = '/farmacs?term='
        if (this.formData.clasFarmac.value === 2) {
          endpoint = '/pactius?term='
        }
        api.get(endpoint + needle).then(response => {
          if (response.data.error === 0) {
            this.farmacs = response.data.farmacs
          }
        }).catch(error => {
          console.log(error)
          Notify.create({
            message: error.message
          })
        })
      })
    },
    editarVacuna () {
      this.vacuna = {
        indexFarmac: this.indexFarmac,
        dataVacunacio: this.formData.dataVacunacio,
        llocAdmin: this.formData.llocAdmin,
        vacunaNDosi: this.formData.vacunaNDosi,
        notiRADosiPrev: this.formData.notiRADosiPrev,
        notiRADosiPrevEspecif: this.formData.notiRADosiPrevEspecif,
        vacunaCOVIDSN: this.formData.vacunaCOVIDSN,
        vacuna: this.formData.vacuna,
        vacunaEspecif: this.formData.vacunaEspecif,
        pacientHaPatitCOVID: this.formData.pacientHaPatitCOVID,
        existeixProvaPositiva: this.formData.existeixProvaPositiva,
        covidAsimptomatic: this.formData.covidAsimptomatic,
        covidSimptomatic: this.formData.covidSimptomatic,
        covidSimptomaticIH: this.formData.covidSimptomaticIH,
        pacientHaPatitCOVIDEspecif: this.formData.pacientHaPatitCOVIDEspecif,
        grupriscMajor65Anys: this.formData.grupriscMajor65Anys,
        grupriscProfSanitari: this.formData.grupriscProfSanitari,
        grupriscMalaltiaCardioVascular: this.formData.grupriscMalaltiaCardioVascular,
        grupriscDiabetisTipus2: this.formData.grupriscDiabetisTipus2,
        grupriscEPOC: this.formData.grupriscEPOC,
        grupriscCancer: this.formData.grupriscCancer,
        grupriscTrasplOrganSolid: this.formData.grupriscTrasplOrganSolid,
        grupriscMalaltiaRenalCronica: this.formData.grupriscMalaltiaRenalCronica,
        grupriscObsesitat: this.formData.grupriscObsesitat,
        grupriscHTA: this.formData.grupriscHTA,
        grupriscDiabetisTipus1: this.formData.grupriscDiabetisTipus1,
        grupriscAsma: this.formData.grupriscAsma,
        grupriscImmunosup: this.formData.grupriscImmunosup,
        grupriscEmbaras: this.formData.grupriscEmbaras,
        grupriscTrastNeuroPsiq: this.formData.grupriscTrastNeuroPsiq,
        grupriscMalaltiaHapatoCron: this.formData.grupriscMalaltiaHapatoCron,
        grupriscTrastMetabolCongen: this.formData.grupriscTrastMetabolCongen
      }
      this.mostraVacunaForm = true
    },
    actualitzarVacuna (vacunaData) {
      this.formData.dataVacunacio = vacunaData.dataVacunacio
      this.formData.dataInici = vacunaData.dataVacunacio
      this.formData.dataFinal = vacunaData.dataVacunacio
      this.formData.llocAdmin = vacunaData.llocAdmin
      this.formData.vacunaNDosi = vacunaData.vacunaNDosi
      this.formData.notiRADosiPrev = vacunaData.notiRADosiPrev
      this.formData.notiRADosiPrevEspecif = vacunaData.notiRADosiPrevEspecif
      this.formData.vacunaCOVIDSN = vacunaData.vacunaCOVIDSN
      if (this.formData.vacunaCOVIDSN.value === 3) {
        this.formData.prescripcio = 'Inmunización frente a COVID-19'
        if (vacunaData.vacuna.value !== 10) this.formData.farmac = vacunaData.vacuna
      }
      this.formData.vacuna = vacunaData.vacuna
      this.formData.vacunaEspecif = vacunaData.vacunaEspecif
      this.formData.pacientHaPatitCOVID = vacunaData.pacientHaPatitCOVID
      this.formData.existeixProvaPositiva = vacunaData.existeixProvaPositiva
      this.formData.covidAsimptomatic = vacunaData.covidAsimptomatic
      this.formData.covidSimptomatic = vacunaData.covidSimptomatic
      this.formData.covidSimptomaticIH = vacunaData.covidSimptomaticIH
      this.formData.pacientHaPatitCOVIDEspecif = vacunaData.pacientHaPatitCOVIDEspecif
      this.formData.grupriscMajor65Anys = vacunaData.grupriscMajor65Anys
      this.formData.grupriscProfSanitari = vacunaData.grupriscProfSanitari
      this.formData.grupriscMalaltiaCardioVascular = vacunaData.grupriscMalaltiaCardioVascular
      this.formData.grupriscDiabetisTipus2 = vacunaData.grupriscDiabetisTipus2
      this.formData.grupriscEPOC = vacunaData.grupriscEPOC
      this.formData.grupriscCancer = vacunaData.grupriscCancer
      this.formData.grupriscTrasplOrganSolid = vacunaData.grupriscTrasplOrganSolid
      this.formData.grupriscMalaltiaRenalCronica = vacunaData.grupriscMalaltiaRenalCronica
      this.formData.grupriscObsesitat = vacunaData.grupriscObsesitat
      this.formData.grupriscHTA = vacunaData.grupriscHTA
      this.formData.grupriscDiabetisTipus1 = vacunaData.grupriscDiabetisTipus1
      this.formData.grupriscAsma = vacunaData.grupriscAsma
      this.formData.grupriscImmunosup = vacunaData.grupriscImmunosup
      this.formData.grupriscEmbaras = vacunaData.grupriscEmbaras
      this.formData.grupriscTrastNeuroPsiq = vacunaData.grupriscTrastNeuroPsiq
      this.formData.grupriscMalaltiaHapatoCron = vacunaData.grupriscMalaltiaHapatoCron
      this.formData.grupriscTrastMetabolCongen = vacunaData.grupriscTrastMetabolCongen
      this.mostraVacunaForm = false
    },
    submitForm () {
      this.$refs.dataInici.validate()
      this.$refs.farmac.validate()
      this.$refs.sospitaRAM.validate()
      this.$refs.mesuraPresa.validate()
      if ((this.formData.vacunaSN.value === 3) &&
          (this.formData.dataVacunacio === '')) {
        Notify.create({
          color: 'negative',
          icon: 'warning',
          message: 'Falten dades de vacuna. Prem el botó INFORMACIÓ VACUNA per introduir-les'
        })
        return
      }
      this.errorLot = ((this.formData.numeroLot === '') &&
          (!this.formData.numeroLotDesconegut))
      if (this.errorLot) {
        return
      }
      if ((!this.$refs.dataInici.hasError) &&
          (!this.$refs.farmac.hasError) &&
          (!this.$refs.sospitaRAM.hasError) &&
          (!this.$refs.mesuraPresa.hasError)) {
        this.$emit('close', this.formData)
      }
    }
  },
  components: {
    'vacuna-form': require('components/VacunaForm').default
  },
  watch: {
    'formData.numeroLot': {
      handler (val) {
        if (val) {
          this.formData.numeroLotDesconegut = false
        }
        this.errorLot = ((this.formData.numeroLot === '') &&
            (!this.formData.numeroLotDesconegut))
      }
    },
    'formData.numeroLotDesconegut': {
      handler (val) {
        if (val) {
          this.formData.numeroLot = ''
        }
        this.errorLot = ((this.formData.numeroLot === '') &&
            (!this.formData.numeroLotDesconegut))
      }
    },
    'formData.vacunaSN': {
      handler (val) {
        if (val.value !== 3) {
          this.formData.dataVacunacio = ''
          this.formData.llocAdmin = ''
          this.formData.vacunaNDosi = { value: 1, label: '-' }
          this.formData.notiRADosiPrev = { value: 1, label: '-' }
          this.formData.notiRADosiPrevEspecif = ''
          this.formData.vacunaCOVIDSN = { value: 1, label: '-' }
          this.formData.vacuna = { value: 1, label: '-' }
          this.formData.vacunaEspecif = ''
          this.formData.pacientHaPatitCOVID = { value: 1, label: '-' }
          this.formData.existeixProvaPositiva = { value: 1, label: '-' }
          this.formData.covidAsimptomatic = false
          this.formData.covidSimptomatic = false
          this.formData.covidSimptomaticIH = false
          this.formData.pacientHaPatitCOVIDEspecif = ''
          this.formData.grupriscMajor65Anys = false
          this.formData.grupriscProfSanitari = false
          this.formData.grupriscMalaltiaCardioVascular = false
          this.formData.grupriscDiabetisTipus2 = false
          this.formData.grupriscEPOC = false
          this.formData.grupriscCancer = false
          this.formData.grupriscTrasplOrganSolid = false
          this.formData.grupriscMalaltiaRenalCronica = false
          this.formData.grupriscObsesitat = false
          this.formData.grupriscHTA = false
          this.formData.grupriscDiabetisTipus1 = false
          this.formData.grupriscAsma = false
          this.formData.grupriscImmunosup = false
          this.formData.grupriscEmbaras = false
          this.formData.grupriscTrastNeuroPsiq = false
          this.formData.grupriscMalaltiaHapatoCron = false
          this.formData.grupriscTrastMetabolCongen = false
          // TODO: reset TOTS els camps vacuna
        }
      }
    }
  },
  mounted () {
    const idx = this.medicament.indexFarmac
    this.formData.indexFarmac = idx
    if (idx !== -1) {
      this.formData.vacunaSN = idx === -1 ? { value: 1, label: '-' } : this.medicament.vacunaSN
      this.formData.dataVacunacio = idx === -1 ? '' : this.medicament.dataVacunacio
      this.formData.numeroLot = idx === -1 ? '' : this.medicament.numeroLot
      this.formData.numeroLotDesconegut = idx === -1 ? false : this.medicament.numeroLotDesconegut
      this.formData.llocAdmin = idx === -1 ? '' : this.medicament.llocAdmin
      this.formData.vacunaNDosi = idx === -1 ? { value: 1, label: '-' } : this.medicament.vacunaNDosi
      this.formData.notiRADosiPrev = idx === -1 ? { value: 1, label: '-' } : this.medicament.notiRADosiPrev
      this.formData.notiRADosiPrevEspecif = idx === -1 ? '' : this.medicament.notiRADosiPrevEspecif
      this.formData.vacunaCOVIDSN = idx === -1 ? { value: 1, label: '-' } : this.medicament.vacunaCOVIDSN
      this.formData.vacuna = idx === -1 ? { value: 1, label: '-' } : this.medicament.vacuna
      this.formData.vacunaEspecif = idx === -1 ? '' : this.medicament.vacunaEspecif
      this.formData.pacientHaPatitCOVID = idx === -1 ? { value: 1, label: '-' } : this.medicament.pacientHaPatitCOVID
      this.formData.existeixProvaPositiva = idx === -1 ? { value: 1, label: '-' } : this.medicament.existeixProvaPositiva
      this.formData.covidAsimptomatic = idx === -1 ? false : this.medicament.covidAsimptomatic
      this.formData.covidSimptomatic = idx === -1 ? false : this.medicament.covidSimptomatic
      this.formData.covidSimptomaticIH = idx === -1 ? false : this.medicament.covidSimptomaticIH
      this.formData.pacientHaPatitCOVIDEspecif = idx === -1 ? '' : this.medicament.pacientHaPatitCOVIDEspecif
      this.formData.grupriscMajor65Anys = idx === -1 ? false : this.medicament.grupriscMajor65Anys
      this.formData.grupriscProfSanitari = idx === -1 ? false : this.medicament.grupriscProfSanitari
      this.formData.grupriscMalaltiaCardioVascular = idx === -1 ? false : this.medicament.grupriscMalaltiaCardioVascular
      this.formData.grupriscDiabetisTipus2 = idx === -1 ? false : this.medicament.grupriscDiabetisTipus2
      this.formData.grupriscEPOC = idx === -1 ? false : this.medicament.grupriscEPOC
      this.formData.grupriscCancer = idx === -1 ? false : this.medicament.grupriscCancer
      this.formData.grupriscTrasplOrganSolid = idx === -1 ? false : this.medicament.grupriscTrasplOrganSolid
      this.formData.grupriscMalaltiaRenalCronica = idx === -1 ? false : this.medicament.grupriscMalaltiaRenalCronica
      this.formData.grupriscObsesitat = idx === -1 ? false : this.medicament.grupriscObsesitat
      this.formData.grupriscHTA = idx === -1 ? false : this.medicament.grupriscHTA
      this.formData.grupriscDiabetisTipus1 = idx === -1 ? false : this.medicament.grupriscDiabetisTipus1
      this.formData.grupriscAsma = idx === -1 ? false : this.medicament.grupriscAsma
      this.formData.grupriscImmunosup = idx === -1 ? false : this.medicament.grupriscImmunosup
      this.formData.grupriscEmbaras = idx === -1 ? false : this.medicament.grupriscEmbaras
      this.formData.grupriscTrastNeuroPsiq = idx === -1 ? false : this.medicament.grupriscTrastNeuroPsiq
      this.formData.grupriscMalaltiaHapatoCron = idx === -1 ? false : this.medicament.grupriscMalaltiaHapatoCron
      this.formData.grupriscTrastMetabolCongen = idx === -1 ? false : this.medicament.grupriscTrastMetabolCongen
      this.formData.clasFarmac = idx === -1 ? { value: 1, label: this.options.clasFarmac[0].label } : this.medicament.clasFarmac
      this.formData.farmac = idx === -1 ? '' : this.medicament.farmac
      this.formData.sospitaRAM = idx === -1 ? { value: 1, label: '-' } : this.medicament.sospitaRAM
      this.formData.dosi = idx === -1 ? '' : this.medicament.dosi
      this.formData.viaAdmin = idx === -1 ? { value: 1, label: '-' } : this.medicament.viaAdmin
      this.formData.dataInici = idx === -1 ? '' : this.medicament.dataInici
      this.formData.dataFinal = idx === -1 ? '' : this.medicament.dataFinal
      this.formData.prescripcio = idx === -1 ? '' : this.medicament.prescripcio
      this.formData.mesuraPresa = idx === -1 ? { value: 1, label: '-' } : this.medicament.mesuraPresa
    } else {
      this.formData.clasFarmac = { value: 1, label: this.options.clasFarmac[0].label }
    }
  }
}
</script>
