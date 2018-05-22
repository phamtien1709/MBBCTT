class BarController {
    constructor(x, y, configs) {
        this.sprite = KT.barGroup.create(x, y, 'bar1');
        this.sprite.anchor = new Phaser.Point(0.5, 0.7);
        this.sprite.update = this.update.bind(this);
        this.sprite.inputEnabled = true;
        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.setBoundsToWorld = true;
        this.bounds = new Phaser.Rectangle(0, 1290, KT.game.width, KT.game.height);
        this.sprite.input.enableDrag();
        this.sprite.input.boundsRect = this.bounds;
        this.sprite.input.allowVerticalDrag = false;
    }
    update() {
        if (KT.checkData) {
            if (this.sprite.x < this.sprite.width) {
                this.sprite.x = this.sprite.width;
            }
            else if (this.sprite.x > KT.game.width - this.sprite.width) {
                this.sprite.x = KT.game.width - this.sprite.width;
            }
        }
        if(KT.endGame){
            this.sprite.inputEnabled = false;
        }
    }
}