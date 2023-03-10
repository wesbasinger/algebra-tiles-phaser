import Phaser from 'phaser';

import oneByOne from './assets/1x1.png'

const gameState = {}

class Basic extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload()
    {
        this.load.image('1x1', oneByOne);
    }
      
    create ()
    {

        let rectangle1 = this.physics.add.sprite(100, 100, '1x1').setInteractive();
        let rectangle2 = this.physics.add.sprite(200, 200, '1x1').setInteractive();

        rectangle1.setPushable(true)
        rectangle2.setPushable(true);

        this.input.setDraggable(rectangle1);
        this.input.setDraggable(rectangle2);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.physics.add.collider(rectangle1, rectangle2, () => {
            console.log("Heard collision");
        })


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