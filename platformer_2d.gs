(/glitch script/)
// Game: Super Glitch Bros
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[WORLD SETUP]
Camera.Type = "2D_Side_Scroller"
World.Gravity = 9.8

[PLAYER PHYSICS]
When Button(Jump) is Pressed:
    If (Player.Is_Grounded == True):
        Player.Velocity_Y = 15
        Play_Sound("Jump_Boing")

[COIN SYSTEM]
When Player_Collides_With(Item: "Gold_Coin"):
    Destroy.Item("Gold_Coin")
    Score = Score + 10
    Play_Sound("Coin_Collect")
(/end/)

