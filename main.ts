input.onButtonPressed(Button.A, function () {
    if (Posición_Paleta > 0) {
        paleta_1.move(-1)
        paleta_2.move(-1)
        Posición_Paleta = -1
    }
})
function Mover_Pelota () {
    basic.pause(200)
    pelota.move(1)
    pelota.ifOnEdgeBounce()
    if (pelota.isTouching(paleta_1) && pelota.isTouching(paleta_2)) {
        pelota.set(LedSpriteProperty.Direction, 0)
        puntos += 1
        if (azar == true) {
            pelota.turn(Direction.Left, 45)
        } else {
            pelota.turn(Direction.Right, 45)
        }
        azar = Math.randomBoolean()
    } else {
        if (pelota.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString("PUNTOS:")
            basic.showNumber(puntos)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (Posición_Paleta > 3) {
        paleta_2.move(1)
        paleta_1.move(1)
        Posición_Paleta = 1
    }
})
let azar = false
let puntos = 0
let Posición_Paleta = 0
let pelota: game.LedSprite = null
let paleta_2: game.LedSprite = null
let paleta_1: game.LedSprite = null
paleta_1 = game.createSprite(2, 4)
paleta_2 = game.createSprite(3, 4)
pelota = game.createSprite(2, 0)
Posición_Paleta += 2
puntos = 0
pelota.turn(Direction.Right, 90)
basic.forever(function () {
    Mover_Pelota()
})
