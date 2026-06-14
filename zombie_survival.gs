(/glitch script/)
// Game: Undead Horde
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[WAVE SYSTEM]
Wave_Number = 1
Zombie_Count = 10

When (Zombie_Count == 0):
    Wave_Number = Wave_Number + 1
    Zombie_Count = Wave_Number * 10
    Show_Screen("Wave Cleared! Next Wave Incoming...")

[ENEMY AI BEHAVIOR]
Entity(Zombie).Target = Player
Entity(Zombie).Speed = "Walk"

If (Distance(Zombie, Player) < 2_Meters):
    Player.Health = Player.Health - 15
    Show_Screen_Overlay(Color: "Red", Opacity: 30%)
(/end/)

