class BootScene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    // This function loads game assets.
    preload ()
    {
        // add a global path "assets" to avoid repetition.
        this.load.setPath('assets/');
        // starting here, we no longer need to add "assets" in the file path.
        this.load.image('background', 'sprites/background.jpg');
        this.load.image('cauldron', 'sprites/cauldron2.png');
        this.load.image('shelf', 'sprites/shelf.png');
        this.load.image('Mélisende', 'chars/char1/1.png');
        this.load.image('Charles', 'chars/char2/2.png');

        // Atla generated with http://free-tex-packer.com/
        this.load.atlas('foods', 'sprites/food_dev.png', 'sprites/food_dev_atlas.json');

        this.load.json('foodData', 'json/foodData_dev.json');
        this.load.json('charData', 'json/charData.json');


        // add a global path "assets/sounds/ambiance/" to avoid repetition.
        this.load.setPath('assets/sounds/ambiance/');
        this.load.audio('music', ['Locations_Medieval_Tavern_Song.mp3','Locations_Medieval_Tavern_Song.ogg']);
    }

    create() {
        this.music = this.sound.add("music");

        let musicConfig = {
            mute: true, //Unmute if necessary. Thank you for my ears. d(^_^)b
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.music.play(musicConfig);
        this.scene.start("menuGame");
    }

    update() {

    }
}