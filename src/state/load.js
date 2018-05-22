var loadState = {
	preload: function () {
		KT.game.load.onLoadStart.removeAll();
		KT.game.load.onFileComplete.removeAll();
		KT.game.load.onLoadComplete.removeAll();
		KT.game.scale.pageAlignHorizontally = true;
		KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		KT.game.time.advancedTiming = true;
		KT.game.stage.disableVisibilityChange = true;
		const bgBoot = KT.game.add.sprite(0, 0, 'bg-loading');
		bgBoot.width = KT.game.width;
		bgBoot.height = KT.game.height;
		const loadingSS = KT.game.add.sprite(KT.game.width / 2, KT.game.height * 0.82, 'loadingSS');
		loadingSS.anchor.set(0.5);
		loadingSS.scale.set(KT.game.width / 1080);
		const runLoad = loadingSS.animations.add('run_load');
		loadingSS.animations.play('run_load', 20, true);
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('line', 'assets/line.png');
		KT.game.load.image('dot', 'assets/dot.png');
		KT.game.load.image('bar1', 'assets/blockBar.png');
		KT.game.load.image('btn', 'assets/button.png');
		KT.game.load.image('piano', 'assets/pianoNote.png');
		KT.game.load.image('violet', 'assets/pianoNoteViolet.png');
		KT.game.load.image('orange', 'assets/pianoNoteOrange.png');
		KT.game.load.image('pianoEffect', 'assets/effectPiano.png');
		KT.game.load.image('note', 'assets/note.png');
		KT.game.load.image('optionDropDown', 'assets/optionDropDown.png');
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('btn_setting', 'assets/btn_setting.png');
		KT.game.load.image('eff_mid', 'assets/eff1.png');
		KT.game.load.image('eff_lt', 'assets/eff-left.png');
		KT.game.load.image('eff_rt', 'assets/eff-right.png');
		KT.game.load.image('eff_midOrange', 'assets/eff1Orange.png');
		KT.game.load.image('eff_ltOrange', 'assets/eff-leftOrange.png');
		KT.game.load.image('eff_rtOrange', 'assets/eff-rightOrange.png');
		KT.game.load.image('eff_midViolet', 'assets/eff1Violet.png');
		KT.game.load.image('eff_ltViolet', 'assets/eff-leftViolet.png');
		KT.game.load.image('eff_rtViolet', 'assets/eff-rightViolet.png');
		KT.game.load.image('eff_midX2', 'assets/eff-midX2.png');
		KT.game.load.image('eff_ltX2', 'assets/eff-leftX2.png');
		KT.game.load.image('eff_rtX2', 'assets/eff-rightX2.png');
		KT.game.load.image('hand', 'assets/hand.png');
		KT.game.load.image('holdhand', 'assets/holdtohand.png');
		KT.game.load.image('3', 'assets/3.png');
		KT.game.load.image('2', 'assets/2.png');
		KT.game.load.image('1', 'assets/1.png');
		KT.game.load.image('eff_per', 'assets/eff_per.png');
		KT.game.load.image('greenX3', 'assets/pianoNoteX3.png');
		KT.game.load.image('orangeX3', 'assets/pianoNoteOrangeX3.png');
		KT.game.load.image('violetX3', 'assets/pianoNoteVioletX3.png');
		KT.game.load.image('greenMini', 'assets/squareMiniLastGreen.png');
		KT.game.load.image('orangeMini', 'assets/squareMiniLastOrange.png');
		KT.game.load.image('violetMini', 'assets/squareMiniLastViolet.png');
		KT.game.load.image('greenX2', 'assets/pianoNoteX2.png');
		KT.game.load.image('orangeX2', 'assets/pianoNoteOrangeX2.png');
		KT.game.load.image('violetX2', 'assets/pianoNoteVioletX2.png');
		KT.game.load.image('noteX2', 'assets/noteX2.png');
		KT.game.load.image('gift', 'assets/giftSquare.png');
		KT.game.load.image('heart', 'assets/heart.png');
		KT.game.load.image('diamond', 'assets/diamond.png');
		KT.game.load.image('perfect', 'assets/perfect.png');
		KT.game.load.image('scorebox', 'assets/score.png');
		KT.game.load.image('effbg1', 'assets/effbg1.png');
		KT.game.load.image('effbg2', 'assets/effbg2.png');
		KT.game.load.image('effbg4', 'assets/effbg4.png');
		KT.game.load.image('effbg3', 'assets/effbg3.png');
		KT.game.load.image('effbg5', 'assets/effbg5.png');
		KT.game.load.image('bg-menu', 'assets/bg-menu.png');
		KT.game.load.image('gem', 'assets/gem.png');
		KT.game.load.image('lock', 'assets/lock.png');
		KT.game.load.image('music', 'assets/music.png');
		KT.game.load.image('music-gem', 'assets/music-gem.png');
		KT.game.load.image('playTu', 'assets/play.png');
		KT.game.load.image('play-music', 'assets/play-music.png');
		KT.game.load.image('rank', 'assets/rank.png');
		KT.game.load.image('setting', 'assets/setting.png');
		KT.game.load.image('shop', 'assets/shop.png');
		KT.game.load.image('start', 'assets/star.png');
		KT.game.load.image('start2', 'assets/star_2.png');
		KT.game.load.image('star', 'assets/starBig.png');
		KT.game.load.image('star2', 'assets/starBig_2.png');
		KT.game.load.image('tab', 'assets/tab.png');
		KT.game.load.image('unlock', 'assets/unlock.png');
		KT.game.load.image('bg-color', 'assets/bg-color.png');
		KT.game.load.image('endless-mode', 'assets/endlessMode.png');
		KT.game.load.image('bg-mask', 'assets/bg-mask.png');
		KT.game.load.image('btn-menu', 'assets/btn-menu.png');
		KT.game.load.image('btn-replay', 'assets/btn-replay.png');
		KT.game.load.image('btn-share', 'assets/btn-share.png');
		//check and uncheck
		KT.game.load.image('btn_check', 'assets/check.png');
		KT.game.load.image('btn_uncheck', 'assets/uncheck.png');
		//sound
		KT.game.load.audio('star-trick', 'assets/sound/star-trick.wav');
		// font
		// Load the image
	},
	create: function () {
		KT.btnFB = KT.game.add.button(KT.game.width / 2, KT.game.height / 4.5, 'fb');
		KT.btnFB.anchor.set(0.5);
		checkLoginState(() => {
			if (KT.checkConnect == "connected") {
				// console.log('is connect');
				getUserID(() => {
					KT.game.state.start('menu');
					// this.loadBoot();
				})
			}
		});
		KT.btnFB.events.onInputDown.add(() => {
			FB.login(function (response) {
				//handle
				if (response.status == 'unknown') {
					alert("Đăng nhập lỗi, hãy đăng nhập lại! :'(");
				}
				if (response.status == 'connected') {
					KT.game.state.start('boot');
				}
			}, {
					scope: 'email,public_profile'
				});
		});
		// KT.game.load.onLoadComplete.add(this.loadBootComplete);
		// Set some game settings
		KT.listSong = [
			{
				name: "PIANO",
				value: "Piano"
			},
			{
				name: "Faded Guitar",
				value: "faded"
			},
			{
				name: "GUITAR",
				value: "aman"
			},
			{
				name: "EDM",
				value: "EDM"
			},
			{
				name: "P&Y",
				value: "Violin"
			},
			{
				name: "BIG ROOM",
				value: "Bigroom"
			},
			{
				name: "A NEW DAWN",
				value: "ANewDawn"
			},
			{
				name: "A SIMPLE",
				value: "ASimple"
			},
			{
				name: "BEAUTIFULIGHT",
				value: "Beautiful_light"
			},
			{
				name: "BeethovenFurElise",
				value: "BeethovenFurElise"
			},
			{
				name: "BelieveInYourself",
				value: "BelieveInYourself"
			},
			{
				name: "EmotionalOrchestra7",
				value: "EmotionalOrchestra_BestAudio"
			},
			{
				name: "EnergyAction",
				value: "EnergyActionOpliftingPop"
			},
			{
				name: "Motivational",
				value: "MotivationalCorporatePiano_GorkemMusic"
			},
			{
				name: "NewYearMood",
				value: "NewYearMood_IvanLuzan"
			},
			{
				name: "Rush_Columnals",
				value: "Rush_Columnals"
			},
			{
				name: "TheDaysGoBy",
				value: "TheDaysGoBy_DanPhillipson"
			},
			{
				name: "TouchingAndIntimate",
				value: "TouchingAndIntimate_DPmusicStudio"
			},
			{
				name: "Uplifting",
				value: "UpliftingInspiringMoment_ElektorProject"
			}
		];

		// KT.game.state.start('load');
	},
	update: function () {
		if (KT.checkCallbackLogin) {
			KT.btnFB.destroy();
		}
	},
	loadBoot: function () {
		// KT.game.load.start();
	},
	loadBootComplete: function () {
		KT.game.state.start('load');
	}
};