bluetooth.startButtonService()
bluetooth.startAccelerometerService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startUartService()

bluetooth.onBluetoothConnected(() => {
    basic.showString("V")
})
bluetooth.onBluetoothDisconnected(() => {
    basic.showString("X");
})