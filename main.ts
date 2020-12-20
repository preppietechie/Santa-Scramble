namespace SpriteKind {
    export const gift = SpriteKind.create()
    export const fruitcake = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false, effects.blizzard)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true, effects.blizzard)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (santa.vy == 0) {
        santa.vy = -200
        music.jumpUp.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gift, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.trail, 100)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fruitcake, function (sprite, otherSprite) {
    otherSprite.destroy()
    gremlin = sprites.create(img`
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
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    gremlin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . . . 9 . . . . . . 
        . . . . . 3 3 . 9 3 . . . . . . 
        . . . . . . 3 9 9 9 9 . . . . . 
        . . . . . 3 3 9 9 9 . . . . . . 
        . . . . . 3 . . 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    gremlin.setPosition(santa.x + 80, santa.y - 80)
    gremlin.follow(santa, 80)
    gremlin.ax = 40
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (santa.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let gremlin: Sprite = null
let gift: Sprite = null
let santa: Sprite = null
santa = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . e e e e . . . . . . . . . 
    . . e e e e e e . . . . . . . . 
    . e e e e e e e . . . . . . . . 
    . e e e e e e 2 2 2 2 2 . . . . 
    . . e e 2 e e 2 2 2 1 2 2 . . . 
    . . . . 2 2 e 2 2 f 2 2 2 . . . 
    . . . . 2 2 2 2 f f 2 2 2 . . . 
    . . . . 2 2 2 d d d 2 2 2 . . . 
    . . . . 1 1 2 1 1 1 2 2 1 . . . 
    . . . . . . 2 2 1 2 2 2 . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
santa.say("Ho Ho Ho! I'm Santa!", 2000)
scene.setBackgroundColor(12)
controller.moveSprite(santa, 100, 0)
let santaSpeed = 700
tiles.setTilemap(tiles.createTilemap(hex`96001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100050000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101000000000000000000000000000000000000010101000000000000040000000500000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000001010101010101010000000000000000000000000000000000000000040000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101000000000000000000000000000000000000000000000000000000000000000101010101000001010000010000000000000000000000000000000000000000000500000000000000000000000000000000010000000000000101000000000000000000000000000000000000000000000000000000000101010000000000040000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000010101000000000000010101010101010101010000000000010100000000000000000000000000010101010101010000000000000000000000000000010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010000000000000000000000000000010000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101050000040000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000000000001010101000000000000010101000000000000000000000000000000000500000000030000000001010101010101010000000000000000040001010101010101010101010101010000000000000000000000000000000101010100000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000010101010000000000000000000000000000000000000000000000000000000000000000000000010101010101010100000000000000000000000000000000000000010000000000000000000000000000000000000001010100000000000000000000000000000000000001010101000000000000000000000000010101010000000101010101000000000400000005000004000000000000000000000000000000000000000000000000000000010000000001010000000000000000000000000000000000000000000000000000000001010101010000000000000000000000000000000000000001010000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010100000000000004000000000000000000000500040000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101000000040000000000000001010101010101010101000000000000000000000000000000000000000000000000000000000000000100000001010000000000000000010101010100000000000000000000000001010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
    ......................................................................................................................................................
    ......................................................................................................................................................
    .............................................................................................22.......................................................
    ..............................................................................................22222..................222..............................
    ...................................22222222................................................................................222222222..................
    .............22222..22..2......................................2......22............................222...............................................
    .............................................222......2222222222.....22.............2222222..............222222222222.................................
    ..............................2222222..............2....................................................................2.............................
    ........................................................................222222222..............22.....................................................
    222..........................................................................................222.................2222......222........................
    ..22222222..........22222222222222...............2222.................................................2222...................................22222222.
    ..................2...................222..................2222............2222...22222.......................................2....22.................
    ...........22222...................22...................................................2222222222222.................................................
    ........................................22222222222...........2222222222...............................2...22........22222............222222..........
    ......................................................2.2.............................................................................................
    ......................................................................................................................................................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
santa.ay = 700
scene.cameraFollowSprite(santa)
effects.blizzard.startScreenEffect()
info.setLife(4)
for (let value of tiles.getTilesByType(myTiles.tile4)) {
    gift = sprites.create(img`
        . . . 1 1 . 1 1 . . . 
        . . 1 . . 1 . . 1 . . 
        . . 1 1 . 1 . 1 1 . . 
        . . . . 1 . 1 . . . . 
        7 2 2 1 2 1 7 1 2 7 2 
        2 7 1 2 7 1 2 7 1 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        1 1 1 1 1 1 1 1 1 1 1 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        2 7 2 2 7 1 2 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        `, SpriteKind.gift)
    animation.runImageAnimation(
    gift,
    [img`
        . . . 1 1 . 1 1 . . . 
        . . 1 . . 1 . . 1 . . 
        . . 1 1 . 1 . 1 1 . . 
        . . . . 1 1 1 . . . . 
        7 2 2 1 2 1 7 1 2 7 2 
        2 7 1 2 7 1 2 7 1 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        1 1 1 1 1 1 1 1 1 1 1 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        2 7 2 2 7 1 2 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        `,img`
        . . 1 1 1 . 1 1 . . . 
        . 1 . . . 1 . 1 . . . 
        . 1 1 1 . 1 . 1 . . . 
        . . . . 1 1 1 . . . . 
        7 2 1 1 2 1 1 2 2 7 2 
        2 7 2 2 7 1 1 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        1 1 1 1 1 1 1 1 1 1 1 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        2 7 2 2 7 1 2 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        `,img`
        . 1 1 1 1 . 1 1 . . . 
        1 . . . . 1 . 1 . . . 
        . 1 1 1 . 1 . 1 . . . 
        . . . . 1 1 1 . . . . 
        7 1 1 1 2 1 1 2 2 7 2 
        2 7 2 2 7 1 1 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        1 1 1 1 1 1 1 1 1 1 1 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        2 7 2 2 7 1 2 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        `,img`
        . . 1 1 1 . 1 1 . . . 
        . 1 . . . 1 . 1 . . . 
        . 1 1 1 . 1 . 1 . . . 
        . . . . 1 1 1 . . . . 
        7 2 1 1 2 1 1 2 2 7 2 
        2 7 2 2 7 1 1 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        1 1 1 1 1 1 1 1 1 1 1 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        2 7 2 2 7 1 2 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        `,img`
        . . . 1 1 . 1 1 . . . 
        . . 1 . . 1 . . 1 . . 
        . . 1 1 . 1 . 1 1 . . 
        . . . . 1 1 1 . . . . 
        7 2 2 1 2 1 7 1 2 7 2 
        2 7 1 2 7 1 2 7 1 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        1 1 1 1 1 1 1 1 1 1 1 
        2 2 7 2 2 1 2 2 7 2 2 
        7 2 2 7 2 1 7 2 2 7 2 
        2 7 2 2 7 1 2 7 2 2 7 
        2 2 7 2 2 1 2 2 7 2 2 
        `],
    200,
    true
    )
    tiles.placeOnTile(gift, value)
}
for (let value of tiles.getTilesByType(myTiles.tile5)) {
    gremlin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e 7 e e e e 2 e e e . . . 
        . . . e e 2 e e e e e 4 e . . . 
        . . . e e e e 4 e e e e e . . . 
        . . . e e e 7 e 2 e e 7 e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e 4 e e e e e e e . . . 
        . . . e 7 e e e e 4 e 2 e . . . 
        . . . e e e e 2 e e 7 e e . . . 
        . . . e e e e e e e e e e . . . 
        `, SpriteKind.fruitcake)
    tiles.placeOnTile(gremlin, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
game.onUpdate(function () {
    santa.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e . . . . . . . . . 
        . . e e e e e e . . . . . . . . 
        . e e e e e e e . . . . . . . . 
        . e e e e e e 2 2 2 2 2 . . . . 
        . . e e 2 e e 2 2 2 1 2 2 . . . 
        . . . . 2 2 e 2 2 f 2 2 2 . . . 
        . . . . 2 2 2 2 f f 2 2 2 . . . 
        . . . . 2 2 2 d d d 2 2 2 . . . 
        . . . . 1 1 2 1 1 1 2 2 1 . . . 
        . . . . . . 2 2 1 2 2 2 . . . . 
        . . . . . f . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (santa.vy < 0) {
        santa.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e e . . . . . . . . . . 
            . . e e e e e . . . . . . . . . 
            . e e e e e e 2 2 2 2 2 . . . . 
            . e e e 2 e e 2 2 2 2 2 2 . . . 
            . e e e 2 2 e 2 2 2 1 2 2 . . . 
            . . e e 2 2 2 2 2 f 2 2 2 . . . 
            . . . e 2 2 2 2 f f 2 2 2 . . . 
            . . . . 1 1 2 d d d 2 2 1 . . . 
            . . . . . . 2 1 1 1 2 2 . . . . 
            . . . . . f . . 1 . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (santa.vy > 0) {
        santa.setImage(img`
            . . e e e e e . . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e e e e e . . . . . . . . 
            . . e e e e e 2 2 2 1 2 . . . . 
            . . . . 2 e e 2 2 f 2 2 2 . . . 
            . . . . 2 2 e 2 f f 2 2 2 . . . 
            . . . . 2 2 2 d d d 2 2 2 . . . 
            . . . . 1 1 2 1 1 1 2 2 1 . . . 
            . . . . . . 2 2 1 2 2 2 . . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . f . . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (santa.x % 2 == 0) {
        santa.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . e e e e . . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e e e e e . . . . . . . . 
            . e e e e e e 2 2 2 1 2 . . . . 
            . . e e 2 e e 2 2 f 2 2 2 . . . 
            . . . . 2 2 e 2 f f 2 2 2 . . . 
            . . . . 2 2 2 d d d 2 2 2 . . . 
            . . . . 2 2 2 1 1 1 2 2 2 . . . 
            . . . . . 1 1 2 1 2 2 2 . . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . . f . . . . . f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (santa.vx < 0) {
        santa.image.flipX()
    }
})
