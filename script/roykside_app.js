(function() {
    var ROYKSIDE_APP = {
        //HTML-objekter


        //init-funksjoner
        init: function() {
            var RA = ROYKSIDE_APP;

            var setElements = function() {

            }();

            var setEvents = function() {
                RA.seEtterAr();
                RA.leggTilId();
                RA.endreInfoBoks();
                RA.fyllSirkel();
                RA.fadeInArtikkel();
            }();

        }, //--end init

        //Bruker endreInfoBoks funksjonen fra modulen
        endreInfoBoks: function() {
            ROYKSIDE_MODULE.endreInfoBoks();

        }, //--end endreInfoBoks

        //Bruker leggTilId funksjonen fra modulen
        leggTilId: function() {
            ROYKSIDE_MODULE.leggTilId();
        }, //--end leggTilId

        //Fyller inn sirklene til året du klikket på
        seEtterAr: function() {
            ROYKSIDE_MODULE.seEtterAr();
        }, //--end seEtterAr

        //fyller inn sirkler med farger
        fyllSirkel: function() {
            ROYKSIDE_MODULE.fyllSirkel();
        },//--end fyllSirkel

        //fader inn artikler fra bunnen av
        fadeInArtikkel: function(){
            ROYKSIDE_MODULE.fadeInArtikkel();
        }//--end fadeInArtikkel

    }; //--end SLIDESHOWAPP

    $(function() {
        ROYKSIDE_APP.init();
    });

})();
