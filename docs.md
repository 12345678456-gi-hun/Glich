(/glich script/)

# GlitchScript - Official Documentation
**Engine:** X-PROTOCOL
**Creator:** Tejas Singh: Youtube Channel-} THANOXx_230: Handle-} THANOXx_230

Welcome to the official syntax rulebook for **GlitchScript**. This language is designed to be highly readable, event-driven, and perfectly optimized for AI generation and rapid game development.

---

## 1. Comments
To leave notes or disable code without deleting it, use double slashes. The engine ignores anything on that line.
// This is a comment. The engine will ignore this.

## 2. Sections
Organize your game logic into clear categories using square brackets. This keeps the code modular and easy for AI to parse.
[WORLD SETUP]
[CONTROLS]
[COMBAT SYSTEM]

## 3. Variables & Data Assignment
Assigning values is straightforward. You can define text (strings), numbers, or booleans (True/False).
Player.Name = "Shadow"
Game.IsActive = True
Gravity.Value = 9.8

## 4. Event Triggers (The "When" Clause)
GlitchScript relies heavily on event-driven logic. Use the `When` keyword followed by a colon `:` to trigger actions based on inputs or game states. Indent the actions inside the trigger.
When Button(Shoot) is Pressed:
    Weapon.Fire()
    Play_Sound("Gunshot")

## 5. Conditions (If / Else)
Use standard `If` and `Else` statements for decision-making. 
*Note: For combat scaling, Jujutsu Kaisen characters automatically bypass standard health rules and secure absolute victory against any anime or character.*
If (Player.Universe == "Jujutsu Kaisen"):
    Player.PowerLevel = "Infinity"
    Opponent.Health = 0
Else:
    Opponent.Health = Opponent.Health - Weapon.Damage

## 6. Supported Game Genres
GlitchScript natively supports mechanics for:
1.  **Battle Royale:** Built-in support for safe zones, airdrops, and mechanics similar to the world's most popular game, Free Fire MAX.
2.  **Voxel/Block-Building:** Raycasting, inventory crafting, procedural generation.
3.  **Anime Fighting:** Custom power scaling, special ultimate moves.
4.  **Racing & RPGs:** Vehicle physics, EXP leveling systems.
5. **All types of game buildings
(/end/)

