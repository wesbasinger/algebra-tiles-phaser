import Phaser from 'phaser';
import bgImg from './assets/grid.png';

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
        const bg = this.add.image(400, 300, 'bg');
      
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
