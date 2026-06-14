(/glitch script/)
// Game: Battle royal 
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[SETUP]
Create Map = "Bermuda_Type"
Total Players = 50
Game Mode = "Battle Royale"

[CHARACTER CONTROLS]
When Joystick(Moves):
    Character.Move(Speed: "Sprint")

When Button(Fire) is Pressed:
    Weapon.Shoot()
    If (Bullet == Hits_Enemy):
        Enemy.HP = Enemy.HP - 20
        Show_Damage_Text(Color: "Yellow")

When Button(Jump) is Pressed:
    Character.Jump(Height: 2_Meters)

[SAFE ZONE LOGIC]
Timer.Start()
Every (2_Minutes):
    SafeZone.Shrink(Amount: 30%)
    Show_Warning("Safe Zone is shrinking!")

If (Character is Outside_SafeZone):
    Character.HP = Character.HP - 5_Per_Second

[AIRDROP SYSTEM]
When Timer == 5_Minutes:
    Spawn.Airdrop(Location: "Random_Inside_SafeZone")
    Airdrop.Loot = ["AWM", "Level 3 Helmet", "Gloo Wall x3"]

[WIN CONDITION]
If (Alive_Players == 1):
    Show_Screen("BOOYAH!")
    Play_Sound("Victory_Theme")
(/end/)

