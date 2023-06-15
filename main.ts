radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(led.brightness() + receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "POWER") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
