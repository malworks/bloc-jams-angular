(function() {
    function Fixtures() {
        var Fixtures = {};

        var albumPicasso = {
			title: "The Colors",
			artist: "Pablo Picasso",
			label: "Cubism",
			year: "1881",
			albumArtUrl: "/assets/images/album_covers/01.png",
			songs: [
				{ title: "Blue", duration: 161.68, audioUrl: '/assets/music/picasso/blue' },
				{ title: "Green", duration: 103.93, audioUrl: '/assets/music/picasso/green' },
				{ title: "Red", duration: 268.42, audioUrl: '/assets/music/picasso/red' },
				{ title: "Pink", duration: 153.11, audioUrl: '/assets/music/picasso/pink' },
				{ title: "Magenta", duration: 374.18, audioUrl: '/assets/music/picasso/magenta' }
			]
		};

		var albumMarconi = {
			title: "The Telephone",
			artist: "Guglielmo Marconi",
			label: "EM",
			year: "1909",
			albumArtUrl: "/assets/images/album_covers/02.png",
			songs: [
				{ title: "Hello, Operator?", duration: "1:01" },
		        { title: "Ring, ring, ring", duration: "5:01" },
		        { title: "Fits in your pocket", duration: "3:21" },
		        { title: "Can you hear me now?", duration: "3:14" },
		        { title: "Wrong phone number", duration: "2:15"}
		    ]
		};

		var albumDuchamp = {
			title: "Fountain",
			artist: "Marcel Duchamp",
			label: "Dada",
			year: "1887",
			albumArtUrl: "assets/images/album_covers/03.png",
			songs: [
				{ title: "Waterways", duration: "3:01" },
		        { title: "Don't throw Quarters", duration: "5:21" },
		        { title: "Liquid Blue", duration: "2:01"},
		        { title: "Fontaine", duration: "4:54" },
		        { title: "Eau", duration: "2:25"}
		     ]
		};

        Fixtures.getAlbum = function() {
            return albumPicasso;  
        };
        
        Fixtures.getCollection = function(numberOfAlbums) {
            var albums = [];
            for (var i = 0; i < numberOfAlbums; i++){
                albums.push(albumPicasso);
            }
            return albums;
        };
        
        return Fixtures;
    }
    
    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();

