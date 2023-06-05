let HELADO = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . b f f f f b . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . b b 3 3 3 3 3 3 b b . . . 
    . . b b 3 3 3 3 3 3 3 3 b b . . 
    . b b 3 3 3 3 3 3 3 3 3 3 b b . 
    . b 3 3 3 3 f 3 3 f 3 3 3 3 b . 
    . b 3 3 3 2 3 3 3 3 2 3 3 3 b . 
    . b 3 3 3 3 3 3 3 3 3 3 3 3 b . 
    . b b 3 3 3 3 3 3 3 3 3 3 b b . 
    . . e e e 4 4 4 4 4 4 e e e . . 
    . . . e e e 4 4 4 4 e e e . . . 
    . . . . . e 4 4 4 4 e . . . . . 
    . . . . . e e e e e e . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
HELADO,
[img`
    1 1 1 1 1 1 f f f f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . b f f f f b . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . b b 3 3 3 3 3 3 b b . . . 
    . . b b 3 3 3 3 3 3 3 3 b b . . 
    . b b 3 3 3 3 3 3 3 3 3 3 b b . 
    . b 3 3 3 3 f 3 3 f 3 3 3 3 b . 
    . b 3 3 3 2 3 3 3 3 2 3 3 3 b . 
    . b 3 3 3 3 3 3 3 3 3 3 3 3 b . 
    . b b 3 3 3 3 3 3 3 3 3 3 b b . 
    . . e e e 4 4 4 4 4 4 e e e . . 
    . . . e e e 4 4 4 4 e e e . . . 
    . . . . . e 4 4 4 4 e . . . . . 
    . . . . . e e e e e e . . . . . 
    `,img`
    1 1 1 1 1 1 f f f f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . . f 2 2 f . . . . . . 
    . . . . . b f f f f b . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . b b 3 3 3 3 3 3 b b . . . 
    . . b b 3 3 3 3 3 3 3 3 b b . . 
    . b b 3 3 3 3 3 3 3 3 3 3 b b . 
    . b 3 3 3 3 f 3 3 f 3 3 3 3 b . 
    . b 3 3 3 2 3 3 3 3 2 3 3 3 b . 
    . b 3 3 3 3 3 3 3 3 3 3 3 3 b . 
    . b b 3 3 3 3 3 3 3 3 3 3 b b . 
    . . e e e 4 4 4 4 4 4 e e e . . 
    . . . e e e 4 4 4 4 e e e . . . 
    . . . . . e 4 4 4 4 e . . . . . 
    . . . . . e e e e e e . . . . . 
    `],
500,
true
)
