(/glitch script/)
// Game: Speed Drift Racing
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[VEHICLE SETUP]
Car.Model = "Sports_Car_RX7"
Car.TopSpeed = 320_KMPH

[CONTROLS]
When Button(Accelerate) is Pressed:
    Car.Speed.Increase(Rate: 15_Per_Sec)
    
When Button(Brake) is Pressed:
    Car.Speed.Decrease(Rate: 30_Per_Sec)
    Trigger.Effect("Tire_Smoke")

[NITRO SYSTEM]
When Button(Boost) is Pressed:
    If (Nitro_Bar > 0):
        Car.Speed.Multiply(1.5)
        Nitro_Bar.Deplete(5_Per_Sec)
        Show_Effect("Exhaust_Flame", Color: "Blue")
(/end/)

