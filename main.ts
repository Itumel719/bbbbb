let car_turn_around = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 45)
        kBit.run(KBitDir.RunBack, 45)
        kBit.setLed(255, 255, 0)
        basic.pause(1000)
        car_turn_around += 1
        kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 45)
        kBit.run(KBitDir.RunBack, 45)
        kBit.setLed(255, 0, 128)
        basic.pause(1000)
        kBit.setLed(0, 255, 255)
        kBit.carStop()
    }
})
