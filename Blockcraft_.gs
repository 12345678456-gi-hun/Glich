(/glitch script/)
// Game: VoxCraft (Minecraft Clone)
// Engine: X-PROTOCOL
// Creator: Tejas Singh (Shadow Glitcher)

[WORLD GENERATION]
Generate.VoxelTerrain(Seed: "Random", Height: 128)
Set.Biomes = ["Forest", "Desert", "Mountain"]

[INPUT - MOUSE]
When Mouse(Left_Click):
    Raycast.Detect(Target.Block)
    Destroy.Block(Selected)
    Inventory.Add(Selected.Type)

When Mouse(Right_Click):
    Raycast.Detect(Target.Surface)
    If (Inventory.Has(Active_Block)):
        Place.Block(Active_Block, Face: Normal)

[CRAFTING SYSTEM]
Define CraftingTable(3x3_Grid)
If (Grid.Pattern == ["Wood", "Stick", "Wood"]):
    Result = "Pickaxe"
    Inventory.Add(Result)

[BLOCK PHYSICS]
If (Block.Type == "Sand"):
    Apply.Gravity(Active)
Else:
    Block.State = "Static"
(/end/)

