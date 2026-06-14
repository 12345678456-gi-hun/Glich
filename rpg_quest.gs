(/glitch script/)
// Game: Fantasy Quest RPG
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[CHARACTER STATS]
Level = 1
EXP = 0
EXP_Needed = 100

[LEVEL UP LOGIC]
When Monster_Killed:
    EXP = EXP + 25
    Show_Damage_Text("+25 EXP", Color: "Purple")

If (EXP >= EXP_Needed):
    Level = Level + 1
    EXP = 0
    EXP_Needed = EXP_Needed * 1.5
    Player.MaxHealth.Increase(20)
    Play_Effect("Level_Up_Aura")
    Show_Screen("Level Up! You are now Level " + Level)
(/end/)

