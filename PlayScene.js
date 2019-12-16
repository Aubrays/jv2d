class PlayScene extends Phaser.Scene {
    constructor(){
        super("playGame");
    }

    init(props)
    {
        const { level = 0 } = props
        this.currentLevel = level;
    }

    // Restarted at each level
    create ()
    {
        
        this.physics.world.setBoundsCollision(true, true, true, true);

        let levelName = 'level' + this.currentLevel.toString();

        let levelData = levels[this.currentLevel];

        // Declarations of data
        this.foodData = this.cache.json.get('foodData');
        this.charData = this.cache.json.get('charData');

        // Declarations of images (decoration only)
        this.background = this.add.image(300, 400, 'background');

        // Declarations of sprites (for physics)
        this.shelf = this.physics.add.sprite(100, 550, 'shelf');
        this.cauldron = this.physics.add.sprite(450, 725, 'cauldron');
        this.cauldron.body.setSize(200, 20);
        this.cauldron.body.setOffset(60, 50);

        this.foods = this.physics.add.group();

        // Generate foods for the level 1
        Phaser.Actions.Call(levelData.foods, function(food){
            let new_food = new Food(this, "foods", food);
            this.foods.add(new_food);
        }, this);

        // this.foods.setCollideWorldBounds(true, 0.75);

        Phaser.Actions.GridAlign(this.foods.getChildren(), {
            width: 10,
            height: 10,
            cellWidth: 32,
            cellHeight: 32,
            x: 100,
            y: 550
        });

        this.dragFood();

        this.char = new Character(this, levelData.char); // now just texture, not frame


        // Creation of the progress bars
        // this.heatBar = this.createProgressbar(150, 50, this.char.data.values.heatStart);
        // this.moistBar = this.createProgressbar(150, 80, this.char.data.values.moistnessStart);

        this.heatBar = new ProgressBar(this, {
            pos: { x: 100, y: 40 },
            size: { w: 200, h: 20 },
            fill_color: 0xcc0000,
            border_color: 0x000000,
            startValue: this.char.data.values.heatStart,
            goalValue: this.char.data.values.heatEnd
        });
        this.heatBar.updateProgressBar();

        this.moistBar = new ProgressBar (this, {
            pos: { x: 100, y: 80 },
            size: { w: 200, h: 20 },
            fill_color: 0x0000cc,
            border_color: 0x000000,
            startValue: this.char.data.values.moistnessStart,
            goalValue: this.char.data.values.moistnessEnd
        });
        this.moistBar.updateProgressBar();

        this.dish = {
            foods : [],
            heat : 0,
            moistness : 0,
            cost : 0
        }

        this.physics.add.overlap(this.foods, this.cauldron, this.cauldronTouch, null, this);

    }

    update() {
        // checkPos();
    }

    dragFood() {
        this.input.on('dragstart', function(pointer, food, dragX, dragY){
            food.body.setAllowGravity(false);
            food.setVelocity(0,0);
            console.log(food)
        })
        
        this.input.on('drag', function(pointer, food, dragX, dragY){
            food.x = dragX;
            food.y = dragY;
        })

        this.input.on('dragend', function(pointer, food){
        if(food.x < config.width/2) {

            // this.physics.moveTo(food, food.input.dragStartX, food.input.dragStartY, 5, 1000);

            // position y == height of shelf => return in shelf
            // food.input.dragStartX vs food.x

        } else {
            food.body.setAllowGravity(true);
            food.setGravity(0, 4000);
            food.setCollideWorldBounds(true);
            food.setBounce(0.75);
        }
        });

        
    }

    cauldronTouch(cauldron, food) {
        food.disableBody(true, true);
        console.log(food.getData('name'));

        // add to the dish

        this.dish.foods.push(food.data.values.name);
        this.dish.moistness += food.data.values.moistness;
        this.dish.heat += food.data.values.heat;
        this.dish.cost += food.data.values.price;


        // write in the recipe
        // move gauges
        this.heatBar.updateProgressBar(this.dish.heat);
        this.moistBar.updateProgressBar(this.dish.moistness);
        this.checkVictory();
    }

    // checkPos()
    // {
    //     Phaser.Actions.Call(foods.getChildren(), 
    //     function(food){
    //         if(food.y > config.height){
    //             return;
    //         }
    //     });
    // }


    checkVictory(){
        let actualMoistness = this.char.data.values.moistnessStart + this.dish.moistness;

        let actualHeat = this.char.data.values.heatStart + this.dish.heat;

        let goalMoistness = this.char.data.values.moistnessEnd;
        let goalHeat = this.char.data.values.heatEnd;




        if(actualMoistness == goalMoistness &&
            actualHeat == goalHeat) {
                console.log("Victory !");
                this.nextLevel(this, this.levelNumber);
            }

        if(actualMoistness <= -4 || actualMoistness >= 4) {
            console.log("Defeat !")
        }

        if(actualHeat <= -4 || actualHeat >= 4) {
            console.log("Defheat !")
        }
    }

    nextLevel(scene, level){
        scene.cameras.main.fadeOut();
        scene.time.addEvent({
            delay: 2000,
            callback: () => {
                scene.scene.restart({ level: this.currentLevel + 1 })
            }
        })
    }
}


// Get data
// let data = this.cache.json.get('foodData');

// Set data to a sprite
// gameObject.setData();
// https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Sprite.html#setData__anchor

// parchemin under progress bars
