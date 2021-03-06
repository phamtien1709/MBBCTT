// Initialise Phaser
var width;
// if(screen.width>478){
//     width = 478;
// }else{
    width = screen.width
// }
var KT = {};
// configs
// Define our 'global' variable
KT.configs = {
    GAME_WIDTH: width,
    GAME_HEIGHT: width/9*16,
    GAME_TIME_TO_OVERLAP: 180,
    DISTANCE_GENERATE_LARGE: 100,
    DISTANCE_GENERATE_MEDIUM: 40,
    DISTANCE_GENERATE_SMALL: 10,
    DISTANCE_GENERATE_VERYSMALL: 5,
    TIMEOUT : false,
    HEIGHT_TOOL: 430,
    RATE_SPEED: 0.25
};
window.onload = function () {
    KT.game = new Phaser.Game(1080, 1920, Phaser.CANVAS, '', null, false, false);
    // Add all the states
    KT.game.state.add('boot', bootState);
    KT.game.state.add('load', loadState);
    KT.game.state.add('menu', menuState);
    KT.game.state.add('play', playState);
    KT.game.state.add('test', testState);
    KT.game.state.add('win', winState);
    // Start the 'boot' state
    KT.game.state.start('boot');
}
// preparations before game starts
var preload = function () {
    KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    KT.game.scale.pageAlignHorizontally = true;
    KT.game.time.advancedTiming = true;
    KT.game.stage.disableVisibilityChange = true;
}
