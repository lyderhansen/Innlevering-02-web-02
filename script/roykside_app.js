(function() {
    var ROYKSIDE_APP = {
        //HTML-objekter
        $sirkel1: null,
        $liste: null,

        //init-funksjoner
        init: function() {
            var RA = ROYKSIDE_APP;

            var setElements = function() {
                RA.$sirkel1 = $(".sirkel1");
                RA.$liste = $(".arButton")
            }();

            var setEvents = function() {
<<<<<<< HEAD


                RA.seEtterAr();
                RA.leggTilId();
                RA.endreInfoBoks();
=======
                RA.$sirkel1.click(RA.endreInfoBoks);
                RA.$liste.click(RA.seEtterAr)
                $(document).ready(RA.leggTilId);
>>>>>>> b21eb2666aa302032e542ab6238cf057e9fea364

            }();

        }, //--end init

        //Bruker endreInfoBoks funksjonen fra modulen
        endreInfoBoks: function() {
            ROYKSIDE_MODULE.endreInfoBoks();
<<<<<<< HEAD


=======
>>>>>>> b21eb2666aa302032e542ab6238cf057e9fea364
        }, //--end endreInfoBoks

        //Bruker leggTilId funksjonen fra modulen
        leggTilId: function() {
            ROYKSIDE_MODULE.leggTilId();
        }, //--end leggTilId

        seEtterAr: function(){
            ROYKSIDE_MODULE.seEtterAr();
        } //--end seEtterAr

    }; //--end SLIDESHOWAPP

    $(function() {
        ROYKSIDE_APP.init();
    });

})();
