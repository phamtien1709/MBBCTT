KT.timeHeart = 180;
setInterval(() => {
    if (KT.timeHeart == 0) {
        if (KT.heart < 15) {
            KT.heart += 1;
            updateHeart();
        }
        KT.timeHeart = 180;
    }
    KT.timeHeart -= 1;
    // console.log(KT.timeHeart);
}, 1000);
function handleDiamond(perfectPercent, callback) {
    var filterSong = KT.highscore.find(function (filterSong) {
        return filterSong.song == KT.nameOfSong;
    });
    if ((30 < perfectPercent) && (perfectPercent <= 60)) {
        if (filterSong.perfectPercent < 30) {
            KT.diamond += 10;
            updateDiamond();
        }
    }
    else if ((60 < perfectPercent) && (perfectPercent <= 80)) {
        if (filterSong.perfectPercent < 30) {
            KT.diamond += 20;
            updateDiamond();
        } else if ((30 < filterSong.perfectPercent) && (filterSong.perfectPercent <= 60)) {
            KT.diamond += 15;
            updateDiamond();
        }
    }
    else if (perfectPercent > 80) {
        if (filterSong.perfectPercent < 30) {
            KT.diamond += 45;
            updateDiamond();
        } else if ((30 < filterSong.perfectPercent) && (filterSong.perfectPercent <= 60)) {
            KT.diamond += 20;
            updateDiamond();
        } else if ((60 < filterSong.perfectPercent) && (filterSong.perfectPercent <= 80)) {
            KT.diamond += 25;
            updateDiamond();
        }
    }
    callback();
}
function handleScore(perfectPercent, callback) {
    var filterSong = KT.highscore.find(function (filterSong) {
        return filterSong.song == KT.nameOfSong;
    });
    var ind = KT.highscore.findIndex((ele) => {
        return ele.song == KT.nameOfSong;
    });
    if (filterSong.highscore < KT.score) {
        // console.log('newHighScore');
        KT.highscore[ind].highscore = KT.score;
        if (filterSong.perfectPercent < perfectPercent) {
            KT.highscore[ind].perfectPercent = perfectPercent;
        } else {
            KT.highscore[ind].perfectPercent = filterSong.perfectPercent;
        }
        updateHighscore();
    } else {
        console.log('no have highscore');
        if (filterSong.perfectPercent < perfectPercent) {
            KT.highscore[ind].perfectPercent = perfectPercent;
            updateHighscore();
        }
    }
    callback();
}
function handleUnlockSong(price, diamond, name, value) {
    if (price < diamond) {
        KT.diamond = diamond - price;
        var ind = KT.listSongSyns.findIndex((ele) => {
            return ele.value == value;
        });
        KT.listSongSyns[ind] = {
            "name": name,
            "value": value,
            "status": "unlocked"
        };
        updateDiamondAfterUnlock();
    } else {
        console.log('not enough');
    }
}