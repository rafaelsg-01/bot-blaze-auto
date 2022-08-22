



const fs = require('fs')

const { exec } = require("child_process")




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
            //console.log(`stderr GET: ${stdout}`)
            return stdout
        })
      }
      catch(error) {
        //console.log(`stderr GET: ${error}`)
        return
      }
}


function getPapel(nomeDoPapel, retornaNum=false) {
    try {
        var text = (fs.readFileSync(`Example/variaveisEmPapel/${nomeDoPapel}`, "utf8")).replace(' \r\n', '').replace('\r\n', '').replace('\n', '').replace('\r', '').replace(' ', '')
      }
      catch(error) {
        return retornaNum===true?0:''
      }
      return text
}

function enviaGit() {
  try {
      exec(`C:/Drop/blaze/bot2/Blaze/Example/variaveisEmPapel/saldoSetado/enviagit.bat`, (error, stdout, stderr) => {
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
      //console.log(error)
      return
    }
}

function pegaGit() {
  try {
      exec(`C:/Drop/blaze/bot2/Blaze/Example/variaveisEmPapel/saldoSetado/pegaDoGit.bat`, (error, stdout, stderr) => {
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
      //console.log(error)
      return
    }
}


module.exports = {
    postPapel,
    getPapel,
    enviaGit,
    pegaGit
}