import Phaser from 'phaser';

const gameState = {}

class Basic extends Phaser.Scene
{
    constructor ()
    {
        super();
    }
      
    create ()
    {

        let rectangle1 = this.add.rectangle(100, 100, 50, 50, 0xff0000).setInteractive();
        let rectangle2 = this.add.rectangle(200, 200, 50, 50, 0x00ff00).setInteractive();

        let staticRectangle = rectangle1; // set rectangle1 as the static rectangle

        this.input.setDraggable([rectangle2]);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            if (gameObject !== staticRectangle) { // check if the dragged rectangle is not the static rectangle
                gameObject.x = dragX;
                gameObject.y = dragY;

                // check for collision between the dragged rectangle and the static rectangle
                if (Phaser.Geom.Intersects.RectangleToRectangle(gameObject.getBounds(), staticRectangle.getBounds())) {
                    
                    // calculate the distance between the two rectangles
                    let distanceX = Math.abs(gameObject.x - staticRectangle.x);
                    let distanceY = Math.abs(gameObject.y - staticRectangle.y);
                    
                    // move the dragged rectangle apart from the static rectangle along the shortest distance
                    if (distanceX > distanceY) {
                        if (gameObject.x > staticRectangle.x) {
                            gameObject.x += distanceX/2;
                        } else {
                            gameObject.x -= distanceX/2;
                        }
                    } else {
                        if (gameObject.y > staticRectangle.y) {
                            gameObject.y += distanceY/2;
                        } else {
                            gameObject.y -= distanceY/2;
                        }
                    }
                }
            } else { // if the dragged rectangle is the static rectangle, reset its position to its original position
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
});


    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        debug: true
    },
    scene: Basic
};

const game = new Phaser.Game(config);