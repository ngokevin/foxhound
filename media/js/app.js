angular.module('FoxApp', ['ngTouch'])


.controller('MainCtrl', ['$scope', function($scope) {
    $scope.sounds = [
        // Name, file name.
        ['Fox Say', 'foxsay'],
        ['Gering-ding-ding', 'ding'],
        ['Wa-pow', 'wapow'],
        ['Hatee-ho', 'hatee'],
        ['Joff-tchoff', 'joff'],
        ['Ja-cha-cha', 'jacha'],
        ['Frakak-ka', 'frak'],
        ['Ahee-ahee', 'ahee'],
        ['Aoo-oo-oo', 'aoo'],
        ['Bo-bop-bay-dum', 'bop'],

        ['Dog', 'dog'],
        ['Cat', 'cat'],
        ['Bird', 'bird'],
        ['Mouse', 'mouse'],
        ['Cow', 'cow'],
        ['Frog', 'frog'],
        ['Elephant', 'elephant'],
        ['Duck', 'duck'],
        ['Fish', 'fish'],
        ['Seal', 'seal'],
    ];
    $scope.play = function(e) {
        $('audio').each(function(i, audio) {
            // Stop all other sounds.
            audio.pause();
            audio.currentTime = 0;
        });
        $(e.target).find('audio, + audio')[0].play();
    }
}]);
