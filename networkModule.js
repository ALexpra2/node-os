/* En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

**Ejemplo de output:**
Interfaz lo0:
  Familia: IPv4
  Dirección: 127.0.0.1
  Interno: true
  Familia: IPv6
  Dirección: ::1
  Interno: true
  Familia: IPv6
  Dirección: fe80::1
  Interno: true

Interfaz en5:
  Familia: IPv6s
  Dirección: fe80::aede:48ff:fe00:1122
  Interno: false */
  /*___________________________________________________________________*/
  
  const os = require('node:os');

  //console.log(os.networkInterfaces().Ethernet);
  const network= [];
  const interfaces = os.networkInterfaces().Ethernet;
  interfaces.forEach((interfaz) => {
      const ethernet ={
        Familia: interfaz.family,
        Dirección: interfaz.address,
        Interno: interfaz.internal,
      }
      network.push(ethernet)

  });

  //console.log(network);

  module.exports = {network};