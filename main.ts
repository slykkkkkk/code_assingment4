basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(j, 4 - I)
            led.plot(I, 4 - j)
        }
        basic.pause(100)
        basic.clearScreen()
    }
})
