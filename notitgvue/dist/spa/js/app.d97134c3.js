(()=>{"use strict";var a={9942:(a,e,l)=>{l(5363),l(71);var i=l(8880),r=l(9592),s=l(3673);function t(a,e,l,i,r,t){const o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(o)}const o=(0,s.aZ)({name:"App"});var n=l(4260);const c=(0,n.Z)(o,[["render",t]]),u=c;var d=l(7925),p=l(3340),b=l(9582);const v=[{path:"/",component:()=>Promise.all([l.e(736),l.e(458)]).then(l.bind(l,2458)),children:[{path:"",component:()=>Promise.all([l.e(736),l.e(915)]).then(l.bind(l,9915))},{path:"notifica",component:()=>Promise.all([l.e(736),l.e(139)]).then(l.bind(l,5139))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([l.e(736),l.e(193)]).then(l.bind(l,2193))}],m=v,f=(0,p.BC)((function(){const a=b.r5,e=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:a("")});return e}));async function g(a,e){const i="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:s}=await Promise.resolve().then(l.bind(l,7925)),t="function"===typeof f?await f({store:i}):f;i.$router=t;const o=a(u);return o.use(r.Z,e),{app:o,store:i,storeKey:s,router:t}}var E=l(1233),I=l(6489),h=l(499),A=l(6417);const P={config:{},lang:E.Z,directives:{Ripple:I.Z},plugins:{Dialog:h.Z,Notify:A.Z}},C="";async function D({app:a,router:e,store:l,storeKey:i},r){let s=!1;const t=a=>{try{return e.resolve(a).href}catch(l){}return Object(a)===a?null:a},o=a=>{if(s=!0,"string"===typeof a&&/^https?:\/\//.test(a))return void(window.location.href=a);const e=t(a);null!==e&&(window.location.href=e,window.location.reload())},n=window.location.href.replace(window.location.origin,"");for(let u=0;!1===s&&u<r.length;u++)try{await r[u]({app:a,router:e,store:l,ssrContext:null,redirect:o,urlPath:n,publicPath:C})}catch(c){return c&&c.url?void o(c.url):void console.error("[Quasar] boot error:",c)}!0!==s&&(a.use(e),a.use(l,i),a.mount("#q-app"))}g(i.ri,P).then((a=>Promise.all([Promise.resolve().then(l.bind(l,2718)),Promise.resolve().then(l.bind(l,5474))]).then((e=>{const l=e.map((a=>a.default)).filter((a=>"function"===typeof a));D(a,l)}))))},5474:(a,e,l)=>{l.r(e),l.d(e,{api:()=>t,default:()=>o});var i=l(3340),r=l(52),s=l.n(r);const t=s().create({baseURL:"https://crf3.w3nexus.net/cfvcat_tgneram/x/cfvcat/api/"}),o=(0,i.xr)((({app:a})=>{a.config.globalProperties.$axios=s(),a.config.globalProperties.$api=t}))},2718:(a,e,l)=>{l.r(e),l.d(e,{default:()=>n});var i=l(3340),r=l(5948);const s={headAfegir:"Afegir",headEditar:"Editar",errorOpcioInvalida:"És necessari especificar una opció vàlida",tmplCFVCAT:"Centre de Farmacovigilància de Catalunya",idxBenvingut:"Benvinguts",idxProgramaTG:"Programa de Targeta Groga",idxProfSalut:"Aquesta aplicació s'adreça exclusivament a professionals de la salut.",idxCiutada:"Si ets un ciutadà, visita",idxLlocWeb:"aquest lloc web",idxNotificacioTG:"La notificació de sospites de reaccions adverses a medicaments (Targeta Groga) ha detectat nombrosos efectes indesitjats que eren desconeguts. Això ha permès millorar la seguretat en l'ús dels medicaments.",idxCFVCAT:"El Centre de Farmacovigilància de Catalunya du a terme l'execució del Programa de Farmacovigilància a Catalunya.",idxQueNotificar:"Què cal notificar?",idxEssencial:"És essencial que es notifiquin les sospites de reaccions adverses:",idxEssencial1:"que són <strong>desconegudes o inesperades</strong>,",idxEssencial2:"que són <strong>mortals o greus</strong> (que requereixen ingrés o allarguen l'estada hospitalària, que tenen efectes irreversibles o generen discapacitat, així com les malformacions congènites),",idxEssencial3:"per <strong>fàrmacs nous i/o sotmesos a seguiment addicional</strong>, identificats amb un triangle negre invertit (&#x25BC;).",idxAccepto:"He llegit i accepto la clàusula d'incorporació de dades personals (1)",idxCondicions:"(1) Mitjançant aquesta acceptació, manifesto el meu consentiment perquè les dades personals aportades s'incorporin a un fitxer del Centre de Farmacovigilància de Catalunya, per dur a terme les tasques corresponents al si del Sistema Espanyol de Farmacovigilància de Medicaments d'Ús Humà (SEFV-H). Podeu exercir els vostres drets d'accés, rectificació, supressió i portabilitat de les vostres dades, de limitació i oposició al seu tractament, així com a no ser objecte de decisions basades únicament en el tractament automatitzat de les vostres, dirigint-vos per escrit a l'adreça electrònica cfvcat&#64;icf.uab.cat, d'acord amb el que estableix el Reglament (UE) 679/2016, del Parlament Europeu i del Consell, de 27 d'abril de 2016, relatiu a la protecció de les persones físiques en allò que respecte al tractament de dades personals i a la lliure circulació d'aquestes dades i la Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals.",idxLlegeix:"Si us plau, llegeix i accepta la clàusula d'incorporació de dades personals",btnNotifica:"Notifica",headEnviantNoti:"Enviant notificació",lblNotiRebuda:"Notificació rebuda",lblIdentEs:"L'identificador és",lblTornaA:"Tornar a",lblInici:"inici",lblPacient:"Pacient",lblNomPacient:"Nom del pacient",lblHintNomPacient:"Escriu com a mínim les inicials del pacient",errorNomPacient:"És necessari introduir com a mínim les inicials",lblSexePacient:"Sexe del pacient",lblEdatPacient:"Edat del pacient",lblHintEdatPacient:"Recorda seleccionar les unitats d'edat",errorEdatPacient:"L'edat ha de ser un número enter positiu",lblUnitEdatPacient:"Unitats d'edat",errorUnitEdatPacient:"És necessari indicar les unitats d'edat",lblGrupEdatPacient:"Grup d'edat",errorGrupEdatPacient:"Si no s'indica l'edat, és necessari indicar el grup d'edat",lblPesPacient:"Pes del pacient en Kg",lblCipPacient:"CIP del pacient",lblAtencioPacient:"El quadre clínic ha requerit atenció?",lblRAMotivaPacient:"La reacció adversa ha motivat",lblVacuna:"vacuna",lblDataVacunacio:"Data vacuació",errorData:"La data ha de seguir el format aaaa o bé mm/aaaa o bé dd/mm/aaaa",lblLlocAdmin:"Lloc d'administració",lblVacunaNDosi:"Nombre de dosi administrada",lblNotiRADosiPrev:"S'ha notificat reacció adversa a alguna dosi prèvia?",lblNotiRADosiPrevEspecif:"Descriure reacció adversa prèvia",lblVacunaCOVIDSN:"La vacuna és per COVID-19?",lblVacunaNom:"Nom de la vacuna",lblVacunaEspecif:"Inf. addicional sobre la vacuna",lblPacientHaPatitCOVID:"COVID-19 abans vacunació?",lblExisteixProvaPositiva:"Hi ha prova positiva?",lblCovidAsimptomatic:"Asimptomàtic",lblCovidSimptomatic:"Simptomàtic",lblCovidSimptomaticIH:"Simptomàtic amb ingrès hosp.",lblPacientHaPatitCOVIDEspecif:"Simptomatologia i proves compl.",headGrupsRisc:"Grups de risc",lblGrupriscMajor65Anys:"Major de 65 anys",lblGrupriscProfSanitari:"Professional sanitari o personal de centre sociosanitari o essencial",lblGrupriscMalaltiaCardioVascular:"Malaltia cardiovascular (exclosa la HTA)",lblGrupriscDiabetisTipus2:"Diabetis tipus II",lblGrupriscEPOC:"MPOC",lblGrupriscCancer:"Càncer",lblGrupriscTrasplOrganSolid:"Trasplantament d'òrgan sòlid",lblGrupriscMalaltiaRenalCronica:"Malaltia renal crònica",lblGrupriscObsesitat:"Obesitat (IMC ≥ 30)",lblGrupriscHTA:"HTA",lblGrupriscDiabetisTipus1:"Diabetis tipus I",lblGrupriscAsma:"Asma",lblGrupriscImmunosup:"Immunosupressió",lblGrupriscEmbaras:"Embaràs",lblGrupriscTrastNeuroPsiq:"Trastorns neuro-psiquiàtrics",lblGrupriscMalaltiaHapatoCron:"Malaltia hepàtica crònica",lblGrupriscTrastMetabolCongen:"Trastorns metabòlics congènits",btnGuardar:"Guardar",lblReaccio:"reacció",lblReaccioDesc:"Reacció",subDadesReaccions:"Diagnòstic, símptoma o signe clínic",errorDescripcioReaccio:"És necessari descriure la reacció",lblDataInici:"Data inici",lblDataFinal:"Data final",lblDesen:"Desenllaç",failed:"Action failed",success:"Action was successful",afegir:"Afegir",eliminar:"Elimina",guardar:"Guardar",expandirfarmac:"Prem per visualitzar la informació completa",contraurefarmac:"Prem per amagar la informació completa",clasFarmac:"Tipus medicament",farmac:"Fàrmac",dataInici:"Data inici",dataFinal:"Data final",dosi:"Posologia",viaAdmin:"Via d'administració",sospitaRAM:"Nivell de sospita",prescripcio:"Motiu de prescripció",mesuraPresa:"Mesura presa",reaccio:"Reacció",vacunaSN:"El medicament és una vacuna?",numeroLot:"Identificador del lot",numeroLotDesconegut:"Lot desconegut"},t={tmplCFVCAT:"Centro de Farmacovigilancia de Cataluña",idxBenvingut:"Bienvenidos",idxProgramaTG:"Programa de Tarjeta Amarilla",idxProfSalut:"Esta aplicación se dirige exclusivamente a profesionales de la salud.",idxCiutada:"Si eres un ciudadano, visita",idxNotificacioTG:"La notificación de sospechas de reacciones adversas a medicamentos (Tarjeta Amarilla) ha detectado numerosos efectos indeseados que eran desconocidos. Esto ha permitido mejorar la seguridad en el uso de los medicamentos.",idxLlocWeb:"este sitio web",idxCFVCAT:"El Centro de Farmacovigilancia de Cataluña lleva a término la ejecución del Programa de Farmacovigilancia en Cataluña.",idxQueNotificar:"¿Qué hay que notificar?",idxEssencial:"Es esencial que se notifiquen las sospechas de reacciones adversas:",idxEssencial1:"que son <strong>desconocidas o inesperadas</strong>,",idxEssencial2:"que son <strong>mortales o graves</strong> (que requieren ingreso o alargan la estancia hospitalaria, que tenen efectos irreversibles o generan discapacidad, así como las malformaciones congénitas),",idxEssencial3:"por <strong>nuevos fármacos y/o sometidos a seguimiento adicional</strong>, identificados con un triángulo negro invertido (&#x25BC;).",idxAccepto:"He leído y acepto la cláusula de incorporación de datos personales (1)",idxCondicions:"(1) Mediante esta aceptación, manifiesto mi consentimiento para que los datos personales aportados se incorporen a un fichero del Centro de Farmacovigilancia de Cataluña, para llevar a término las tareas correspondientes al si del Sistema Español de Farmacovigilancia de Medicamentos de Úso Humano (SEFV-H). Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basades únicamente en el tratamiento automatizado de sus datos, dirigiendose por escrito a la dirección electrónica cfvcat&#64;icf.uab.cat, de acuerdo con lo que establece el Reglamento (UE) 679/2016, del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en aquello a lo que refiere al tratamiento de datos personales y a la libre circulación de estos datos y la Ley orgánica 3/2018, del 5 de diciembre, de protección de datos personales y garantía de los derechos digitales.",idxLlegeix:"Por favor, lee y acepta la cláusula de incorporación de datos personales",btnNotifica:"Notifica",headEditar:"Editar",lblVacuna:"vacuna",lblDataVacunacio:"Fecha vacuación",errorData:"La fecha tiene que cumplir el formato aaaa o bien mm/aaaa o bien dd/mm/aaaa",lblLlocAdmin:"Lugar de administración",lblVacunaNDosi:"Número de dosis administrada",lblNotiRADosiPrev:"¿Se ha notificado reacción adversa a alguna dosis previa?",lblNotiRADosiPrevEspecif:"Describir reacción adversa previa",lblVacunaCOVIDSN:"La vacuna és per COVID-19?",lblVacunaNom:"Nombre de la vacuna",lblVacunaEspecif:"Inf. adicional sobre la vacuna",errorOpcioInvalida:"Es necesario especificar una opción válida",lblPacientHaPatitCOVID:"¿COVID-19 antes de vacunación?",lblExisteixProvaPositiva:"¿Hay prueba positiva?",lblCovidAsimptomatic:"Asintomático",lblCovidSimptomatic:"Sintomático",lblCovidSimptomaticIH:"Sintomático con ingreso hosp.",lblPacientHaPatitCOVIDEspecif:"Sintomatología y pruebas compl.",headGrupsRisc:"Grupos de riesgo",lblGrupriscMajor65Anys:"Mayor de 65 años",lblGrupriscProfSanitari:"Profesional sanitario o personal de centro sociosanitario o esencial",lblGrupriscMalaltiaCardioVascular:"Enfermedad cardiovascular (excluída la HTA)",lblGrupriscDiabetisTipus2:"Diabetes tipo II",lblGrupriscEPOC:"MPOC",lblGrupriscCancer:"Cancer",lblGrupriscTrasplOrganSolid:"Transplantamiento de órgano sólido",lblGrupriscMalaltiaRenalCronica:"Enfermedad renal crónica",lblGrupriscObsesitat:"Obesidad (IMC ≥ 30)",lblGrupriscHTA:"HTA",lblGrupriscDiabetisTipus1:"Diabetes tipo I",lblGrupriscAsma:"Asma",lblGrupriscImmunosup:"Inmunosupresión",lblGrupriscEmbaras:"Embarazo",lblGrupriscTrastNeuroPsiq:"Trastornos neuro-psiquiátricos",lblGrupriscMalaltiaHapatoCron:"Enfermedad hepática crónica",lblGrupriscTrastMetabolCongen:"Trastornos metabólicos congénitos",btnGuardar:"Guardar",headAfegir:"Añadir",lblReaccio:"reacción",lblReaccioDesc:"Reacción",subDadesReaccions:"Diagnóstico, síntoma o signo clínico",errorDescripcioReaccio:"Es necesario describir la reacción",lblDataInici:"Fecha de inicio",lblDataFinal:"Fecha de fin",lblDesen:"Desenlace",failed:"Action failed",success:"Action was successful",afegir:"Afegir",eliminar:"Elimina",guardar:"Guardar",expandirfarmac:"Prem per visualitzar la informació completa",contraurefarmac:"Prem per amagar la informació completa",clasFarmac:"Tipus medicament",farmac:"Fàrmac",dataInici:"Data inici",dataFinal:"Data final",dosi:"Posologia",viaAdmin:"Via d'administració",sospitaRAM:"Nivell de sospita",prescripcio:"Motiu de prescripció",mesuraPresa:"Mesura presa",reaccio:"Reacció",vacunaSN:"El medicament és una vacuna?",numeroLot:"Identificador del lot",numeroLotDesconegut:"Lot desconegut"},o={"ca-ES":s,"es-ES":t},n=(0,i.xr)((({app:a})=>{const e=(0,r.o)({locale:"ca-ES",messages:o});a.use(e)}))},7925:(a,e,l)=>{l.r(e),l.d(e,{default:()=>N});var i={};l.r(i),l.d(i,{isLoggedIn:()=>b});var r={};l.r(r),l.d(r,{setUserDetails:()=>v});var s={};l.r(s),l.d(s,{loginUser:()=>g,logoutUser:()=>E});var t={};l.r(t),l.d(t,{getSexOptions:()=>A});var o={};l.r(o),l.d(o,{setOptions:()=>P});var n={};l.r(n),l.d(n,{fetchOptions:()=>C});var c=l(3340),u=l(741),d=l(1959);function p(){return{userDetails:(0,d.iH)({username:"",accesstoken:""})}}function b(a){return""!==a.userDetails.accesstoken}function v(a,e){a.userDetails=e}var m=l(6417),f=l(5474);function g({commit:a},e){f.api.post("/v1/user/login",e).then((l=>{a("setUserDetails",{username:e.username,accesstoken:l.data["x-access-token"]}),this.$router.push("app")})).catch((l=>{console.log(l),m.Z.create({message:l.message}),e.submitting=!1,a("setUserDetails",{username:e.username,accesstoken:"abcd1234"}),this.$router.push("app")}))}function E({commit:a}){a("setUserDetails",{username:"",accesstoken:""}),this.$router.push("/")}const I={namespaced:!0,getters:i,mutations:r,actions:s,state:p};function h(){return{options:(0,d.iH)({sexe:[{value:1,label:"-"},{value:2,label:"Desconegut"},{value:3,label:"Masculí"},{value:4,label:"Femení"}],unitatTemps:[],grupEdat:[],siNo:[],sospitaRAM:[],vacunaNDosi:[],vacuna:[],viaAdmin:[],mesuraPresa:[],ramMotiva:[],desen:[],professio:[],provincia:[],clasFarmac:[]})}}function A(a){return a.options.sexe}function P(a,e){0===e.error&&(a.options.sexe=e.sexe,a.options.unitatTemps=e.unitatTemps,a.options.grupEdat=e.grupEdat,a.options.siNo=e.siNo,a.options.sospitaRAM=e.sospitaRAM,a.options.viaAdmin=e.viaAdmin,a.options.mesuraPresa=e.mesuraPresa,a.options.ramMotiva=e.ramMotiva,a.options.desen=e.desen,a.options.professio=e.professio,a.options.provincia=e.provincia,a.options.vacunaNDosi=e.vacunaNDosi,a.options.vacuna=e.vacuna,a.options.clasFarmac=e.clasFarmac)}function C({commit:a},e){f.api.get("/diccionaris").then((e=>{a("setOptions",e.data)})).catch((e=>{console.log(e),m.Z.create({message:e.message}),a("setOptions",{sexe:[{value:1,label:"-"},{value:2,label:"Desconegut"},{value:3,label:"Masculí"},{value:4,label:"Femení"}],unitatTemps:[{value:1,label:"-"},{value:2,label:"Dècada(es)"},{value:3,label:"Any(s)"},{value:4,label:"Mes(os)"},{value:5,label:"Setmana(es)"},{value:6,label:"Dia(es)"},{value:7,label:"Hora(es)"},{value:8,label:"Minut(s)"},{value:9,label:"Segon(s)"},{value:10,label:"Trimestral"},{value:11,label:"Cíclica"},{value:12,label:"Total"},{value:13,label:"CSN"}],grupEdat:[{value:1,label:"-"},{value:2,label:"Fetus"},{value:3,label:"Recent nascut (0 - 27d)"},{value:4,label:"Lactant (28d - 23m)"},{value:5,label:"Nen (2y - 11y)"},{value:6,label:"Adolescent (12y - 17y)"},{value:7,label:"Adult (18y - 65y)"},{value:8,label:"Ancià (&gt; 65y)"},{value:9,label:"Desconegut"}],siNo:[{value:1,label:"-"},{value:2,label:"No"},{value:3,label:"Sí"},{value:4,label:"Desconegut"}],sospitaRAM:[{value:1,label:"-"},{value:2,label:"Sospitós"},{value:3,label:"Concomitant"},{value:4,label:"Interacció"}],vacunaNDosi:[{value:1,label:"-"},{value:2,label:"Primera dosi"},{value:3,label:"Segona dosi"},{value:4,label:"Tercera dosi"}],vacuna:[{value:1,label:"-"},{value:2,label:"VAXZEVRIA SUSPENSION INYECTABLE 10 viales multidosis (10 dosis por vial)"},{value:3,label:"SPIKEVAX, DISPERSION INYECTABLE 10 viales (multidosis)"},{value:4,label:"COMIRNATY 30 MICROGRAMOS/DOSIS CONCENTRADO PARA DISPERSIÓN INYECTABLE, 195 viales (multidosis)"},{value:5,label:"COVID-19 VACCINE JANSSEN SUSPENSION INYECTABLE, 10 viales (multidosis)"},{value:6,label:"COMIRNATY 10 MICROGRAMOS/DOSIS CONCENTRADO PARA DISPERSION INYECTABLE, 10 viales multidosis"},{value:7,label:"COMIRNATY 30 MICROGRAMOS/DOSIS DISPERSION INYECTABLE, 10 viales multidosis"},{value:8,label:"COVID-19 VACCINE JANSSEN SUSPENSION INYECTABLE, 20 viales (multidosis)"},{value:9,label:"VAXZEVRIA SUSPENSION INYECTABLE 10 viales multidosis (8 dosis por vial)"},{value:10,label:"Desconeguda"}],viaAdmin:[{value:1,label:"-"},{value:2,label:"Altra via"},{value:3,label:"Auricular (ótica)"},{value:4,label:"Bucal"},{value:5,label:"Intradèrmica"},{value:6,label:"Intramuscular"},{value:7,label:"Intravenosa bolo"},{value:8,label:"Intravenosa goteig"},{value:9,label:"Intravenosa no especificada"},{value:10,label:"Nasal"},{value:11,label:"Oftàlmica"},{value:12,label:"Oral"},{value:13,label:"Parenteral"},{value:14,label:"Rectal"},{value:15,label:"Respiratoria (inhalació)"},{value:16,label:"Subcutània"},{value:17,label:"Sublingual"},{value:18,label:"Tòpica"},{value:19,label:"Transdèrmica"},{value:20,label:"Transplacentaria"},{value:21,label:"Vaginal"},{value:22,label:"Desconeguda"},{value:23,label:"Inhalada"},{value:24,label:"Intravesical"},{value:25,label:"Venatge oclusiu"},{value:26,label:"Intradiscal (Intraespinal)"},{value:27,label:"Cutània"},{value:28,label:"Intrahepàtica"},{value:29,label:"Dental"},{value:30,label:"Intralesional"},{value:31,label:"Orofaríngea"},{value:32,label:"Intralinfàtica"},{value:33,label:"Endocervical"},{value:34,label:"Intramedular (Médula ósea)"},{value:35,label:"Endosinusal"},{value:36,label:"Intrameningeal"},{value:37,label:"Periarticular"},{value:38,label:"Endotraqueal"},{value:39,label:"Perineural"},{value:40,label:"Epidural"},{value:41,label:"Intraocular"},{value:42,label:"Extra-amniótica"},{value:43,label:"Intrapericardial"},{value:44,label:"Hemodiàlisis"},{value:45,label:"Intraperitoneal"},{value:46,label:"Retrobulbar"},{value:47,label:"Intra cos cavernós"},{value:48,label:"Intrapleural"},{value:49,label:"Subconjuntival"},{value:50,label:"Intra-amniótica"},{value:51,label:"Intrasinovial"},{value:52,label:"Intrarterial"},{value:53,label:"Intratumoral"},{value:54,label:"Subdérmica"},{value:55,label:"Intrarticular"},{value:56,label:"Intratecal"},{value:57,label:"Intrauterí"},{value:58,label:"Intratoràcica"},{value:59,label:"Intracardíaca"},{value:60,label:"Intratraqueal"},{value:61,label:"Intracavernosa"},{value:62,label:"Transmamària"},{value:63,label:"Intracerebral"},{value:50,label:"Intracervical"},{value:65,label:"Uretral"},{value:66,label:"Intracisternal"},{value:67,label:"Intracorneal"},{value:68,label:"Iontoforesis"},{value:69,label:"Intracoronaria"}],mesuraPresa:[{value:1,label:"-"},{value:2,label:"AD - Augment de la dosi"},{value:3,label:"Desc - Desconeguda"},{value:4,label:"NA - No aplicable"},{value:5,label:"NMD - No es modifica la dosi"},{value:6,label:"RD - Reducció de la dosi"},{value:7,label:"RF - Retirada del fàrmac"}],ramMotiva:[{value:1,label:"-"},{value:2,label:"Atenció a urgències d'hospital"},{value:3,label:"Ingrés a l'hospital"},{value:4,label:"Allargament de l'hospitalització"},{value:5,label:"Atenció extrahospitalària"},{value:6,label:"Durant l'hospitalització"},{value:7,label:"Cap de les anteriors o es desconeix"}],desen:[{value:1,label:"-"},{value:2,label:"Recuperat"},{value:3,label:"En recuperació"},{value:4,label:"No recuperat"},{value:5,label:"Recuperat amb seqüeles"},{value:6,label:"Mortal"},{value:7,label:"Desconegut"}],professio:[{value:1,label:"-"},{value:2,label:"0 Desconegut"},{value:3,label:"1 Metge"},{value:4,label:"2 Farmacèutic"},{value:5,label:"3 Infermer"},{value:6,label:"4 Odontòleg"},{value:7,label:"5 Altre PS"},{value:8,label:"6 Altre professional, en general"},{value:9,label:"7 Usuari"},{value:10,label:"8 Podòleg"},{value:11,label:"9 Fisioterapeuta"},{value:12,label:"10 Advocat"}],provincia:[{value:1,label:"-"},{value:2,label:"Barcelona"},{value:3,label:"Girona"},{value:4,label:"Lleida"},{value:5,label:"Tarragona"}]})}))}const D={namespaced:!0,getters:t,mutations:o,actions:n,state:h},N=(0,c.h)((function(){const a=(0,u.MT)({modules:{userstore:I,optionstore:D},strict:!1});return a}))}},e={};function l(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return a[i](s,s.exports,l),s.exports}l.m=a,(()=>{var a=[];l.O=(e,i,r,s)=>{if(!i){var t=1/0;for(u=0;u<a.length;u++){for(var[i,r,s]=a[u],o=!0,n=0;n<i.length;n++)(!1&s||t>=s)&&Object.keys(l.O).every((a=>l.O[a](i[n])))?i.splice(n--,1):(o=!1,s<t&&(t=s));if(o){a.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=a.length;u>0&&a[u-1][2]>s;u--)a[u]=a[u-1];a[u]=[i,r,s]}})(),(()=>{l.n=a=>{var e=a&&a.__esModule?()=>a["default"]:()=>a;return l.d(e,{a:e}),e}})(),(()=>{l.d=(a,e)=>{for(var i in e)l.o(e,i)&&!l.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}})(),(()=>{l.f={},l.e=a=>Promise.all(Object.keys(l.f).reduce(((e,i)=>(l.f[i](a,e),e)),[]))})(),(()=>{l.u=a=>"js/"+a+"."+{139:"c16be6f4",193:"243a1f56",458:"c34a7df1",915:"6682e40c"}[a]+".js"})(),(()=>{l.miniCssF=a=>"css/"+{143:"app",736:"vendor"}[a]+"."+{143:"dd745c4d",736:"5df59614"}[a]+".css"})(),(()=>{l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()})(),(()=>{l.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e)})(),(()=>{var a={},e="notitgvue:";l.l=(i,r,s,t)=>{if(a[i])a[i].push(r);else{var o,n;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(n=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",e+s),o.src=i),a[i]=[r];var p=(e,l)=>{o.onerror=o.onload=null,clearTimeout(b);var r=a[i];if(delete a[i],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((a=>a(l))),e)return e(l)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),n&&document.head.appendChild(o)}}})(),(()=>{l.r=a=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}})(),(()=>{l.p=""})(),(()=>{var a={143:0};l.f.j=(e,i)=>{var r=l.o(a,e)?a[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise(((l,i)=>r=a[e]=[l,i]));i.push(r[2]=s);var t=l.p+l.u(e),o=new Error,n=i=>{if(l.o(a,e)&&(r=a[e],0!==r&&(a[e]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),t=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+t+")",o.name="ChunkLoadError",o.type=s,o.request=t,r[1](o)}};l.l(t,n,"chunk-"+e,e)}},l.O.j=e=>0===a[e];var e=(e,i)=>{var r,s,[t,o,n]=i,c=0;if(t.some((e=>0!==a[e]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(n)var u=n(l)}for(e&&e(i);c<t.length;c++)s=t[c],l.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return l.O(u)},i=self["webpackChunknotitgvue"]=self["webpackChunknotitgvue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=l.O(void 0,[736],(()=>l(9942)));i=l.O(i)})();