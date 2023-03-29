# Web notificació TG

Frontend en Quasar+VueJS3

# API notificació TG

Documentación en format OpenAPI basat en swagger

https://editor.swagger.io/


F.Biol.    F.Vacuna
-------    --------
No         No
Si         No
No         Si


{"pacient":{"nom":" jhfh sfhiasud p","sexe":{"value":3,"label":"Masculí"},"edat":"7","edatUnitats":{"value":2,"label":"Dècada(es)"},"edatGrup":{"value":8,"label":"Ancià (&gt; 65y)"},"pes":null,"cip":"ghjgk78896978760","atencio":{"value":3,"label":"Sí"},"motiva":{"value":5,"label":"Atenció extrahospitalària"}},"farmacs":[],"reaccions":[{"titol":"Exemple","inici":"11/2021","final":"01/2022","resultat":{"value":3,"label":"Ingrés a l'hospital"}}],"notificador":{"professio":{"value":4,"label":"2 Farmacèutic"},"nom":"Joan","cognoms":"Figues","adreca":"Carre major","poblacio":"Barcelona","provincia":{"value":2,"label":"Barcelona"},"centre":"CAP Eixample","telefon":"666666666","email":"pepe@pepe.es"},"observacions":"Exemple d'observacions"}


# Tema diccionaris

DONE https://crf3.w3nexus.net/cfvcat_tgneram/x/cfvcat/api/diccionaris
DONE https://crf3.w3nexus.net/cfvcat_tgneram/x/cfvcat/api/centres?term=hebron
"clasFarmac": [{"value": 1, "label": "Marca comercial"}, {"value": 2, "label": "Principi actiu"}]
1) ESPECIALITAT DONE https://crf3.w3nexus.net/cfvcat_tgneram/x/cfvcat/api/farmacs?term=paracet%20codeina
2) PRINCIPIACTIU DONE https://crf3.w3nexus.net/cfvcat_tgneram/x/cfvcat/api/pactius?term=paracet

# Tema validacions

---
Dades Pacient
---
if ( $('#nomPacient').val().trim().length==0 ) {
    alert("[Nom i cognoms] no especificats!!"); return false;
}
if ( $('#edat').val().trim().length>0 && $('#uniEdat').val()==1 ) {
    alert("Unitat d'edat no especificada!!"); return false;
} else if ( $('#edat').val().trim().length==0 && $('#grupEdat').val()==1 ) {
    alert("Sense valor d'edat és necessari especificar grup edat!!"); return false;
}
if ( $('#atencio').val()==3 && $('#ramMotiva').val()==1 ) {
    alert('És necessari especificar [La RA ha motivat] quan [El quadre clínic ha requerit atenció] és Sí!!'); return false;
}

---
validacio edatUni i grupEdat
---
if ( ($('#edat').val().trim().length>0 && !isNaN($('#edat').val()) && $('#uniEdat').val()>1) ) { if ( parseInt($('#edat').val())>=0 && parseInt($('#edat').val())<=27 && $('#uniEdat').val()==6 ) { $('#grupEdat').val(3); } else if ( parseInt($('#edat').val())>=1 && parseInt($('#edat').val())<=23 && $('#uniEdat').val()==4 ) { $('#grupEdat').val(4); } else if ( parseInt($('#edat').val())>=2 && parseInt($('#edat').val())<=11 && $('#uniEdat').val()==3 ) { $('#grupEdat').val(5); } else if ( parseInt($('#edat').val())>=12 && parseInt($('#edat').val())<=17 && $('#uniEdat').val()==3 ) { $('#grupEdat').val(6); } else if ( parseInt($('#edat').val())>=18 && parseInt($('#edat').val())<=65 && $('#uniEdat').val()==3 ) { $('#grupEdat').val(7); } else if ( parseInt($('#edat').val())>65 && $('#uniEdat').val()==3 ) { $('#grupEdat').val(8); } else { $('#grupEdat').val(9); } }


---
Dades Fàrmac
---
if ( $('#farmac').val().trim().length==0 ) { alert("[Medicament] no especificat!!"); return false; }
if ( $('#sospitaRAM').val()==1 ) {
    alert("Sospita RA no especificada!!"); return false;
} else if ( ($('#sospitaRAM').val()==2 || $('#sospitaRAM').val()==4) && $('#dataInici').val().trim().length==0 ) {
    alert("És necessari especificar [Data inici] donada la selecció a [Sospita RA]!!"); return false;
}
if ( $('#mesuraPresa').val()==1 ) {
    alert('És necessari especificar [Mesura presa]!!'); return false;
}

---
Dades Reacció Adversa
---
if ( $('#reaccio').val().trim().length==0 ) {
    alert("[Reacció] no especificada!!"); return false;
}
if ( $('#dataInici').val().trim().length==0 ) {
    alert("És necessari especificar [Data inici]!!"); return false;
}
if ( $('#desen').val()==1 ) {
    alert('És necessari especificar [Desenllaç]!!'); return false;
}

---
Dades notificador
---
Professió
Nom emisor
Cognoms emisor
Centre treball
Email

# Alguns diccionaris

<select class="txt-default-format" name="sexe" id="sexe"><option value="1">-</option><option value="2">Desconegut</option><option value="3">Masculí</option><option value="4">Femení</option></select>
<select class="txt-default-format" name="uniEdat" id="uniEdat"><option value="1">-</option><option value="2">Dècada(es)</option><option value="3">Any(s)</option><option value="4">Mes(os)</option><option value="5">Setmana(es)</option><option value="6">Dia(es)</option><option value="7">Hora(es)</option><option value="8">Minut(s)</option><option value="9">Segon(s)</option><option value="10">Trimestral</option><option value="11">Cíclica</option><option value="12">Total</option><option value="13">CSN</option></select>
(autocalculat)<select class="txt-default-format" name="grupEdat" id="grupEdat"><option value="1">-</option><option value="2">Fetus</option><option value="3">Recent nascut (0 - 27d)</option><option value="4">Lactant (28d - 23m)</option><option value="5">Nen (2y - 11y)</option><option value="6">Adolescent (12y - 17y)</option><option value="7">Adult (18y - 65y)</option><option value="8">Ancià (&gt; 65y)</option><option value="9">Desconegut</option></select>

<select class="txt-default-format" name="atencio" id="atencio"><option value="1">-</option><option value="2">No</option><option value="3">Sí</option><option value="4">Desc</option></select>
(depen de l'anterior) <select class="txt-default-format" name="ramMotiva" id="ramMotiva"><option value="1">-</option><option value="2">Atenció a urgències d'hospital</option><option value="3">Ingrés a l'hospital</option><option value="4">Allargament de l'hospitalització</option><option value="5">Atenció extrahospitalària</option><option value="6">Durant l'hospitalització</option><option value="7">Cap de les anteriors o es desconeix</option></select>

<select class="txt-default-format" name="vacunaNDosi" id="vacunaNDosi"><option value="1">-</option><option value="2" selected="selected">Primera dosi</option><option value="3">Segona dosi</option><option value="4">Tercera dosi</option></select>
<select class="txt-default-format" name="biologicSN" id="biologicSN"><option value="1">-</option><option value="2" selected="selected">No</option><option value="3">Sí</option><option value="4">Desc</option></select>
<select class="txt-default-format" name="vacuna" id="vacuna"><option value="1">-</option><option value="2">(730002) VAXZEVRIA SUSPENSION INYECTABLE 10 viales multidosis (10 dosis por vial)</option><option value="3">(730000) SPIKEVAX, DISPERSION INYECTABLE 10 viales (multidosis)</option><option value="4" selected="selected">(729999) COMIRNATY 30 MICROGRAMOS/DOSIS CONCENTRADO PARA DISPERSIÓN INYECTABLE, 195 viales (multidosis)</option><option value="5">(730003) COVID-19 VACCINE JANSSEN SUSPENSION INYECTABLE, 10 viales (multidosis)</option><option value="6">(732338) COMIRNATY 10 MICROGRAMOS/DOSIS CONCENTRADO PARA DISPERSION INYECTABLE, 10 viales multidosis</option><option value="7">(732271) COMIRNATY 30 MICROGRAMOS/DOSIS DISPERSION INYECTABLE, 10 viales multidosis</option><option value="8">(730864) COVID-19 VACCINE JANSSEN SUSPENSION INYECTABLE, 20 viales (multidosis)</option><option value="9">(730001) VAXZEVRIA SUSPENSION INYECTABLE 10 viales multidosis (8 dosis por vial)</option><option value="10">Desconeguda</option></select>
<select class="txt-default-format" name="viaAdmin" id="viaAdmin"><option value="1">-</option><option value="2">Altra via</option><option value="3">Auricular (ótica)</option><option value="4">Bucal</option><option value="5">Intradèrmica</option><option value="6" selected="selected">Intramuscular</option><option value="7">Intravenosa bolo</option><option value="8">Intravenosa goteig</option><option value="9">Intravenosa no especificada</option><option value="10">Nasal</option><option value="11">Oftàlmica</option><option value="12">Oral</option><option value="13">Parenteral</option><option value="14">Rectal</option><option value="15">Respiratoria (inhalació)</option><option value="16">Subcutània</option><option value="17">Sublingual</option><option value="18">Tòpica</option><option value="19">Transdèrmica</option><option value="20">Transplacentaria</option><option value="21">Vaginal</option><option value="22">Desconeguda</option><option value="23">Inhalada</option><option value="24">Intravesical</option><option value="25">Venatge oclusiu</option><option value="26">Intradiscal (Intraespinal)</option><option value="27">Cutània</option><option value="28">Intrahepàtica</option><option value="29">Dental</option><option value="30">Intralesional</option><option value="31">Orofaríngea</option><option value="32">Intralinfàtica</option><option value="33">Endocervical</option><option value="34">Intramedular (Médula ósea)</option><option value="35">Endosinusal</option><option value="36">Intrameningeal</option><option value="37">Periarticular</option><option value="38">Endotraqueal</option><option value="39">Perineural</option><option value="40">Epidural</option><option value="41">Intraocular</option><option value="42">Extra-amniótica</option><option value="43">Intrapericardial</option><option value="44">Hemodiàlisis</option><option value="45">Intraperitoneal</option><option value="46">Retrobulbar</option><option value="47">Intra cos cavernós</option><option value="48">Intrapleural</option><option value="49">Subconjuntival</option><option value="50">Intra-amniótica</option><option value="51">Intrasinovial</option><option value="52">Intrarterial</option><option value="53">Intratumoral</option><option value="54">Subdérmica</option><option value="55">Intrarticular</option><option value="56">Intratecal</option><option value="57">Intrauterí</option><option value="58">Intratoràcica</option><option value="59">Intracardíaca</option><option value="60">Intratraqueal</option><option value="61">Intracavernosa</option><option value="62">Transmamària</option><option value="63">Intracerebral</option><option value="64">Intracervical</option><option value="65">Uretral</option><option value="66">Intracisternal</option><option value="67">Intracorneal</option><option value="68">Iontoforesis</option><option value="69">Intracoronaria</option></select>
<select class="txt-default-format" name="sospitaRAM" id="sospitaRAM"><option value="1" selected="selected">-</option><option value="2">Sospitós</option><option value="3">Concomitant</option><option value="4">Interacció</option></select>
<select class="txt-default-format" name="mesuraPresa" id="mesuraPresa"><option value="1">-</option><option value="2">AD - Augment de la dosi</option><option value="3">Desc - Desconeguda</option><option value="4">NA - No aplicable</option><option value="5">NMD - No es modifica la dosi</option><option value="6">RD - Reducció de la dosi</option><option value="7" selected="selected">RF - Retirada del fàrmac</option></select>

<select class="txt-default-format" name="desen" id="desen"><option value="1">-</option><option value="2" selected="selected">Recuperat</option><option value="3">En recuperació</option><option value="4">No recuperat</option><option value="5">Recuperat amb seqüeles</option><option value="6">Mortal</option><option value="7">Desconegut</option></select>

<select class="txt-default-format" name="professio" id="professio"><option value="1">-</option><option value="2">0 Desconegut</option><option value="3">1 Metge</option><option value="4" selected="selected">2 Farmacèutic</option><option value="5">3 Infermer</option><option value="6">4 Odontòleg</option><option value="7">5 Altre PS</option><option value="8">6 Altre professional, en general</option><option value="9">7 Usuari</option><option value="10">8 Podòleg</option><option value="11">9 Fisioterapeuta</option><option value="12">10 Advocat</option></select>
<select class="txt-default-format" name="provincia" id="provincia"><option value="1">-</option><option value="2" selected="selected">Barcelona</option><option value="3">Girona</option><option value="4">Lleida</option><option value="5">Tarragona</option></select>
