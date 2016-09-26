(function (){
    function SongPlayer(Fixtures) {
        var SongPlayer = {};

        /*
        * @desc get, and store, the album information
        * @type {Obj}
        */
        var currentAlbum = Fixtures.getAlbum();

        /*
        * @desc buzz song starts at null
        * @type {Obj}
        */

        var currentBuzzObject = null;

         /*
         * @function setSong
         * @desc Starts first song or stop current song and starts a new one
         * @param {Obj} song
         */

        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            SongPlayer.currentSong = song;

        };

        /*
        * @function playSong
        * @desc Plays song
        * @param {Obj} song
        */

        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
        };

        /*
        *  @function stopSong
        *  @desc stops current song
        *  @param {Obj} song
        */

        var stopSong = function(){
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        };

        /*
        *  @function getSongIndex
        *  @desc get index of song
        *  @param {Obj} song
        */

        var getSongIndex = function(song){
            return currentAlbum.songs.indexOf(song);
        };

        /*
        * @desc current song starts as blank when nothing is playing
        * @type {Object}
        */
        SongPlayer.currentSong = null;
        /*
        *@function play
        * @desc plays song in song list
        * @param {Obj} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song){
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song){
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
         /*
        *@function pause
        * @desc pauses song in song list
        * @param {Obj} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        /*
        *@function previous
        * @desc changes to previous song in player bar
        */

        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0){
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        /*
        *@function next
        * @desc changes to next song in player bar
        */

        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            if (currentSongIndex > currentSongIndex.length) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();