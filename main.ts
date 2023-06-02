radio.onReceivedString(function (receivedString) {
    if (receivedString == "POWER") {
        encendido = !(encendido)
    }
})
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
