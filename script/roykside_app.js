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

        seEtterAr: function() {
            ROYKSIDE_MODULE.seEtterAr();
        }, //--end seEtterAr

        fyllSirkel: function() {
            ROYKSIDE_MODULE.fyllSirkel();
        },//--end fyllSirkel

        fadeInArtikkel: function(){
            ROYKSIDE_MODULE.fadeInArtikkel();
        }//--end fadeInArtikkel

    }; //--end SLIDESHOWAPP

    $(function() {
        ROYKSIDE_APP.init();
    });

})();
