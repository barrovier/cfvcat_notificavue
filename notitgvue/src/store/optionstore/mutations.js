export function setOptions (state, payload) {
  if (payload.error === 0) {
    state.options.sexe = payload.sexe
    state.options.unitatTemps = payload.unitatTemps
    state.options.grupEdat = payload.grupEdat
    state.options.siNo = payload.siNo
    state.options.sospitaRAM = payload.sospitaRAM
    state.options.viaAdmin = payload.viaAdmin
    state.options.mesuraPresa = payload.mesuraPresa
    state.options.ramMotiva = payload.ramMotiva
    state.options.desen = payload.desen
    state.options.professio = payload.professio
    state.options.provincia = payload.provincia
    state.options.vacunaNDosi = payload.vacunaNDosi
    state.options.vacuna = payload.vacuna
    state.options.clasFarmac = payload.clasFarmac
  }
}
