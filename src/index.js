import Phaser from 'phaser';
import bgImg from './assets/grid.png';

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
    }
      
    create ()
    {
        this.add.image(412.5, 312.5, 'bg');

        gameState.r1 = this.add.rectangle(125,125, 125,125, 0xFFFF00);

        gameState.r1.setInteractive();

        this.input.setDraggable(gameState.r1);

        this.input.on('drag', function(pointer, gameObj, dragX, dragY) {
            let gridSize = 25;
            gameObj.x = Phaser.Math.Snap.To(dragX, gridSize);
            gameObj.y = Phaser.Math.Snap.To(dragY, gridSize);
        })

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Basic
};

const game = new Phaser.Game(config);
