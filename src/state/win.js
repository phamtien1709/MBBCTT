var winState = {
    preload: function () {

    },
    create: function () {
        var nameFindInHighscore = KT.highscore.find((obj)=>{
            return obj.song == KT.nameOfSong;
        });
        var nameFindOnListSong = KT.listSongSyns.find((obj) => {
            return obj.value == KT.nameOfSong;
        });
        if (KT.normalModeDone) {
            var bg_mask = KT.game.add.sprite(0, 0, 'bg-mask');
            bg_mask.width = KT.game.width;
            bg_mask.height = KT.game.height;
            var nameSong = KT.game.add.text(KT.game.width / 2, KT.game.height / 10, `${nameFindOnListSong.name}`, {
                font: "70px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            nameSong.anchor.set(0.5);
            //draw star previous
            for (i = 0; i < 3; i++) {
                if (i == 0) {
                    var star = KT.game.add.sprite(KT.game.width / 4, KT.game.height / 4, 'star');
                    star.anchor.set(0.5);
                }
                if (i == 1) {
                    var star = KT.game.add.sprite(KT.game.width / 2, KT.game.height / 5, 'star');
                    star.anchor.set(0.5);
                }
                if (i == 2) {
                    var star = KT.game.add.sprite(KT.game.width / 4 * 3, KT.game.height / 4, 'star');
                    star.anchor.set(0.5);
                }
            }
            var scoreIngame = KT.game.add.text(KT.game.width / 2, KT.game.height / 2.5, `Total Score: ${KT.score}`, {
                font: "65px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            scoreIngame.anchor.set(0.5);
            var perPercent = Math.floor(KT.perPoint / KT.targetPoint * 100);
            var perAllPercent = Math.floor(KT.perAllPoint / KT.score * 100);
            var perIngame = KT.game.add.text(KT.game.width / 2, KT.game.height / 3.3, `Perfect: ${perPercent} %`, {
                font: "55px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            perIngame.anchor.set(0.5);
            var perAllIngame = KT.game.add.text(KT.game.width / 2, 900, `Total Perfect: ${perAllPercent} %`, {
                font: "55px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            perAllIngame.anchor.set(0.5);
            var scoreInHighscore = KT.game.add.text(KT.game.width / 2, KT.game.height / 1.7, `Best Score: ${nameFindInHighscore.highscore}`, {
                font: "50px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            scoreInHighscore.anchor.set(0.5);
            var btn_menu = KT.game.add.button(KT.game.width / 4, KT.game.height / 5 * 4, 'btn-menu');
            btn_menu.anchor.set(0.5);
            btn_menu.scale.set(0.7);
            var btn_replay = KT.game.add.button(KT.game.width / 2, KT.game.height / 5 * 4, 'btn-replay');
            btn_replay.anchor.set(0.5);
            btn_replay.scale.set(0.7);
            var btn_share = KT.game.add.button(KT.game.width / 4 * 3, KT.game.height / 5 * 4, 'btn-share');
            btn_share.anchor.set(0.5);
            btn_share.scale.set(0.7);
            if ((30 < perPercent) && (perPercent <= 60)) {
                this.drawEffectStar(1);
            }
            if ((60 < perPercent) && (perPercent <= 80)) {
                this.drawEffectStar(2);
            }
            if (perPercent > 80) {
                this.drawEffectStar(3);
            }
            //btn click
            btn_menu.events.onInputDown.add(() => {
                console.log('menu');
                handleScore(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                    handleDiamond(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                        KT.game.state.start('menu');
                    });
                });
            });
            btn_replay.events.onInputDown.add(() => {
                console.log('replay');
                handleScore(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                    handleDiamond(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                        testState.createNoteDefault(KT.NOTEAll, KT.NOTEAllDefault);
                        testState.createNoteDefault(KT.orangeNotes, KT.orangeNotesDefault);
                        testState.createNoteDefault(KT.violetNotes, KT.violetNotesDefault);
                        testState.createNoteDefault(KT.greenNotes, KT.greenNotesDefault);
                        KT.game.state.start('test');
                    });
                });
            });
            btn_share.events.onInputDown.add(() => {
                console.log('share');
            });
        }
        else {
            var bg_mask = KT.game.add.sprite(0, 0, 'bg-mask');
            bg_mask.width = KT.game.width;
            bg_mask.height = KT.game.height;
            var nameSong = KT.game.add.text(KT.game.width / 2, KT.game.height / 8, `${nameFindOnListSong.name}`, {
                font: "70px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            nameSong.anchor.set(0.5);
            var scoreIngame = KT.game.add.text(KT.game.width / 2, 800, `Score: ${KT.score}`, {
                font: "65px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            scoreIngame.anchor.set(0.5);
            var perPercent = Math.floor(KT.perPoint / KT.targetPoint * 100);
            var perIngame = KT.game.add.text(KT.game.width / 2,700, `Perfect: ${perPercent} %`, {
                font: "60px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            perIngame.anchor.set(0.5);
            var scoreInHighscore = KT.game.add.text(KT.game.width / 2, KT.game.height / 1.7, `Best Score: ${nameFindInHighscore.highscore}`, {
                font: "55px Roboto",
                fill: "white",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            scoreInHighscore.anchor.set(0.5);
            var btn_menu = KT.game.add.button(KT.game.width / 4, KT.game.height / 5 * 4, 'btn-menu');
            btn_menu.anchor.set(0.5);
            var btn_replay = KT.game.add.button(KT.game.width / 2, KT.game.height / 5 * 4, 'btn-replay');
            btn_replay.anchor.set(0.5);
            var btn_share = KT.game.add.button(KT.game.width / 4 * 3, KT.game.height / 5 * 4, 'btn-share');
            btn_share.anchor.set(0.5);
            //btn click
            btn_menu.events.onInputDown.add(() => {
                console.log('menu');
                // KT.game.state.start('menu');
                handleScore(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                    handleDiamond(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                        KT.game.state.start('menu');
                    });
                });
            });
            btn_replay.events.onInputDown.add(() => {
                console.log('replay');
                handleScore(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                    handleDiamond(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                        testState.createNoteDefault(KT.NOTEAll, KT.NOTEAllDefault);
                        testState.createNoteDefault(KT.orangeNotes, KT.orangeNotesDefault);
                        testState.createNoteDefault(KT.violetNotes, KT.violetNotesDefault);
                        testState.createNoteDefault(KT.greenNotes, KT.greenNotesDefault);
                        KT.game.state.start('test');
                    });
                });
            });
            btn_share.events.onInputDown.add(() => {
                console.log('share');
            });
        }
    },
    update: function () {

    },
    drawEffectStar: function (numberOfStar) {
        if (numberOfStar > 0) {
            for (i = 0; i < numberOfStar; i++) {
                if (i == 0) {
                    var star = KT.game.add.sprite(KT.game.width / 2, KT.game.height / 2, 'star2');
                    star.anchor.set(0.5);
                    star.scale.set(0.2);
                    var tweenStar = KT.game.add.tween(star.scale).to({ x: 1, y: 1 }, 1500, 'Linear');
                    tweenStar.start();
                    var tweenPosStar = KT.game.add.tween(star).to({ x: "+50", y: "-25" }, 1000, 'Linear');
                    tweenPosStar.start();
                    tweenPosStar.onComplete.add(() => {
                        var tweenPosPosStar = KT.game.add.tween(star).to({ x: KT.game.width / 4, y: KT.game.height / 4 }, 500, Phaser.Easing.Circular.InOut);
                        tweenPosPosStar.start();
                        tweenPosPosStar.onComplete.add(() => {
                            var eff = KT.game.add.audio('star-trick');
                            eff.play();
                            star.position.x = KT.game.width / 4;
                            star.position.y = KT.game.height / 4;
                        });
                    }, this);
                }
                if (i == 1) {
                    var star1 = KT.game.add.sprite(KT.game.width / 2, KT.game.height / 2, 'star2');
                    star1.anchor.set(0.5);
                    star1.scale.set(0.2);
                    star1.alpha = 0;
                    var tweenAlphaStar1 = KT.game.add.tween(star1).to({ alpha: 0.1 }, 2000, 'Linear');
                    tweenAlphaStar1.start();
                    tweenAlphaStar1.onComplete.add(() => {
                        star1.alpha = 1;
                        var tweenStar1 = KT.game.add.tween(star1.scale).to({ x: 1, y: 1 }, 1500, 'Linear');
                        tweenStar1.start();
                        var tweenPosStar1 = KT.game.add.tween(star1).to({ x: "+50", y: "-25" }, 1000, 'Linear');
                        tweenPosStar1.start();
                        tweenPosStar1.onComplete.add(() => {
                            var tweenPosPosStar1 = KT.game.add.tween(star1).to({ x: KT.game.width / 2, y: KT.game.height / 5 }, 500, Phaser.Easing.Circular.InOut);
                            tweenPosPosStar1.start();
                            tweenPosPosStar1.onComplete.add(() => {
                                var eff = KT.game.add.audio('star-trick');
                                eff.play();
                                star1.position.x = KT.game.width / 2;
                                star1.position.y = KT.game.height / 5;
                            });
                        }, this);
                    }, this);
                }
                if (i == 2) {
                    var star2 = KT.game.add.sprite(KT.game.width / 2, KT.game.height / 2, 'star2');
                    star2.anchor.set(0.5);
                    star2.scale.set(0.2);
                    star2.alpha = 0;
                    var tweenAlphaStar2 = KT.game.add.tween(star2).to({ alpha: 0.1 }, 4000, 'Linear');
                    tweenAlphaStar2.start();
                    tweenAlphaStar2.onComplete.add(() => {
                        star2.alpha = 1;
                        var tweenStar2 = KT.game.add.tween(star2.scale).to({ x: 1, y: 1 }, 1500, 'Linear');
                        tweenStar2.start();
                        var tweenPosStar2 = KT.game.add.tween(star2).to({ x: "+50", y: "-25" }, 1000, 'Linear');
                        tweenPosStar2.start();
                        tweenPosStar2.onComplete.add(() => {
                            var tweenPosPosStar2 = KT.game.add.tween(star2).to({ x: KT.game.width / 4 * 3, y: KT.game.height / 4 }, 500, Phaser.Easing.Circular.InOut);
                            tweenPosPosStar2.start();
                            tweenPosPosStar2.onComplete.add(() => {
                                var eff = KT.game.add.audio('star-trick');
                                eff.play();
                                star2.position.x = KT.game.width / 4 * 3;
                                star2.position.y = KT.game.height / 4;
                            });
                        }, this);
                    }, this);
                }
            }
        }
    }
}