input.onButtonPressed(Button.A, function () {
    if (Posición_Paleta > 0) {
        paleta_1.move(-1)
        paleta_2.move(-1)
        Posición_Paleta = -1
    }
})
function Mover_Pelota () {
	
}
input.onButtonPressed(Button.B, function () {
    if (Posición_Paleta > 3) {
        paleta_2.move(-1)
        paleta_1.move(-1)
        Posición_Paleta = 1
    }
})
let Posición_Paleta = 0
let paleta_2: game.LedSprite = null
let paleta_1: game.LedSprite = null
paleta_1 = game.createSprite(2, 4)
paleta_2 = game.createSprite(3, 4)
let pelota = game.createSprite(2, 0)
Posición_Paleta += 2
Posición_Paleta.turn(Direction.Right, 90)
basic.forever(function () {
    Mover_Pelota()
})
