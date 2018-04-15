const Gpio = require('onoff').Gpio
const A = new Gpio(13, 'in')
const B = new Gpio(6, 'in')
const C = new Gpio(5, 'in')

A.watch(function (err, value) {
  if (err) {
    throw err
  }
  console.log('A triggered')
})

B.watch(function (err, value) {
  if (err) {
    throw err
  }
  console.log('B triggered')
})

C.watch(function (err, value) {
  if (err) {
    throw err
  }
  console.log('C triggered')
})


process.on('SIGINT', function () {
  A.unexport()
  B.unexport()
  C.unexport()
})