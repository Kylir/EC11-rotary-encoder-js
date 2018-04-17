const Gpio = require('onoff').Gpio

const A = new Gpio(10, 'in', 'both')
const B = new Gpio(9, 'in', 'both')
const C = new Gpio(11, 'in', 'both')

A.watch(function (err, value) {
  if (err) {
    throw err
  }
  console.log('A triggered: ' + value)
})

B.watch(function (err, value) {
  if (err) {
    throw err
  }
  console.log('B triggered: ' + value)
})

C.watch(function (err, value) {
  if (err) {
    throw err
  }
  console.log('C triggered: ' + value)
})

process.on('SIGINT', function () {
  A.unexport()
  B.unexport()
  C.unexport()
})