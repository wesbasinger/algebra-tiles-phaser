import Phaser from 'phaser';
import bgImg from './assets/grid.png';
import fiveByFiveImg from './assets/5x5.png';

const gameState = {}

class Basic extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', bgImg);
        this.load.image('5x5', fiveByFiveImg);
    }
      
    create ()
    {
        this.add.image(412.5, 312.5, 'bg');

        gameState.r1 = this.add.image(400,200, '5x5')

        gameState.r1.setInteractive();

        this.input.setDraggable(gameState.r1);

        this.input.on('drag', function(pointer, gameObj, dragX, dragY) {
            let gridSize = 25;

            if(dragX > 75 && dragX < 725) {
                gameObj.x = Phaser.Math.Snap.To(dragX, gridSize);
            }
            if (dragY > 75 && dragY < 525) {
                gameObj.y = Phaser.Math.Snap.To(dragY, gridSize);
            }
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
