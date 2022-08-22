






const fs = require('fs')


var pap = require('./papel.js')


const { exec } = require("child_process")

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

function postPapel(nomeDoPapel, texto) {
    try {
        exec(`echo ${texto} > Example/variaveisEmPapel/${nomeDoPapel}`, (error, stdout, stderr) => {
            if (error) {
                //console.log(`error GET: ${error.message}`)
                return
            }
            if (stderr) {
                //console.log(`stderr GET: ${stderr}`)
                return
            }
            return stdout
        })
      }
      catch(error) {
        return
      }
}

function getPapel(nomeDoPapel) {
    try {
        var text = (fs.readFileSync(`Example/variaveisEmPapel/${nomeDoPapel}`, "utf8")).replace(' \r\n', '')
      }
      catch(error) {
        return ''
      }
      return text
}




function teste() {
    pap.enviaGit()
}


teste()




