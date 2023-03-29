<template>
  <div class="flex flex-center q-pt-xl" v-if="finalitzada">
    <div class="text-center" v-if="enviada">
      {{ $t('lblNotiRebuda') }}.<br>
      {{ $t('lblIdentEs') }} {{ nnoti }}.<br>
      <q-icon name="check_circle" color="green-10" size="8em"/><br>
      {{ $t('lblTornaA') }} <a href="/">{{ $t('lblInici') }}</a>
    </div>
    <div class="text-center" v-else>
      {{ $t('headEnviantNoti') }}<br>
      <q-spinner-gears
        color="primary"
        size="8em"
      />
    </div>
  </div>
  <div class="q-pa-md" v-else>

    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      header-nav
      active-color="secondary"
      animated
      :contracted="$q.screen.lt.md"
    >
      <q-step
        :name="1"
        :title="$t('lblPacient')"
        icon="sick"
        :color="step1Complet ? 'green-10' : 'primary'"
        :done="step1Complet"
        style="min-height: 200px;"
      >
        <div class="row full-width items-start">
          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
            <q-input outlined dense v-model="notificacio.pacient.nomPacient" :label="$t('lblNomPacient')" :hint="$t('lblHintNomPacient')"
              bottom-slots
              :error-message="$t('errorNomPacient')"
              :error="errorNomPacient"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs">
            <q-select outlined v-model="notificacio.pacient.sexe" :label="$t('lblSexePacient')" :options="options.sexe" dense options-dense/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
            <div class="row full-width items-start q-pa-none q-ma-none">
              <div class="col-xs-12 col-sm-6 col-md-6">
                <q-input outlined dense type="number" v-model.number="notificacio.pacient.edat" step="1" :label="$t('lblEdatPacient')" :hint="$t('lblHintEdatPacient')"
                  bottom-slots
                  :error-message="$t('errorEdatPacient')"
                  :error="errorEdat"/>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <q-select outlined v-model="notificacio.pacient.uniEdat" :label="$t('lblUnitEdatPacient')" :options="options.unitatTemps" dense options-dense
                  bottom-slots
                  :error-message="$t('errorUnitEdatPacient')"
                  :error="errorUniEdat"/>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs">
            <q-select outlined v-model="notificacio.pacient.grupEdat" :label="$t('lblGrupEdatPacient')" :options="options.grupEdat" dense options-dense
              bottom-slots
              :error-message="$t('errorGrupEdatPacient')"
              :error="errorGrupEdat"/>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
            <q-input outlined dense type="number" v-model.number="notificacio.pacient.pes" :label="$t('lblPesPacient')"/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
            <q-input outlined dense v-model="notificacio.pacient.nhc" :label="$t('lblCipPacient')"/>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs q-pb-md">
            <q-select outlined v-model="notificacio.pacient.atencio" :label="$t('lblAtencioPacient')" :options="options.siNo" dense options-dense/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 q-pa-xs" v-if="notificacio.pacient.atencio && notificacio.pacient.atencio.value===3">
            <q-select outlined v-model="notificacio.pacient.ramMotiva" :label="$t('lblRAMotivaPacient')" :options="options.ramMotiva" dense options-dense
              bottom-slots
              :error-message="$t('errorOpcioInvalida')"
              :error="errorRAMotiva"/>
          </div>
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Fàrmacs"
        icon="medication"
        :color="step2Complet ? 'green-10' : 'primary'"
        :done="step2Complet"
        style="min-height: 200px;"
      >
        <q-table
          title="Farmacs"
          :rows="notificacio.farmacs"
          :columns="columnsFarmacs"
          :pagination="pagination"
          row-key="indexFarmac"
          hide-bottom
        >
          <template v-slot:top>
            <div class="col-2 q-table__title">Llistat de fàrmacs</div>
            <q-btn round icon="add" color="primary" @click="nouFarmac()" :ripple="{ center: true }">
              <q-tooltip class="bg-amber-2 text-black text-body2 shadow-4" anchor="center right" self="center left" :offset="[1, 1]">
                Afegir nou fàrmac
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width />
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">

              <q-td auto-width>
                <q-btn size="sm" color="primary" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'close_fullscreen' : 'open_in_full'">
                  <q-tooltip class="bg-amber-2 text-black text-body2 shadow-4" anchor="top end" self="bottom left" :offset="[1, 1]">
                    <span v-if="props.expand">{{ $t('contraurefarmac') }}</span>
                    <span v-else>{{ $t('expandirfarmac') }}</span>
                  </q-tooltip>
                </q-btn>
              </q-td>

              <q-td key="farmac" :props="props" @click="editarFarmac(props.row)" class="cursor-pointer">
                <q-icon name="edit"/> {{ props.row.farmac }}
              </q-td>
              <q-td key="dataInici" :props="props" @click="editarFarmac(props.row)" class="cursor-pointer">
                {{ props.row.dataInici }}
              </q-td>
              <q-td key="dataFinal" :props="props" @click="editarFarmac(props.row)" class="cursor-pointer">
                {{ props.row.dataFinal }}
              </q-td>

              <q-td key="x" :props="props">
                <q-btn
                  flat
                  dense
                  color="primary"
                  icon="delete"
                  @click="eliminaFarmac(props.row)">
                  <q-tooltip class="bg-negative text-white text-body2 shadow-4" anchor="center left" self="center right">
                    {{ $t('eliminar') }}
                  </q-tooltip>
                </q-btn>
              </q-td>

            </q-tr>

            <q-tr v-show="props.expand" :props="props">
              <q-td colspan="100%">
                <div class="text-left" style="max-width:60vh;">
                  {{ $t('numeroLot') }}: <strong>{{ props.row.numeroLotDesconegut ? $t('numeroLotDesconegut') : props.row.numeroLot }}</strong>
                  <br>
                  {{ $t('vacunaSN') }}: <strong>{{ props.row.vacunaSN.label }}</strong>
                  <span v-if="props.row.vacunaSN.value===3">
                    &mdash; {{ $t('dataVacunacio') }}: <strong>{{ props.row.dataVacunacio }}</strong>
                    &mdash; {{ $t('llocAdmin') }}: <strong>{{ props.row.llocAdmin }}</strong>
                    <br>
                    {{ $t('vacunaNDosi') }}: <strong>{{ props.row.vacunaNDosi.label }}</strong>
                  </span>
                  <span v-if="props.row.vacunaNDosi.value>2">
                    &mdash; {{ $t('notiRADosiPrev') }}: <strong>{{ props.row.notiRADosiPrev.label }}</strong>
                  </span>
                  <span v-if="props.row.notiRADosiPrev.value===3">
                    &mdash; {{ $t('notiRADosiPrevEspecif') }}: <strong>{{ props.row.notiRADosiPrevEspecif }}</strong>
                  </span>
                  <br>
                  <span v-if="props.row.vacunaSN.value===3">
                    {{ $t('vacunaCOVIDSN') }}: <strong>{{ props.row.vacunaCOVIDSN.label }}</strong>
                  </span>
                  <br v-if="props.row.vacunaSN.value===3">
                  <span v-if="props.row.vacunaCOVIDSN.value===3">
                    {{ $t('vacuna') }}: <strong>{{ props.row.vacuna.label }}</strong>
                  </span>
                  <span v-if="props.row.vacuna.value===10">
                    &mdash; {{ $t('vacunaEspecif') }}: <strong>{{ props.row.vacunaEspecif }}</strong>
                  </span>
                  <br v-if="props.row.vacunaCOVIDSN.value===3">
                  <span v-if="props.row.vacunaCOVIDSN.value===3">
                    {{ $t('pacientHaPatitCOVID') }}: <strong>{{ props.row.pacientHaPatitCOVID.label }}</strong>
                  </span>
                  <span v-if="props.row.pacientHaPatitCOVID.value===3">
                    &mdash; {{ $t('existeixProvaPositiva') }}: <strong>{{ props.row.existeixProvaPositiva.label }}</strong>
                  </span>
                  <br v-if="props.row.vacunaCOVIDSN.value===3">
                  <span v-if="props.row.pacientHaPatitCOVID.value===3">
                    {{ $t('covidAsimptomatic') }}: <strong>{{ props.row.covidAsimptomatic ? 'Sí' : 'No' }}</strong>
                    &mdash; {{ $t('covidSimptomatic') }}: <strong>{{ props.row.covidSimptomatic ? 'Sí' : 'No' }}</strong>
                    &mdash; {{ $t('covidSimptomaticIH') }}: <strong>{{ props.row.covidSimptomaticIH ? 'Sí' : 'No' }}</strong>
                  </span>
                  <br v-if="props.row.pacientHaPatitCOVID.value===3">
                  <span v-if="props.row.pacientHaPatitCOVID.value===3">
                    {{ $t('pacientHaPatitCOVIDEspecif') }}: <strong>{{ props.row.pacientHaPatitCOVIDEspecif }}</strong>
                  </span>
                  <br v-if="props.row.pacientHaPatitCOVID.value===3">
                  <span v-if="props.row.vacunaCOVIDSN.value===3">
                    Grups de risc: <strong>
                      {{ props.row.grupriscMajor65Anys ? '&mdash; ' + $t('grupriscMajor65Anys') : '' }}
                      {{ props.row.grupriscProfSanitari ? '&mdash; ' + $t('grupriscProfSanitari') : '' }}
                      {{ props.row.grupriscMalaltiaCardioVascular ? '&mdash; ' + $t('grupriscMalaltiaCardioVascular') : '' }}
                      {{ props.row.grupriscDiabetisTipus2 ? '&mdash; ' + $t('grupriscDiabetisTipus2') : '' }}
                      {{ props.row.grupriscEPOC ? '&mdash; ' + $t('grupriscEPOC') : '' }}
                      {{ props.row.grupriscCancer ? '&mdash; ' + $t('grupriscCancer') : '' }}
                      {{ props.row.grupriscTrasplOrganSolid ? '&mdash; ' + $t('grupriscTrasplOrganSolid') : '' }}
                      {{ props.row.grupriscMalaltiaRenalCronica ? '&mdash; ' + $t('grupriscMalaltiaRenalCronica') : '' }}
                      {{ props.row.grupriscObsesitat ? '&mdash; ' + $t('grupriscObsesitat') : '' }}
                      {{ props.row.grupriscHTA ? '&mdash; ' + $t('grupriscHTA') : '' }}
                      {{ props.row.grupriscDiabetisTipus1 ? '&mdash; ' + $t('grupriscDiabetisTipus1') : '' }}
                      {{ props.row.grupriscAsma ? '&mdash; ' + $t('grupriscAsma') : '' }}
                      {{ props.row.grupriscImmunosup ? '&mdash; ' + $t('grupriscImmunosup') : '' }}
                      {{ props.row.grupriscEmbaras ? '&mdash; ' + $t('grupriscEmbaras') : '' }}
                      {{ props.row.grupriscTrastNeuroPsiq ? '&mdash; ' + $t('grupriscTrastNeuroPsiq') : '' }}
                      {{ props.row.grupriscMalaltiaHapatoCron ? '&mdash; ' + $t('grupriscMalaltiaHapatoCron') : '' }}
                      {{ props.row.grupriscTrastMetabolCongen ? '&mdash; ' + $t('grupriscTrastMetabolCongen') : '' }}
                    </strong>
                  </span>
                  <br v-if="props.row.vacunaCOVIDSN.value===3">

                  {{ $t('sospitaRAM') }}: <strong>{{ props.row.sospitaRAM.label }}</strong>
                  <br>
                  {{ $t('dosi') }}: <strong>{{ props.row.dosi }}</strong>
                  &mdash; {{ $t('viaAdmin') }}: <strong>{{ props.row.viaAdmin.label }}</strong>
                  <br>
                  {{ $t('dataInici') }}: <strong>{{ props.row.dataInici }}</strong>
                  &mdash; {{ $t('dataFinal') }}: <strong>{{ props.row.dataFinal }}</strong>
                  <br>
                  {{ $t('prescripcio') }}: <strong>{{ props.row.prescripcio }}</strong>
                  &mdash; {{ $t('mesuraPresa') }}: <strong>{{ props.row.mesuraPresa.label }}</strong>
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-step>

      <q-step
        :name="3"
        title="Reaccions"
        icon="assistant_photo"
        :color="step3Complet ? 'green-10' : 'primary'"
        :done="step3Complet"
        style="min-height: 200px;"
      >
        <q-table
          title="Reaccions"
          :rows="notificacio.reaccions"
          :columns="columnsReaccions"
          :pagination="pagination"
          row-key="indexReaccio"
          hide-bottom
        >
          <template v-slot:top>
            <div class="col-2 q-table__title">Llistat de reaccions</div>
            <q-btn round icon="add" color="primary" @click="novaReaccio()" :ripple="{ center: true }">
              <q-tooltip class="bg-amber-2 text-black text-body2 shadow-4" anchor="center right" self="center left" :offset="[1, 1]">
                Afegir nova reacció
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="reaccio" :props="props" @click="editarReaccio(props.row)" class="cursor-pointer">
                <q-icon name="edit"/> {{ props.row.reaccio }}
              </q-td>
              <q-td key="dataInici" :props="props" @click="editarReaccio(props.row)" class="cursor-pointer">
                {{ props.row.dataInici }}
              </q-td>
              <q-td key="dataFinal" :props="props" @click="editarReaccio(props.row)" class="cursor-pointer">
                {{ props.row.dataFinal }}
              </q-td>
              <q-td key="desen" :props="props" @click="editarReaccio(props.row)" class="cursor-pointer">
                {{ props.row.desen.label }}
              </q-td>

              <q-td key="x" :props="props">
                <q-btn
                  flat
                  dense
                  color="primary"
                  icon="delete"
                  @click="eliminaReaccio(props.row)">
                  <q-tooltip class="bg-negative text-white text-body2 shadow-4" anchor="center left" self="center right">
                    {{ $t('eliminar') }}
                  </q-tooltip>
                </q-btn>
              </q-td>

            </q-tr>
          </template>
        </q-table>

      </q-step>

      <q-step
        :name="4"
        title="Observacions"
        icon="notes"
        :color="step4Complet ? 'green-10' : 'primary'"
        :done="step4Complet"
        style="min-height: 200px;"
      >
        <div class="q-pa-md" style="max-width: 100%">
          <q-input
            color="primary"
            v-model="notificacio.observacions"
            clear-icon="close"
            label="Observacions"
            counter
            maxlength="7000"
            outlined
            autogrow
          />
        </div>
      </q-step>

      <q-step
        :name="5"
        title="Notificador"
        icon="person"
        :color="step5Complet ? 'green-10' : 'primary'"
        :done="step5Complet"
        style="min-height: 200px;"
      >
        <notificador-form ref="compnotificador"
          :notificador="notificacio.notificador" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step > 1" flat color="primary" @click="navega(step, false)" label="Enrere" class="q-ml-sm" />
          <q-btn v-if="step < 5" @click="navega(step, true)" color="primary" label="Continua" />
          <q-btn v-if="step === 5" @click="finalitza()" color="primary" label="Enviar" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-secondary text-white q-px-lg">
          Introdueix les dades del pacient
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-secondary text-white q-px-lg">
          Introdueix les dades dels fàrmacs. Afegeix tants registres com medicaments pren el pacient.
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-secondary text-white q-px-lg">
          Introdueix les dades de les reaccions. Afegeix un registre per cada diagnòstic, símptoma o signe clínic.
        </q-banner>
        <q-banner v-else-if="step === 4" class="bg-secondary text-white q-px-lg">
          Introdueix les observacions addicionals. Antecedents d'interès, resultats d'exploracions complementàries, tractament de la reacció adversa i altres dades que ajudin a definir el quadre clínic.
        </q-banner>
        <q-banner v-else class="bg-secondary text-white q-px-lg">
          Introdueix les teves dades com a notificador
        </q-banner>
      </template>
    </q-stepper>

    <q-dialog v-model="mostraMedicamentForm">
      <medicament-form @close="actualitzarFarmac"
        :medicament="medicament" />
    </q-dialog>
    <q-dialog v-model="mostraReaccioForm">
      <reaccio-form @close="actualitzarReaccio"
        :reaccio="reaccio" />
    </q-dialog>

  </div>
</template>

<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import { api } from 'boot/axios'
import { Notify } from 'quasar'

const indexFarmac = ref(0)
const indexReaccio = ref(0)
const verificaEmail = ref('')
const centres = ref([])

const medicament = ref({})
const reaccio = ref({})

const finalitzada = ref(false)
const enviada = ref(false)
const nnoti = ref(0)

const notificacio = ref({
  pacient: {
    nomPacient: '',
    sexe: { value: 1, label: '-' },
    edat: '',
    uniEdat: { value: 1, label: '-' },
    grupEdat: { value: 1, label: '-' },
    pes: '',
    nhc: '',
    atencio: { value: 1, label: '-' },
    ramMotiva: { value: 1, label: '-' }
  },
  farmacs: [],
  reaccions: [],
  notificador: {
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
  },
  observacions: ''
})

export default {
  name: 'NotiFormPage',
  computed: {
    ...mapState('optionstore', ['options']),
    columnsFarmacs () {
      const columnsDef = [
        {
          name: 'farmac',
          required: true,
          label: 'Fàrmac',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'dataInici', label: 'Data inici', field: 'dataInici', sortable: false },
        { name: 'dataFinal', label: 'Data final', field: 'dataFinal', sortable: false },
        { name: 'x', label: this.$t('eliminar'), field: null, sortable: false }
      ]
      return columnsDef
    },
    columnsReaccions () {
      const columnsDef = [
        {
          name: 'reaccio',
          required: true,
          label: 'Descripció',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'dataInici', label: 'Data inici', field: 'dataInici', sortable: false },
        { name: 'dataFinal', label: 'Data final', field: 'dataFinal', sortable: false },
        { name: 'desen', label: 'Desenllaç', field: 'desen', sortable: true },
        { name: 'x', label: this.$t('eliminar'), field: null, sortable: false }
      ]
      return columnsDef
    }
  },
  methods: {
    ...mapActions('optionstore', ['fetchOptions']),
    isInt (value) {
      return !isNaN(value) && (function (x) { return (x | 0) === x })(parseFloat(value))
    },
    navega (step, seguent) {
      let errors = false
      let title = 'Manquen dades necessàries'
      if (step === 1) {
        errors = this.validaStep1()
      } else if (step === 2) {
        errors = this.validaStep2()
        title = 'Hi ha errors'
        title = 'Cal com a mínim un fàrmac'
      } else if (step === 3) {
        errors = this.validaStep3()
        title = 'Cal com a mínim una reacció'
      } else if (step === 4) {
        this.step4Complet = true
      } else if (step === 5) {
        errors = this.validaStep5()
      }
      if (errors) {
        this.$q.dialog({
          title: title,
          message: 'Si deixes aquesta secció, hi hauràs de tornar per afegir les dades que manquen. Vols afegir aquestes dades ara?',
          ok: { label: 'Sí', color: 'primary' },
          cancel: { label: 'No', color: 'negative' },
          persistent: true
        }).onCancel(() => {
          if (seguent) {
            this.$refs.stepper.next()
          } else {
            this.$refs.stepper.previous()
          }
        })
      } else {
        if (seguent) {
          this.$refs.stepper.next()
        } else {
          this.$refs.stepper.previous()
        }
      }
    },
    nouFarmac () {
      this.medicament = {
        indexFarmac: -1
      }
      this.mostraMedicamentForm = true
    },
    editarFarmac (obj) {
      this.medicament = obj
      this.mostraMedicamentForm = true
    },
    eliminaFarmac (obj) {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Eliminar el fàrmac ' + obj.farmac + '?',
        ok: { label: 'Eliminar', color: 'negative' },
        cancel: { label: 'Cancel·lar', color: 'primary' },
        persistent: true
      }).onOk(() => {
        this.notificacio.farmacs = this.notificacio.farmacs.filter((el) => el.indexFarmac !== obj.indexFarmac)
      })
    },
    actualitzarFarmac (formData) {
      const idx = this.notificacio.farmacs.findIndex((el) => el.indexFarmac === formData.indexFarmac)
      if (formData.farmac && formData.farmac.label) {
        formData.farmac = formData.farmac.label
      }
      if (idx === -1) {
        this.indexFarmac = this.indexFarmac + 1
        formData.indexFarmac = this.indexFarmac
        this.notificacio.farmacs.push(formData)
      } else {
        this.notificacio.farmacs[idx] = formData
      }
      this.mostraMedicamentForm = false
    },
    novaReaccio () {
      this.reaccio = {
        indexReaccio: -1,
        reaccio: 'Nova reacció ' + this.indexReaccio,
        dataInici: '',
        dataFinal: '',
        desen: { value: 1, label: '-' }
      }
      this.mostraReaccioForm = true
    },
    editarReaccio (obj) {
      this.reaccio = obj
      this.mostraReaccioForm = true
    },
    eliminaReaccio (obj) {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Eliminar la reacció ' + obj.reaccio + '?',
        ok: { label: 'Eliminar', color: 'negative' },
        cancel: { label: 'Cancel·lar', color: 'primary' },
        persistent: true
      }).onOk(() => {
        this.notificacio.reaccions = this.notificacio.reaccions.filter((el) => el.indexReaccio !== obj.indexReaccio)
      })
    },
    actualitzarReaccio (formData) {
      const idx = this.notificacio.reaccions.findIndex((el) => el.indexReaccio === formData.indexReaccio)
      if (idx === -1) {
        this.indexReaccio = this.indexReaccio + 1
        formData.indexReaccio = this.indexReaccio
        this.notificacio.reaccions.push(formData)
      } else {
        this.notificacio.reaccions[idx] = formData
      }
      this.mostraReaccioForm = false
    },
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
    estableixGrupEdat () {
      if ((!this.errorEdat) && (!this.errorUniEdat)) {
        const edat = this.notificacio.pacient.edat
        const unitats = this.notificacio.pacient.uniEdat.value
        if ((edat >= 0) && (edat <= 27) && (unitats === 6)) {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[2]
        } else if ((edat >= 1) && (edat <= 23) && (unitats === 4)) {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[3]
        } else if ((edat >= 2) && (edat <= 11) && (unitats === 3)) {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[4]
        } else if ((edat >= 12) && (edat <= 17) && (unitats === 3)) {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[5]
        } else if ((edat >= 18) && (edat <= 65) && (unitats === 3)) {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[6]
        } else if ((edat > 65) && (unitats === 3)) {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[7]
        } else if (edat === '') {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[0]
        } else {
          this.notificacio.pacient.grupEdat = this.options.grupEdat[8]
        }
      }
    },
    validaNomPacient (val) {
      const nomBuit = this.notificacio.pacient.nomPacient === null || this.notificacio.pacient.nomPacient === ''
      this.errorNomPacient = nomBuit
    },
    validaEdat (val) {
      const edatBuida = val === ''
      const edatOk = !edatBuida && (this.isInt(val))
      this.errorEdat = (!edatBuida && !edatOk) || (edatBuida && (this.notificacio.pacient.uniEdat.value > 1))
      this.errorUniEdat = edatOk && (this.notificacio.pacient.uniEdat.value === 1)
      this.errorGrupEdat = edatBuida && (this.notificacio.pacient.grupEdat.value === 1)
      this.estableixGrupEdat()
    },
    validaUniEdat (val) {
      const edatOk = this.notificacio.pacient.edat !== null && (this.isInt(this.notificacio.pacient.edat))
      this.errorUniEdat = (val.value === 1) && edatOk
      this.errorEdat = (val.value > 1) && !edatOk
      this.estableixGrupEdat()
    },
    validaGrupEdat (val) {
      const edatOk = this.notificacio.pacient.edat !== null && (this.isInt(this.notificacio.pacient.edat))
      this.errorGrupEdat = (val === undefined) || ((val.value === 1) && !edatOk)
    },
    validaAtencio (val) {
      if (val.value !== 3) {
        this.notificacio.pacient.ramMotiva = { value: 1, label: '-' }
      } else if (val.value === 3) {
        if (this.notificacio.pacient.ramMotiva.value === 1) {
          this.errorRAMotiva = true
        } else {
          this.errorRAMotiva = false
        }
      }
    },
    validaRamMotiva (val) {
      if ((val.value === 1) && (this.notificacio.pacient.atencio.value === 3)) {
        this.errorRAMotiva = true
      } else {
        this.errorRAMotiva = false
      }
    },
    validaProfessio (val) {
      if (val.value === 1) {
        this.errorProfessio = true
      } else {
        this.errorProfessio = false
        if (val.value !== 8) {
          this.notificacio.notificador.altraProfessio = ''
        }
      }
      this.step5Complet = false
    },
    validaNomEmisor (val) {
      const nomBuit = this.notificacio.notificador.nomEmisor === null || this.notificacio.notificador.nomEmisor === ''
      this.errorNomEmisor = nomBuit
    },
    validaCognomsEmisor (val) {
      const nomBuit = this.notificacio.notificador.cognomsEmisor === null || this.notificacio.notificador.cognomsEmisor === ''
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
        this.errorVerificaEmail = val !== this.notificacio.notificador.email
      }
    },
    validaStep1 () {
      this.validaNomPacient(this.notificacio.pacient.nomPacient)
      this.validaEdat(this.notificacio.pacient.edat)
      this.validaUniEdat(this.notificacio.pacient.uniEdat)
      this.validaGrupEdat(this.notificacio.pacient.grupEdat)
      this.validaAtencio(this.notificacio.pacient.atencio)
      this.validaRamMotiva(this.notificacio.pacient.ramMotiva)
      this.step1Complet = !(this.errorNomPacient || this.errorEdat || this.errorUniEdat || this.errorGrupEdat || this.errorRAMotiva)
      return (this.errorNomPacient || this.errorEdat || this.errorUniEdat || this.errorGrupEdat || this.errorRAMotiva)
    },
    validaStep2 () {
      this.step2Complet = !(this.notificacio.farmacs.length === 0)
      return (this.notificacio.farmacs.length === 0)
    },
    validaStep3 () {
      this.step3Complet = !(this.notificacio.reaccions.length === 0)
      return (this.notificacio.reaccions.length === 0)
    },
    validaStep5 () {
      this.step5Complet = !this.$refs.compnotificador.validaNotificador()
      return !this.step5Complet
      /*
      this.validaProfessio(this.notificacio.notificador.professio)
      this.validaNomEmisor(this.notificacio.notificador.nomEmisor)
      this.validaCognomsEmisor(this.notificacio.notificador.cognomsEmisor)
      this.validaCentreTreball(this.notificacio.notificador.centreTreball)
      this.validaEmail(this.notificacio.notificador.email, false)
      this.validaEmail(this.verificaEmail, true)
      this.stemp5Complet = !(this.errorProfessio || this.errorNomEmisor || this.errorCognomsEmisor || this.errorCentreTreball || this.errorEmail || this.errorVerificaEmail)
      return (this.errorProfessio || this.errorNomEmisor || this.errorCognomsEmisor || this.errorCentreTreball || this.errorEmail || this.errorVerificaEmail)
      */
    },
    finalitza () {
      console.log('emisor', notificacio.value.notificador)
      if (!this.finalitzada) {
        let errormsg = 'Notificació incompleta:'
        if (this.validaStep1()) {
          errormsg = errormsg + '<br>' + '· completa les dades de pacient'
        }
        if (this.validaStep2()) {
          errormsg = errormsg + '<br>' + '· afegeix almenys un fàrmac'
        }
        if (this.validaStep3()) {
          errormsg = errormsg + '<br>' + '· afegeix almenys una reacció adversa'
        }
        if (this.validaStep5()) {
          errormsg = errormsg + '<br>' + '· completa les dades de notificador'
        }
        if (errormsg !== 'Notificació incompleta:') {
          Notify.create({
            color: 'negative',
            icon: 'warning',
            message: errormsg,
            html: true
          })
          return
        }

        if ((this.notificacio.notificador.centreTreball !== null) && (Object.prototype.hasOwnProperty.call(this.notificacio.notificador.centreTreball, 'label'))) {
          this.notificacio.notificador.centreTreball = this.notificacio.notificador.centreTreball.label
        }
        this.finalitzada = true
        const notif = JSON.stringify(this.notificacio)
        const data = JSON.parse(notif)
        const config = {
          headers: { }
        }
        console.log(data)
        api.post('/notifica', data, config).then(response => {
          if (response.data.error === 0) {
            // message ok
            this.nnoti = response.data.nnoti
            this.enviada = true
            console.log(response.data)
          } else {
            // message ko
            this.finalitzada = false
            let message = ''
            response.data.messages.forEach((item, i) => {
              message = message + (i > 0 ? '\n' : '') + item.message
            })
            console.log(response.data)
            Notify.create({
              color: 'negative',
              icon: 'warning',
              message: message
            })
          }
        }).catch(error => {
          console.log(error)
          this.finalitzada = false
          Notify.create({
            color: 'negative',
            icon: 'warning',
            message: error.message
          })
        })
      } else {
        Notify.create({
          color: 'negative',
          icon: 'warning',
          message: 'Aquesta notificació ja ha estat finalitzada i enviada'
        })
      }
    }
  },
  setup () {
    return {
      finalitzada,
      enviada,
      nnoti,
      step: ref(1),
      medicament,
      mostraMedicamentForm: ref(false),
      reaccio,
      mostraReaccioForm: ref(false),
      notificacio,
      indexFarmac,
      indexReaccio,
      pagination: ref({
        rowsPerPage: 0
      }),
      centres,
      verificaEmail,
      errorNomPacient: ref(false),
      errorEdat: ref(false),
      errorUniEdat: ref(false),
      errorGrupEdat: ref(false),
      errorRAMotiva: ref(false),
      errorProfessio: ref(false),
      errorNomEmisor: ref(false),
      errorCognomsEmisor: ref(false),
      errorCentreTreball: ref(false),
      errorEmail: ref(false),
      errorVerificaEmail: ref(false),
      step1Complet: ref(false),
      step2Complet: ref(false),
      step3Complet: ref(false),
      step4Complet: ref(false),
      step5Complet: ref(false)
    }
  },
  components: {
    'medicament-form': require('components/MedicamentForm').default,
    'reaccio-form': require('components/ReaccioForm').default,
    'notificador-form': require('components/NotificadorForm').default
  },
  watch: {
    'notificacio.pacient.nomPacient': {
      handler (val) {
        this.validaNomPacient(val)
      }
    },
    'notificacio.pacient.edat': {
      handler (val) {
        this.validaEdat(val)
      }
    },
    'notificacio.pacient.uniEdat': {
      handler (val) {
        this.validaUniEdat(val)
      }
    },
    'notificacio.pacient.grupEdat': {
      handler (val) {
        this.validaGrupEdat(val)
      }
    },
    'notificacio.pacient.atencio': {
      handler (val) {
        this.validaAtencio(val)
      }
    },
    'notificacio.pacient.ramMotiva': {
      handler (val) {
        this.validaRamMotiva(val)
      }
    },
    'notificacio.notificador.professio': {
      handler (val) {
        this.validaProfessio(val)
      }
    },
    'notificacio.notificador.nomEmisor': {
      handler (val) {
        this.validaNomEmisor(val)
      }
    },
    'notificacio.notificador.cognomsEmisor': {
      handler (val) {
        this.validaCognomsEmisor(val)
      }
    },
    'notificacio.notificador.centreTreball': {
      handler (val) {
        this.validaCentreTreball(val)
      }
    },
    'notificacio.notificador.email': {
      handler (val) {
        this.validaEmail(val, false)
      }
    },
    verificaEmail: {
      handler (val) {
        this.validaEmail(val, true)
      }
    }
  },
  mounted () {
    this.fetchOptions()
  }
}
</script>
