import { ref } from 'vue'

export default function () {
  return {
    options: ref({
      sexe: [{ value: 1, label: '-' }, { value: 2, label: 'Desconegut' }, { value: 3, label: 'Masculí' }, { value: 4, label: 'Femení' }],
      unitatTemps: [],
      grupEdat: [],
      siNo: [],
      sospitaRAM: [],
      vacunaNDosi: [],
      vacuna: [],
      viaAdmin: [],
      mesuraPresa: [],
      ramMotiva: [],
      desen: [],
      professio: [],
      provincia: [],
      clasFarmac: []
    })
  }
}
