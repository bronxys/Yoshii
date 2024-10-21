const fs = require('fs')
const moment = require('moment-timezone');

const sendHours = (formato) => {
return moment.tz('America/Sao_Paulo').format(formato)}

function saveJSON(inter, caminho){
fs.writeFileSync(caminho, JSON.stringify(inter, null, 2))}

const consultkeys = JSON.parse(fs.readFileSync("./public/consultkeys/consultkeys.json"));

function saveConsultKeys() {saveJSON(consultkeys, "./public/consultkeys/consultkeys.json")}

const existConsultKeys = (q) => {
  if(consultkeys.length <= 0) return false
  nmr = 0
  for(i of consultkeys) {
    if(q == i.key) nmr += 1
  }
  return nmr > 0 ? true : false
}

const getConsultKeys = (q) => {
  caixa = []
  nmr = -1
  for(i of consultkeys) {
    nmr += 1
    if(q == i.key) caixa.push(nmr)
  }
  key = consultkeys[caixa[0]]
  key.map = caixa[0]
  return key
}

function addConsultKeys(q, day) {
  if(existConsultKeys(q)) {
    if(Number(day)) {
      getConsultKeys(q).dias += Number(day)
      saveConsultKeys();
    } else {
      getConsultKeys(q).inifinty = true
      saveConsultKeys();
    }
  } else {
    consultkeys.push({key: q, dias: Number(day), inifinty: Number(day) <= 0 ? true : false, expired: false, quant: 5})
    saveConsultKeys();
  }
}

function rmConsultKeys(q) {
  AB = getConsultKeys(q).map
  consultkeys.splice(AB, 1)
  saveConsultKeys();
}

function forConsultKeys() {
  if(consultkeys.length > 0) {
    for(i of consultkeys) {
      if(!i.inifinty) {
        if(i.dias > 1) {
          i.dias -= 1
          saveConsultKeys();
        } else {
          if(i.expired) {
            if(i.quant > 1) {
              i.quant -= 1
              saveConsultKeys();
            } else { rmConsultKeys(i.key) }
          } else {
            i.expired = true
            saveConsultKeys();
          }
        }
      }
    }
  }
}

module.exports = { consultkeys, saveConsultKeys, existConsultKeys, getConsultKeys, addConsultKeys, rmConsultKeys, forConsultKeys }