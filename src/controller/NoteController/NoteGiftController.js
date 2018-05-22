class NoteGiftController {
    constructor(x, y,spriteName, configs) {
        this.configs = configs;
        // console.log(this.configs);
        this.sprite = KT.giftNoteGroup.create(x, y, spriteName);
        this.sprite.anchor.set(0.5);
        this.sprite.update = this.update.bind(this);
        this.sprite.kill();
        this.stretch = KT.game.height - KT.configs.HEIGHT_TOOL- y - 41.5;
        this.time = 700;
        this.velo = 1;
        this.veloAfter = this.stretch/this.time/8;
    }
    update() {
        if (KT.checkPlay) {
            if(KT.timeoutPlay.ms >= this.configs.time - 1500){
                this.sprite.revive();
                // this.emitter.on = true;
                this.sprite.position.y += this.velo;

            }
            if (this.sprite.position.y >= 41.5) {
                // console.log(KT.timeoutPlay.ms);
                this.velo += this.veloAfter; 
                this.sprite.position.y += this.velo;
            }
            if (this.sprite.position.y > KT.game.height- KT.configs.HEIGHT_TOOL - 100) {
                // console.log(KT.timeoutPlay.ms);
                // this.emitter.on = false;
            }
            if (this.sprite.position.y > KT.game.height) {
                // console.log(KT.timeoutPlay.ms);
                this.sprite.destroy();
            }
            KT.game.physics.arcade.overlap(
                KT.giftNoteGroup,
                KT.barGroup,
                this.eatGift
            )
        }
    }
    eatGift(giftSprite, barSprite){
        // console.log('gift');
        giftSprite.destroy();
    }
}
// 10758
// 622.5
// 385.5