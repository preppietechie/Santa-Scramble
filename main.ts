namespace SpriteKind {
    export const gift = SpriteKind.create()
    export const fruitcake = SpriteKind.create()
    export const giftIcon = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    current_level += 1
    startLevel()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (santa.vy == 0) {
        santa.vy = -150
        music.jumpUp.play()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (santa.vy == 0) {
        santa.vy = -150
        music.jumpUp.play()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (santa.vy == 0) {
        santa.vy = -150
        music.jumpUp.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gift, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    presents += 1
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    music.baDing.play()
    otherSprite.destroy(effects.smiles, 200)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruitcake, function (sprite, otherSprite) {
    gremlin = sprites.create(img`
        f . . . . . . f 
        . f . . . . f . 
        . . f 2 2 f . . 
        . . . f f . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    gremlin,
    [img`
        f . . . . . . f 
        . f . . . . f . 
        . . f 2 2 f . . 
        . . . f f . . . 
        `,img`
        . . . . . . . . 
        f . . . . . . f 
        . f f 2 2 f f . 
        . . . f f . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        f f f 2 2 f f f 
        . . . f f . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . f f 2 2 f f . 
        f . . f f . . f 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        f f f 2 2 f f f 
        . . . f f . . . 
        `,img`
        . . . . . . . . 
        f . . . . . . f 
        . f f 2 2 f f . 
        . . . f f . . . 
        `,img`
        f . . . . . . f 
        . f . . . . f . 
        . . f 2 2 f . . 
        . . . f f . . . 
        `],
    200,
    true
    )
    gremlin.setPosition(santa.x - 80, -10)
    gremlin.follow(santa, 100)
    gremlin.ax = 60
    otherSprite.destroy()
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000404000000000000000000000401000000000000000000000000000000000000000400000404040000000000000000000401010101000000000404000004010000000005000000000000000000000001010101010000010101010000000000000000010000000000000001010100000100000000010101010000000000000004000000000000000000000000000404000000000100000000000000000400000000000000000000000000000004000001010100000000000000000000000001010101010000000000000000000101010400000000000000000000000001010101000000000000000000000000000000000000000000000000000000050000000000010000010101010100000001000000000000000000010004000000000000000000000000000000010000010101010100000000000000000000050000000000000000000000000000010101010000000000000000040400000000000000000000000000010101000400000001010000000100000000000000000000000000000000000000000101010101010000010000000000040404000000010000000000010000000004000000000004000000000000000000000000000000000004040400000000000101010101000000000000000000000101010101010000000100000000000001010101010101000000000101010100000000000000000000040404000004000000000000000000010000000000060306000000000000000000000000000000000000000000000000000101010101010101010500000000000000010000010101010101000000000000000000000000000000000000000000000000000000000000000000010000000000000000040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010100000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
            ..................................................
            .............................2....................
            ...............2222.........2................22222
            ..2222........2.......222..2....2222..............
            .............2...........................222......
            ......22222.........222.............2222..........
            .......................2..22222...2.........2.....
            ............2..22222.........................2222.
            ......................222.....22...2..............
            ......222222..2...........2.....2.................
            ...................22222..........222222...2......
            2222222....2222.........................2.........
            ........................222222222........2..222222
            .................................2................
            .........................................2222.....
            ..................................................
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile10,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile13], TileScale.Sixteen))
    } else if (current_level == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`96001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000050000000000000000000000000005000000000000000100000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000400000000000000000000000000000000000000000000000000000000000000040000000000050000000000010000000000000000000000000000000000000001010101010100000000000000000101010100000000000000000000000000000000010101010000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000100010101000000000000000000000000000000000000000000000000000000010000000000010100000000000000000100000000000005000004000000000100000000000000000000000004000000050000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000010000000000050000040101010000000000000000000000000000000005000000000000000000000000000000000000000000010000000001010101010000000000000001000004000000000001010101010100000000000000000000000101010101010101010101010101010101010101000004000100000000000000000004000101000500000000000101010101000400000000000000010101010101010100000000000000000000000000000000000101010000000000000004000000000000000000010104000000000000000000000000000101010100000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000001000001010100000000010000000000000100000000000000000000000000000000000000000000000001010101000000000000000000000000000001000000000000000001000001010001000000000000000004000000000000000000000000000000000000000000040000010001010000000000000000000005000000000000000001000000000000000000000100000004000000000000000000010000000000000000000000000000000001000000000000000000000000000000000004000000000000000000000004000001000000000000000000000100000000000000000000050000000001000000000000000101010101010004000000000000010000000000000000000000000001010101010100000001000000000000050000000000000000010101010000000000000000000000000000000000000001000000000000000000000000000000010101000000000101000000000000000101010101000000000000000000000400000000000000000400010101010000000000000000000000040000000000000001000000000000000000050000000400000001000100000000000000000000000101010101010101010101000000000000000000010000000000010000000005000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010101010101010100000000000100000000000000000000000000000001010000000000000000000101010000000001010101010101000000000000000000000000000400050000000000000000000000000000000000000001000000000000000001010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000050000000000010000000000000000000000000001000000000000000000000000000000000000000000000000000500000000000000010100010000000000000000000000000000050000000100000000000000000000000000000000000400000000000000010100000000000000000603060000000000000000000000000000040000000000000000000000000000000000000001010101000000000000000000050001010101000000000000040000010000000000000000050000000000000101010101010101000000000000000000000000000400000000000101010101000000040000000000040100000000000000000100000000000000000000000001010101010101010101010101010001000101010101010101010101010000000001010101000000000000000000000000000004000101010101000000000001010101010100000000000100000000010101000000000000000000000000000400000000010101010101010101010100000000000000000000010101010100010000000000000001000000000005000000000000040000000000000000000000000000000000000000000000000000000000000001000100000000000000000000000000000000000001000000000000000000000000000000000000000000000000010101010101010000000000000000000000010101010000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
            ......................................................................................................................................................
            ...........................................................................................2..........................................................
            ................................................2...................222222........2222................2222............................................
            ....2.222...........................2.....22........2..............2................................................................2.........222.....
            .................................2....22222.......2........222222...........22222222222222222222....2...........22.......22222.........22222222.......
            ..........222.................22..............2222...2............................................2...........2..222....2......2......................
            ..2222..............2........2..22.2.................................2.22...................2..........2.............2................2...............
            .................2..........2...............2.......222222........2.............222222...2...............2222...................2...............222...
            .22.......22222.....................2222...................2.................2.2...........22222222222.........2.....2.....................2..........
            .....................22222222.....2...............22.........222....2222222...................................2........2222222........................
            ...................2...................2.............2.................................22.2..................2.........................22.............
            ................................2222...........2222.........2...............22222222...................22222..........2........2............2222222222
            2222.2.222222222222....2222................22222.....222222.....2....222..................22222222222..........22222.2.......2........................
            ....................2.2..................2........................2222222...........2222........................................22222222..2...........
            ......................................................................................................................................................
            ......................................................................................................................................................
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile10,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile13,myTiles.tile1], TileScale.Sixteen))
    } else if (current_level == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`190032000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030403040300000000000502050000000000000000000000010101010101010000010101010101000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000080000070000000000000000000000000000000000000000000703000700000000000000000000000000000000000000000007000009000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000700000000000003030303000000000000000000000000000007030001010101010101010100000000000000000000000000070000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304040300000300000000000000000000000000000000000001010101000008000000000000000400000000000000000000000000000000070000000400000008000000000000000000000000000000000700000008000000070000000000000000000000000000000007000000070000000700000000000000000000000000000000070000000700000007000000000000000000000000000000000700000007000300070000000000000000000000000000000007000000070303030700000000000000000000000000000000070000000703030307000000000000000000000000000000000700000007030303070000000000000000000000000000000009000000070303030700000000000000000000000000000000000000000703030307000000000000000000000000000303030000000009090909090000000000000000000000000808080808000000000000000000000000000000000000000007000000000304000000000000000000000000000000000000070000000001010000000000000000000000000000000000000700000000000000000000000000000000000000000000000007000000000000000000000000000000000000000006000000070000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000030304070000000000000000000000000000000000000001010101010900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            .........................
            .........................
            .........................
            .........................
            .........................
            ......2222222..222222....
            .........................
            .........................
            .....2...................
            .....2...................
            .....2...................
            .....2...................
            ..2..2...................
            ..2..2...................
            ..2..2...................
            ..2......................
            ..2......................
            ..2..222222222...........
            ..2......................
            ..2......................
            ..2......................
            ..2......................
            ..2......................
            .........................
            .........................
            ...2222..2...............
            .........2.......2.......
            .........2...2...2.......
            .........2...2...2.......
            .........2...2...2.......
            .........2...2...2.......
            .........2...2...2.......
            .........2...2...2.......
            .........2...2...2.......
            .........2...2...2.......
            .............2...2.......
            .............22222.......
            .....22222...............
            .....2...................
            .....2....22.............
            .....2...................
            .....2...................
            .....2...................
            .....2...................
            .....2...................
            .....2...................
            222222...................
            .........................
            .........................
            .........................
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile13,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen))
    } else {
        game.over(true)
    }
    scene.cameraFollowSprite(santa)
    tiles.placeOnRandomTile(santa, myTiles.tile1)
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        tiles.setTileAt(value, myTiles.transparency16)
    }
    info.setLife(3)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fruitcake)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gift)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        gift = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gift)
        animation.runImageAnimation(
        gift,
        [img`
            . . . . 1 1 1 . . 1 1 1 . . . . 
            . . . 1 . . . 1 1 . . . 1 . . . 
            . . . . 1 . . 1 1 . . 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . 2 2 2 2 1 1 1 1 2 2 2 2 . . 
            . . 2 2 1 1 2 1 1 2 1 1 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            `,img`
            . . . . 1 1 1 . 1 1 1 . . . . . 
            . . . 1 . . 1 . 1 . . 1 . . . . 
            . . . . 1 . . 1 1 . 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . 2 2 1 2 1 1 1 1 2 2 2 2 . . 
            . . 2 2 2 1 2 1 1 2 1 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 1 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            `,img`
            . . . 1 1 1 . 1 1 1 . . . . . . 
            . . 1 . . . 1 1 . . 1 . . . . . 
            . . . 1 . . 1 1 . 1 . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . 2 1 1 2 1 1 1 1 2 2 2 2 . . 
            . . 2 2 2 1 2 1 1 2 1 2 2 2 . . 
            . . 2 2 2 2 2 1 1 1 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            `,img`
            . . . . 1 1 1 . 1 1 1 . . . . . 
            . . . 1 . . 1 . 1 . . 1 . . . . 
            . . . . 1 . . 1 1 . 1 . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . 2 2 1 2 1 1 1 1 2 2 2 2 . . 
            . . 2 2 2 1 2 1 1 2 1 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 1 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            `,img`
            . . . . 1 1 1 . . 1 1 1 . . . . 
            . . . 1 . . . 1 1 . . . 1 . . . 
            . . . . 1 . . 1 1 . . 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . 2 2 2 2 1 1 1 1 2 2 2 2 . . 
            . . 2 2 1 1 2 1 1 2 1 1 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            . . 2 2 2 2 2 1 1 2 2 2 2 2 . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(gift, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
    for (let value of tiles.getTilesByType(myTiles.tile5)) {
        gremlin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 d 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . d 7 . d 7 7 . . . . . . . 
            . . . 7 7 . 7 7 d . . . . . . . 
            . . . 7 d . 7 7 7 . 7 7 . . . . 
            . . . 7 7 7 7 d 7 . 7 d . . . . 
            . . . . d 7 7 7 7 . 7 7 . . . . 
            . . . . . . 7 7 7 . d 7 . . . . 
            . . . . . . 7 7 d 7 7 7 . . . . 
            . . . . . . d 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . d 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 d . . . . . . . 
            `, SpriteKind.fruitcake)
        tiles.placeOnTile(gremlin, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    if (santa.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
    }
})
let gift: Sprite = null
let gremlin: Sprite = null
let mySprite: Sprite = null
let presents = 0
let current_level = 0
let santa: Sprite = null
santa = sprites.create(img`
    . . e e e e . . . . . . 
    . e e e e e e . . . . . 
    e e e e e e e . . . . . 
    e e e e e e 2 2 2 2 2 . 
    . e e 2 e e 2 2 2 1 2 2 
    . . . 2 2 e 2 2 f 2 2 2 
    . . . 2 2 2 2 f f 2 2 2 
    . . . 2 2 2 d d d 2 2 2 
    . . . 1 1 2 1 1 1 2 2 1 
    . . . . . 2 2 1 2 2 2 . 
    . . . . f . . . . . f . 
    `, SpriteKind.Player)
controller.moveSprite(santa, 100, 0)
santa.say("Ho Ho Ho! I'm Santa!", 2000)
santa.ay = 300
effects.blizzard.startScreenEffect()
scene.setBackgroundColor(12)
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb1111111111bbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbb11111111111111b1111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111bbbbb1111111bbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111b11111111111bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111bbbbbbbbbbbbb
    bbbbbbbbbbbbb1111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbb
    bbbbbbbbbbbb111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111bbbbbbbbbbbb
    bbbbbbbbbbb11111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbb111111111bbbbbbbbbbbb111111111111111111111111111111111111111111bbbbbbbbbbbb
    bbbbbbbbb1111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbb111111111111bbbbbbbbbbb111111111111111111111111111111111111111111bbbbbbbbbbbbb
    bbbbbbbbb1111111111111111ddd111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbb1111111111111111111111111111111111111111bbbbbbbbbbbbbb
    bbbbbbbbb1111111111111111d11dddddddddddd111111111111111bbbbbbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbbbb111111111111ddddddddddddddddddddddd111bbbbbbbbbbbbbbb
    bbbbbbbbbb111ddd1111ddddddddddddddddddddddddddddddd11bbbbbbbbbbbbbbbbbbbbb11111b1111111111111bbbbbbbbbbbbbbbb11111dddddddddddddddddddddddd111111bbbbbbbbbbbbbbbb
    bbbbbbbbbbbb1111dddddddddddddddddddddddddddddddddd111bbbbbbbbbbbbbbbbbb1111111111111111111111111bbbbbbbbbbbbbbbb111dddddddddddddddddddddddddd11bbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbb111111111111111ddddddddddddddd1bbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd11111bbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111ddddddddddddddd11111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111dddddddddddddddddddd11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111dddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcdddddbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccdddddddcbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccdddddddddccbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccddddddddddddcccbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccddddddddddddddddcccb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcdccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddaadddaaadddddddcc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcddddcbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddadddddadaddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcddddddcbbbbbbbbbbbbbbbbbbbbbbbccdccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddadddddadadddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcdddddddddccbbbbbbbbbbbbbbbbbbccdddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddadddddaddadddddadddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbccccddddddddddcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddaadddddadddadddddadddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddadddddddddddddddcccddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccdddddddaaaddddddaddddadddddadddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddadddddadddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccddaaddddddddadddddaddddddaddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddadaddddddaddddddcccccdddddddddaddddddaaddddddddbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccaacccddddddaddddddaddddddaddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddadadddddddaadcccccccccccdddddddaaddddddaadddddccccccbbbbbbbbbbbbbbbbbbccccccccccaaccccccccccacddddddaddddddaddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddadddaddddccccacccccccccccccccccdddadddddddaacccccccccccccbbbbbbbbbbbbccccccccaaaaccccccccccaaccccccccacccccccacc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddaddccacccccccccaacccccccccccccccccccaccccccccaaccccccccccccccccccbbccccccccaaacccccccccccccaccccccccccacccccccacc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccaaccccccaccccccccccaaccccccccccccccccccaaccccccccaccccccccccccccccccccccccaaaccccccccccccccaaccccccccccccacccccccac
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccacccccccccacccccccccccaaaaccccccccccccccccaccccccccaaccccccccccccccccaaaaaaccccccccccccccccaccccccccccccccacccccccca
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccaccccccccccacccccccccccccccaacccccccccccccccacccccccccaacccccccccccaaaccccccccccccccccccccaaccccccccccccccccacccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccaccccccccccccaccccccccccccccccaaccccccccccccccaacccccccccaaccccccccccccccccccccccccccccccaacccccccccccccccccccaccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccaaaccccccccccccccacccccccccccccccccaaccccccccccccccaacccccccccaaacccccccccccccccccccccccaaaaccccccccccccccccccccccacccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccaaccccccccccccccccccaccccccccccccccccccaaacccccccccccccaaccccccccccaaaaacccccccccccccaaaaacccccccccccccccccccccccccccaacccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccaaccccccccccccccccccccacccccccccccccccccccccaaaccccccccccccaacccccccccccccaaccccccccccccccccccccccccccccccccccccccccccccaaccc
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccaacccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbccccccccccaaccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbcccccccccccaacccccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbccccccccccaaaaccccccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbccccccccccaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccaacaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccaaaccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaccccccccccccccccccccccc
    cccaaaaaaaccccccccaccccccccccccaaaaaccccccccccccccccccccccccccccccccccccccccccaaaaaaaccccccccccccccccccccccccccccccccccccccaaaaaaccccccccaaacccccccccccccccccccc
    cccccccccccccccccccaaccccccaaaacccccaaaaacccccccccccccccccccccccccccccccccccaaccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccccccccc
    cccccccccccccccccccccaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaccccccccaccccccccccaaaaaaaacccccccccccccccccccccccccccccccccccccccaacccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccccaccccccaaaccccccccaaaacccccccccccccccccccccccccccccccccccccaaaaaaaaaaaacccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccccccaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaacccaacccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaacccccccccaccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaccccccc
    cccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccaaaaaacccccccccccaacccccaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccaaaaaaccccccccccccccccacccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccaaccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccaaacccccccccaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccaaacccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccaacccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaccccccaacccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaaacccccccccccaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccaaaacccccccccccccccccccccccccccccccccccccccaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
current_level = 2
santa.setFlag(SpriteFlag.BounceOnWall, false)
startLevel()
game.onUpdate(function () {
    santa.setImage(img`
        . . e e e e . . . . . . 
        . e e e e e e . . . . . 
        e e e e e e e . . . . . 
        e e e e e e 2 2 2 1 2 . 
        . e e 2 e e 2 2 f 2 2 2 
        . . . 2 2 e 2 f f 2 2 2 
        . . . 2 2 2 d d d 2 2 2 
        . . . 2 2 2 1 1 1 2 2 1 
        . . . . 1 1 2 1 2 2 2 . 
        . . . . . 2 2 2 2 2 2 . 
        . . . . f . . . . . f . 
        `)
    if (santa.vy < 0) {
        santa.setImage(img`
            . . e e e . . . . . . . 
            . e e e e e . . . . . . 
            e e e e e e 2 2 2 2 2 . 
            e e e 2 e e 2 2 2 2 2 2 
            e e e 2 2 e 2 2 2 1 2 2 
            . e e 2 2 2 2 2 f 2 2 2 
            . . e 2 2 2 2 f f 2 2 2 
            . . . 1 1 2 d d d 2 2 1 
            . . . . . 2 1 1 1 2 2 . 
            . . . . f . . 1 . . f . 
            `)
    } else if (santa.vy > 0) {
        santa.setImage(img`
            . e e e e e . . . . . . 
            e e e e e e e . . . . . 
            e e e e e e e . . . . . 
            . e e e e e e . . . . . 
            . e e e e e 2 2 2 1 2 . 
            . . . 2 e e 2 2 f 2 2 2 
            . . . 2 2 e 2 f f 2 2 2 
            . . . 2 2 2 d d d 2 2 2 
            . . . 1 1 2 1 1 1 2 2 1 
            . . . . . 2 2 1 2 2 2 . 
            . . . . . 2 2 2 2 2 2 . 
            . . . . f . . . . . f . 
            `)
    } else if (santa.x % 2 != 0) {
        santa.setImage(img`
            . . e e e e . . . . . . 
            . e e e e e e . . . . . 
            e e e e e e e . . . . . 
            e e e e e e 2 2 2 1 2 . 
            . e e 2 e e 2 2 f 2 2 2 
            . . . 2 2 e 2 f f 2 2 2 
            . . . 2 2 2 d d d 2 2 2 
            . . . 2 2 2 1 1 1 2 2 1 
            . . . . 1 1 2 1 2 2 2 . 
            . . . . . 2 2 2 2 2 2 . 
            . . . . . f . . . . . f 
            `)
    }
    if ((santa.isHittingTile(CollisionDirection.Left) || santa.isHittingTile(CollisionDirection.Right)) && santa.vy >= 0) {
        santa.vy = 0
        santa.ay = 0
        santa.setImage(img`
            . . . . . . . . . . . 1 
            . e e e e . . . . . . 2 
            e e e e e e . . . . . 2 
            e e e e e e 2 2 2 2 2 2 
            e e e 2 e e 2 2 2 1 2 2 
            e e e 2 2 e 2 2 f 2 2 . 
            e e e 2 2 2 2 f f 2 2 . 
            . e e 2 2 2 d d d 2 2 . 
            . . . 1 1 2 1 1 1 2 2 . 
            . . . . . 2 2 1 2 2 2 . 
            . . . . . f . . . . . f 
            `)
    } else {
        santa.ay = 300
    }
    if (santa.vx < 0 || santa.isHittingTile(CollisionDirection.Left)) {
        santa.image.flipX()
        santa.setImage(santa.image)
    }
})
