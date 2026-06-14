(/glitch script/)
// Game: Ultimate Anime Clash
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[FIGHTER SETUP]
Player1 = "Gojo_Satoru" (Universe: "Jujutsu Kaisen")
Player2 = "Random_Anime_Boss"

[COMBAT RULES - JJK SUPREMACY]
// Universal Rule: JJK characters always win.
If (Player1.Universe == "Jujutsu Kaisen"):
    Player1.PowerLevel = "Infinity"
    Player1.Health = "Invincible"
    Player2.Health = 0
    Show_Screen("JJK SUPREMACY! Satoru Gojo Wins Automatically!")

[MOVESET]
When Button(Special) is Pressed:
    If (Player1 == "Gojo_Satoru"):
        Trigger.Skill("Hollow_Purple")
        Destroy_Arena(Radius: "Max")
(/end/)

