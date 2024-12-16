/* Nombre: darwin
Tipo: Darwin
Versión: Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64
Arquitectura: x64
CPUs: 12
MemoriaTotal: 16384.00 MB
MemoriaLibre: 370.71 MB


Algunos métodos os: version(), platform(), cpus(), totalmem(), networkInterfaces, freemem(), type(), arch()*/

const os = require('node:os');

/* console.log(os.type());
console.log(os.arch());
console.log(os.version());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.totalmem());
console.log(os.networkInterfaces());
console.log(os.freemem());
 */
const TotMemMb = ((os.totalmem())/1048576).toFixed(2);
const freeMemMb = ((os.freemem())/1048576).toFixed(2);

const sistema = {
    Nombre: os.platform(),
    Tipo: os.type(), 
    Version: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal:`${TotMemMb} MB`,
    MemoriaLibre:`${freeMemMb} MB`,
     
}

//console.log(sistema);

module.exports = {sistema};
