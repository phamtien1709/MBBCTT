class NoteBigController{
    constructor(x, y, spriteName, configs){
        this.configs = configs;
        this.sprite = KT.noteBigGroup.create(x, y, spriteName);
        this.sprite.anchor.set(0.5);
        this.sprite.update = this.update.bind(this);
        this.sprite.kill();
        this.stretch = KT.game.height - KT.configs.HEIGHT_TOOL- y - 41.5;
        this.time = 700;
        this.velo = 1;
        this.veloAfter = this.stretch/this.time;
        this.sprite.body.onWorldBounds = new Phaser.Signal();
        this.sprite.body.onWorldBounds.add(() => {
            KT.checkPlay = false;
            KT.timeoutPlay.stop();
            KT.endGame = true;
            this.velo = 0;
            this.veloAfter = 0;
            this.sprite.position.y -= 2;
            setTimeout(()=>{
                winState.create();
            }, 3000);
        }, this);
    }
    update() {
        if (KT.checkPlay) {
            if (this.sprite.position.y > this.sprite.body.height) {
                this.sprite.body.collideWorldBounds = true;
            }
            if(KT.timeoutPlay.ms >= this.configs.time*1000 - 1500){
                this.sprite.revive();
                this.sprite.position.y += this.velo;
            }
            if (KT.endGame) {
                this.velo = 0;
                this.veloAfter = 0;
            }
            if (this.sprite.position.y >= 41.5) {
                // console.log(KT.timeoutPlay.ms);
                this.velo += this.veloAfter; 
                this.sprite.position.y += this.velo;
            }
        }
        KT.game.physics.arcade.overlap(
            KT.barGroup,
            this.sprite,
            this.generateMiniNote
        )
    }
    generateMiniNote(noteBigSprite, barSprite){
        // console.log(this.configs);
        noteBigSprite.destroy();
        for(i=0; i<10; i++){
            KT.miniNoteList.push(new NoteMiniController(noteBigSprite.position.x, {
                key : noteBigSprite.key
            }));
        }
        KT.veloYMini = 1000;
    }
}