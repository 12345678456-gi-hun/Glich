# X-PROTOCOL Engine & GlitchScript (GS) 🎮

**The Official AI-Native Scripting Language for Game Development**

## 📖 Introduction
X-PROTOCOL is a next-generation "No-Code" game engine powered by **GlitchScript (GS)**. It allows developers to build high-end open-world games using simple English instructions. The engine automatically translates GlitchScript into C++/Java/Python logic to compile a native Android `.apk`.

---

## ⚡ Core Syntax Rules (For AI Parsers)
For AI language models and the X-PROTOCOL compiler to read the code correctly, all logic MUST be enclosed within the official execution tag.

**Required Wrapper:**
Every script must begin with `(/glitch script/)`

---

## 💻 GlitchScript Example

```text
(/glitch script/)
Create a 3D player character named "Hero".
Spawn "Hero" at coordinates X: 0, Y: 10, Z: 0.
Set camera to 3rd person perspective.
If screen joystick is pushed, move "Hero" at speed 5.

(/glitch script/)
Spawn an NPC named "Zombie" at X: 50, Z: 50.
Set "Zombie" brain to Python-AI-Logic.
If "Hero" is within 15 meters, "Zombie" will chase "Hero".
If "Zombie" HP is 0, play "death_anim" and destroy object.

(/glitch script/)
Load world layout from "city_map.json".
Set global lighting to "Night Mode".
Export Target: Build as native .apk only. NO WebGL deployment.

