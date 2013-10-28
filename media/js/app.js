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
        var $target = $(e.target);
        $target = $target.add($target.parent('a'));

        $('audio').each(function(i, audio) {
            // Stop all other sounds.
            console.log(audio);
            audio.pause();
            audio.currentTime = 0;
        });
        $target.find('audio')[0].play();

        // Click animation
        $target.addClass('clicked');
        setTimeout(function() {
            $target.removeClass('clicked');
        }, 200);
    }
}]);
