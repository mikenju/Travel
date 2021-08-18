angular.module("AdivahaCartrawler", ['elif', 'AdivahaCartrawler.directives']);
angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivaha_cartrawler_box'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['AdivahaCartrawler']);
    }
});
'use strict';
angular.module('AdivahaCartrawler.directives', []).directive('adivahaCartrawlerSearchBox', function() {
    return {
        controller: function($scope, $http) {
            var prefix = document.getElementById("adivaha_cartrawler_cars_").value;
            $scope.prefix = prefix;

            var xhr = null;
            $scope.getLocation_Hint_Cars_From = function(val) {
                var locale = document.getElementById("adh_language").value;
                var term = $scope.car_pickupName;
                return xhr = $http.get('//travelbeesapi.com/webServices/cars/api.php', {
                    params: {
                        action: 'getCarLocation',
                        locale: "en_US",
                        term: term
                    }
                }).then(function(response) {
                    if (JSON.stringify(response.data) != "[]") {
                        $scope.city_destinations = response.data.cities;
                        $scope.airports_destinations = response.data.airports;
                        $scope.showpopup1 = true;
                    } else {
                        $scope.showpopup1 = false;
                    }
                });
            };
            $scope.getLocation_Hint_Cars_TO = function(val) {
                var locale = document.getElementById("adh_language").value;
                var term = $scope.car_dropoffName;
                return xhr = $http.get('//travelbeesapi.com/webServices/cars/api.php', {
                    params: {
                        action: 'getCarLocation',
                        locale: "en_US",
                        term: term
                    }
                }).then(function(response) {
                    if (JSON.stringify(response.data) != "[]") {
                        $scope.city_destinations_drop = response.data.cities;
                        $scope.airports_destinations_drop = response.data.airports;
                        $scope.showpopup2 = true;
                    } else {
                        $scope.showpopup2 = false;
                    }
                });
            };
            $scope.Update_CarSearch_Field = function(regionid, latinFullName) {
                $scope.car_pickupName = latinFullName;
                $scope.car_pickupID = regionid;
                document.getElementById(prefix + "car_pickupName").value = latinFullName;
                document.getElementById(prefix + "car_pickupID").value = $scope.car_pickupID;
                $scope.showpopup1 = false;
            };
            $scope.Update_CarSearch_Field_Drop = function(regionid, latinFullName) {
                $scope.car_dropoffName = latinFullName;
                $scope.car_returnID = regionid;
                document.getElementById(prefix + "car_dropoffName").value = latinFullName;
                document.getElementById(prefix + "car_returnID").value = $scope.car_returnID;
                $scope.showpopup2 = false;
            };
            $scope.Search_cars = function() {



                if (jQuery('#adivaha_cartrawler_cars_car_pickupName').val() == '') {
                    alert("Please Enter Region Name");
                    return false;
                }

                /*
                if (jQuery('#adivaha_cartrawler_cars_car_dropoffName').val() == '') {alert("Please Enter To Destination");return false;}

                alert("hello");
                */

                if (document.getElementById("adivaha_cartrawler_cars_isoneway").value == "Yes") {
                    var car_dropoffName = $scope.car_pickupName;
                    var car_returnID = $scope.car_pickupID;

                } else {
                    var car_dropoffName = $scope.car_dropoffName;
                    var car_returnID = $scope.car_returnID;

                }

                var resultsPage = jQuery('#adivaha_site_url').val() + '/' + document.getElementById(prefix + "carResultspage").value;


                var url = resultsPage + "/?clientID=" + document.getElementById(prefix + "car_clientid").value + "&CT=MP&ln=" + document.getElementById("adh_language").value + "&pickupID=" + $scope.car_pickupID + "&pickupName=" + $scope.car_pickupName + "&returnID=" + car_returnID + "&returnName=" + car_dropoffName + "&pickupDateTime=" + document.getElementById(prefix + "departure_date").value + 'T' + document.getElementById("pickupTime").value + "&returnDateTime=" + document.getElementById(prefix + "return_date").value + 'T' + document.getElementById("returnTime").value + "&age=30&passNum=0&curr=" + document.getElementById("adh_currency").value + '&carGroupID=0&residenceID=&countryID=US&elID=631493726382224#/vehicles';
                location.href = url;
                jQuery(".inputadiPColor").addClass("clicked_btnloader");

                /*	alert (url);*/

            };


            jQuery(window).load(function() {
                var islandingpage = document.getElementById(prefix + 'islandingpage').value;
                if (islandingpage == 'yes') {
                    if (document.getElementById("adivaha_cartrawler_cars_isoneway").value == "Yes") {
                        var car_dropoffName = $scope.car_pickupName;
                        var car_returnID = $scope.car_pickupID;
                    } else {
                        var car_dropoffName = $scope.car_dropoffName;
                        var car_returnID = $scope.car_returnID;
                    }

                    var resultsPage = jQuery('#adivaha_site_url').val() + '/car-hire';
                    var url = resultsPage + "/?clientID=" + document.getElementById(prefix + "car_clientid").value + "&CT=MP&ln=" + document.getElementById("adh_language").value + "&pickupID=" + $scope.car_pickupID + "&pickupName=" + $scope.car_pickupName + "&returnID=" + car_returnID + "&returnName=" + car_dropoffName + "&pickupDateTime=" + document.getElementById(prefix + "departure_date").value + 'T' + document.getElementById("pickupTime").value + "&returnDateTime=" + document.getElementById(prefix + "return_date").value + 'T' + document.getElementById("returnTime").value + "&age=30&passNum=0&curr=" + document.getElementById("adh_currency").value + '&carGroupID=0&residenceID=&countryID=US&elID=631493726382224#/vehicles';

                    location.href = url;
                    jQuery(".inputadiPColor").addClass("clicked_btnloader");
                }
                setTimeout(function() {
                    jQuery(".inputadiPColor").removeClass("clicked_btnloader");
                }, 100);
            });

            $scope.car_pickupName = document.getElementById(prefix + "car_pickupName").value;
            $scope.car_pickupID = document.getElementById(prefix + "car_pickupID").value;
            $scope.car_dropoffName = document.getElementById(prefix + "car_dropoffName").value;
            $scope.car_returnID = document.getElementById(prefix + "car_returnID").value;
        },
        template: '<div class=" modifybtn"><a href="javascript:void(0)" class="modifyToggle"><i class="fa fa-search" aria-hidden="true"></i></a></div><div class="adiFullp tabpaneback searchBoxMobile" style=""><div class="' + document.getElementById('adimaxwidth').value + '"><ul class="adiFullp width' + document.getElementById('responsive_width').value + ' labelno' + document.getElementById('label_yes_and_no').value + ' siteL' + document.getElementById('adh_language').value + '">' +

            '<li class="adiFullWp-25 position-relative location_car">' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_pick_up').value + '</label> ' +
            '<input type="text" class="inputadiP" ng-model="car_pickupName" ng-change="getLocation_Hint_Cars_From(this, 1)" placeholder="Type in a location">' +
            '<div class="show-autocomplete-popup showhidepopup1{{showpopup1}}" autocomplete="off"> ' + '<a class="autocomplete-dropdown" ng-repeat="airports_destinations in airports_destinations track by $index" ng-click="Update_CarSearch_Field(airports_destinations.id,airports_destinations.latinFullName, \'picklocation\')">{{ airports_destinations.latinFullName }}</a> ' + '<a class="autocomplete-dropdown" ng-repeat="city_destinations in city_destinations track by $index" ng-click="Update_CarSearch_Field(city_destinations.id, city_destinations.latinFullName, \'droplocation\')">{{ city_destinations.latinFullName }} </a>' + '</div></li>' +

            '<li class="adiFullWp-25 position-relative location_car car_dropoffbox cardropActive"> ' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_drop_off').value + '</label> ' +

            '<input type="text" class="inputadiP adip-border car_dropoffInput" ng-model="car_dropoffName" ng-change="getLocation_Hint_Cars_TO(this, 2)" disabled="disabled" placeholder="Type in a location" >' +

            '<div class="show-autocomplete-popup showhidepopup2{{showpopup2}}"  > <a class="" ng-cloak ng-repeat="airports_destinations_drop in airports_destinations_drop track by $index" ng-click="Update_CarSearch_Field_Drop(airports_destinations_drop.id,airports_destinations_drop.latinFullName)">{{airports_destinations_drop.latinFullName}}</a><a class="" ng-cloak ng-repeat="city_destinations_drop in city_destinations_drop track by $index" ng-click="Update_CarSearch_Field_Drop(city_destinations_drop.id,city_destinations_drop.latinFullName)">{{city_destinations_drop.latinFullName}}</a></div></li>' +






            '<!--<li class="adiFullWp-7"> ' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_one_way').value + '</label>' +
            '<a href="" class="onewayu border-left-1 background-color-white " One_Round_Param="\'oneway\'"> ' + document.getElementById('txt_one_way').value + ' </a>' +
            '</li>' +


            '<li class="adiFullWp-7">' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_round_trip').value + '</label>' +
            '<a href="" class="round_tripu border-left-1 background-color-white " One_Round_Param="\'return\'"> ' + document.getElementById('txt_round_trip').value + '</a>' +
            '</li>-->' +


            '<li class="adiFullWp-12 calendar_ioncs"> <label class="label-onP nolabel labelColor">Pickup Date</label> <input type="text" class="inputadiP adip-border daterange" name="cardaterange1" id="{{prefix}}cardaterange1" value=""> </li>' + '<li class="adiFullWp-7 calendar_ioncs"> ' + '<div class="pickupTime_ioncs">' + '<label class="label-onP nolabel labelColor active">Time</label>' + '<select id="pickupTime" name="pickupTime" class="pickupTime">' + '<option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option><option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option><option value="06:00">06:00</option><option value="06:30">06:30</option><option value="07:00">07:00</option><option value="07:30">07:30</option><option value="08:00">08:00</option><option value="08:30">08:30</option><option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00" selected="selected">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option></select></div></li>' +


            '<li class="adiFullWp-12 calendar_ioncs"> <label class="label-onP nolabel labelColor">Return Date </label> <input type="text" class="inputadiP daterange adip-border" name="cardaterange2" id="{{prefix}}cardaterange2" value="" >' + '</li>' + '<li class="adiFullWp-7 calendar_ioncs"> ' + '<div class="pickupTime_ioncs">' + '<label class="label-onP nolabel labelColor active">Time</label>' + '<select id="returnTime" class="returnTime" >' + '<option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option><option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option><option value="06:00">06:00</option><option value="06:30">06:30</option><option value="07:00">07:00</option><option value="07:30">07:30</option><option value="08:00">08:00</option><option value="08:30">08:30</option><option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00" selected="selected">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option>' + '</select></div>' + '</li>' + '<li class="adiFullWp-11"> <label class="label-onP nolabel labelColor">&nbsp;</label> <input class="inputadiP inputadiPColor clickFuntalert" style="padding-left: 0px;" type="button" value="' + document.getElementById('txt_search').value + '"  ng-click="Search_cars()"></li></ul><div class="car_inptu_button">' +

            '<input type="checkbox" id="different_location_adivaha" name="different_location_adivaha" value="carYes"  >Return to a different location' +


            '</div></div></div><div class="tabpanebackinmg"></div><style>.tabpaneback{background-color:' + document.getElementById('color_wrapperbackground').value + ';padding-top:' + document.getElementById('paddingtop').value + ';padding-bottom:' + document.getElementById('paddingbottom').value + ';padding-left:' + document.getElementById('paddingleft').value + ';padding-right:' + document.getElementById('paddingright').value + '}.round_tripu a{}.onewayu_selected{background:' + document.getElementById('color_onewayselect').value + '}.labelColor{color:' + document.getElementById('color_labelcolor').value + '}.inputadiPColor{background-color:' + document.getElementById('color_filterbutton').value + '}.show-autocomplete-popup a:hover{background-color:' + document.getElementById('color_autocompletehover').value + '}</style>' + '<style>.radio_lable{ padding-left: 20px;position: relative;} .radio_lable input{position: absolute;left: 0px;}.pickupTime_ionc{}.pickupTime_ioncs select{width: 100%;height: 43px;border: 0px;border-left: 1px solid #ccc;padding-left: 25px;}.pickupTime_ioncs{position: relative;}.cardropActive{}.onewayu_selected{background:' + document.getElementById('color_onewayselect').value + '}@media (min-width:1024px) and (max-width:1199px){#tab-car{}#tab-car ul li:first-child{width:100%}#tab-car ul li:nth-child(3){width:100%;margin-bottom:0px}#tab-car .location_first1{background-position:1% 58%}#tab-car ul li input[type=text]{padding:12px 0px 12px 31px}.div_clol .nav-pills li:last-child{width:inherit !important}#tab-car .show-autocomplete-popup{width:100%}#ct-container .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content, .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content{padding:20px !important;border-radius:8px;background-color:rgba(0,0,0,0.7) !important}#ct-container h4, .ct-modal-container h4{font-size:20px !important;color:#fff !important}.ct-form label{margin-bottom:2px !important;font-size:14px !important;color:#fff;font-weight:100}#ct-container strong, .ct-modal-container strong{font-weight:300}#ct-container .ct-drop-down-container>input, .ct-modal-container .ct-drop-down-container>input{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-form-field .ct-input, .ct-form-field .ct-select{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-btn-p{border:0px solid #ddd;height:41px;width:100%}.ct-hybrid-grid .ct-grid{}.ct-margin-bottom .ct-grid-unit-6-16:first-child{width:100% !important}.ct-hybrid-grid .ct-grid .ct-shiftr-2{margin-left:0%;width:100%}.ct-grid{max-width:100%;min-width:100%}}@media only screen and (min-width:768px) and (max-width:1024px){#tab-car{}#tab-car ul li:first-child{width:100%}#tab-car ul li:nth-child(3){width:100%;margin-bottom:0px}#tab-car .location_first1{background-position:1% 58%}#tab-car ul li input[type=text]{padding:12px 0px 12px 31px}.div_clol .nav-pills li:last-child{width:inherit !important}#tab-car .show-autocomplete-popup{width:100%}#ct-container .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content, .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content{padding:20px !important;border-radius:8px;background-color:rgba(0,0,0,0.7) !important}#ct-container h4, .ct-modal-container h4{font-size:20px !important;color:#fff !important}.ct-form label{margin-bottom:2px !important;font-size:14px !important;color:#fff;font-weight:100}#ct-container strong, .ct-modal-container strong{font-weight:300}#ct-container .ct-drop-down-container>input, .ct-modal-container .ct-drop-down-container>input{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-form-field .ct-input, .ct-form-field .ct-select{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-btn-p{border:0px solid #ddd;height:41px;width:100%}.ct-hybrid-grid .ct-grid{}.ct-margin-bottom .ct-grid-unit-6-16:first-child{width:100% !important}.ct-hybrid-grid .ct-grid .ct-shiftr-2{margin-left:0%;width:100%}.ct-grid{max-width:100%;min-width:100%}}@media (max-width:767px){   .ct-navigation-header{display:none}.ct-navigation-header__total{}.ct-hybrid-grid .ct-grid .ct-grid-unit-4-16{width: 100% !important;float: left !important;}#ct-availability-list ct-vehicle-block{min-height:100% !important}.ct-grid-unit-4-16.ct-table-cell.ct-palette-w-bg-color.ct-height-inherit.ct-padding-top.ct-vehicle-block-has-button-bar{width:98.5%;float:left}.ct-hybrid-grid .ct-grid .ct-grid-unit-8-16{width:100%;display:inline-block !important;text-align:center}.ct-grid.ct-table.ct-height-max{display:inline-block;width:100%}.ct-vehicle-block-special-offers.ct-vehicle-block-special-offers-desktop{min-height:0px;margin-bottom:0px}#ct-container ct-vehicle-block ct-vehicle-block-features[layout="icons-simple"] .ct-list-ticks .ct-list-simple li, .ct-modal-container ct-vehicle-block ct-vehicle-block-features[layout="icons-simple"] .ct-list-ticks .ct-list-simple li{text-align:left;font-size:15px}.ct-table-cell.ct-table-align-top{text-align:left;background: #fff;}#ct-container li, .ct-modal-container li{padding-bottom:1em}#ct-container strong, .ct-modal-container strong{font-size:15px;margin-bottom:14px;display:inline-block}#ct-container .ct-total-price, .ct-modal-container .ct-total-price{font-size: 17px;}.ct-padding-large.ct-no-padding-bottom.ct-vehicle-block-header{height:inherit !important}#ct-container .ct-navigation-arrows .ct-navigation-arrows_item, .ct-modal-container .ct-navigation-arrows .ct-navigation-arrows_item{font-size:10px !important}[ct-app] .ct-availability-filter-modal-visible.ct-context-content{padding:0px 28px 0px 0px;top:0px;left:0px;right:0px;height:100%;background-color:rgb(0,0,0, 0.7)}[ct-app] .ct-availability-filter-modal-visible.ct-context-content .ct-modal-dialog-close{top:7px;right:7px}.ct-margin-large-top{margin-top:0px !important}#ct-container .ct-filter__table__tablecell, .ct-modal-container .ct-filter__table__tablecell{float:left}#ct-container .ct-filter__table, .ct-modal-container .ct-filter__table{display:inline-block}.#ct-container .ct-table-cell{display: inline-block !important;}}@media (max-width:480px){.ct-hybrid-grid .ct-grid .ct-grid-unit-5-16 {width: 100%!important;float: left;}.ct-hybrid-grid .ct-grid .ct-grid-unit-10-16,.ct-hybrid-grid .ct-grid .ct-grid-unit-6-16,.ct-hybrid-grid .ct-grid .ct-grid-unit-4-16 {width: 100% !important;float: left;}#ct-container .ct-navigation-arrows .ct-navigation-arrows_item{width:100% !important;margin-bottom:10px !important;font-size:15px !important}.ct-navigation-arrows li.ct-active:after, .ct-navigation-arrows .ct-navigation-arrows_item.ct-active:after{border:0px}.ct-navigation-arrows li:before, .ct-navigation-arrows .ct-navigation-arrows_item:before{border:0px}.ct-navigation-arrows li:before, .ct-navigation-arrows .ct-navigation-arrows_item:before{border:0px}#ct-container .ct-body-content, .ct-modal-container .ct-body-content{float:left;width:100% !important}#ct-container .ct-filter__table__tablecell__4-16, .ct-modal-container .ct-filter__table__tablecell__4-16{width:100% !important}#ct-container .ct-filter__table, .ct-modal-container .ct-filter__table{display:inline-block;border-radius:0px}.#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper.ct-bundles-1-cols{width: 100% !important;}.ct-hybrid-grid .ct-grid .ct-shiftr-1:first-child{    margin-left: 0% !important;}.ct-hybrid-grid .ct-grid .ct-grid-unit-14-16,.ct-hybrid-grid .ct-grid .ct-grid-unit-12-16,#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper.ct-bundles-1-cols,#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper .ct-bundle-wrapper .ct-bundle,#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper .ct-bundle-wrapper{    width: 100%;}.ct-hybrid-grid .ct-grid .ct-shiftr-2:first-child,[class^="ct-grid-unit"]{    margin-left: 0%;}.ct-text-center {text-align: left;}} .car_inptu_button{font-size: 14px;color: #fff;float: left;width: 100%;padding-top: 8px;} .car_inptu_button input{margin-right: 7px;} select[disabled] { background-color: #ccc; }</style>' +
            '<style>.adiFullWp-25 {width: 25%;}.adiFullWp-12 {width: 12%;}.adiFullWp-7 {width: 7%;}.adiFullWp-11 {width: 11%;}.car_inptu_button {font-size: 14px;color: #fff;float: left;width: 100%;padding-top: 8px;}[ct-app].ct-app-ready {}[ct-app]>[ng-view]>div{padding: 0px !important;}.ct-grid{max-width: 1200px!important;}#svg,.ct-interstitial{display:none!important;}</style>'
    };
});

jQuery(document).ready(function() {
    jQuery(function() {
        var language = document.getElementById("adh_language").value;
        var prefix = jQuery('#adivaha_cartrawler_cars_').val();
        if (language == 'ar') {
            var daysOfWeek = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
            var monthNames = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونية', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
            var opens = 'left';
            var direction = 'rtl';
        } else {
            var daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
            var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var opens = 'right';
            var direction = 'ltr';
        }
        var today_Date = new moment(document.getElementById(prefix + "departure_date").value);
        var nextDayDate = new moment(document.getElementById(prefix + "return_date").value);
        jQuery("#" + prefix + "cardaterange1").daterangepicker({
            "singleDatePicker": true,
            startDate: today_Date,
            endDate: nextDayDate,
            minDate: today_Date,
            opens: 'right',
            autoclose: true,
            locale: {
                format: 'DD-MMM-YYYY',
                direction: direction,
                daysOfWeek: daysOfWeek,
                monthNames: monthNames,
                firstDay: 1
            }
        }, function(start, end, label) {
            jQuery("#" + prefix + "departure_date").val(start.format('YYYY-MM-DD'));
            jQuery("#" + prefix + "return_date").val(end.format('YYYY-MM-DD'));
            jQuery("#" + prefix + "cardaterange2").data('daterangepicker').minDate = jQuery("#" + prefix + "cardaterange1").data('daterangepicker').startDate;
            jQuery("#" + prefix + "cardaterange2").data('minDate').startDate = jQuery("#" + prefix + "cardaterange1").data('daterangepicker').startDate;
            jQuery("#" + prefix + "cardaterange2").val(jQuery("#" + prefix + "cardaterange1").data('daterangepicker').startDate.format('DD-MM-YYYY'));
        });
        jQuery("#" + prefix + "cardaterange2").daterangepicker({
            "singleDatePicker": true,
            startDate: nextDayDate,
            endDate: nextDayDate,
            minDate: nextDayDate,
            opens: 'right',
            autoclose: true,
            locale: {
                format: 'DD-MMM-YYYY',
                direction: direction,
                daysOfWeek: daysOfWeek,
                monthNames: monthNames,
                firstDay: 1
            }
        }, function(start, end, label) {
            jQuery("#" + prefix + "cardaterange2").val(start.format('YYYY-MM-DD'));
            jQuery("#" + prefix + "cardaterange2").val(end.format('YYYY-MM-DD'));
            jQuery("#" + prefix + "return_date").val(end.format('YYYY-MM-DD'));
        }); /*ByDefault Selected*/

        /* new code add by mk */
        var value_po = document.getElementById("adivaha_cartrawler_cars_car_pickupID").value;
        var value_po1 = document.getElementById("adivaha_cartrawler_cars_car_returnID").value;


        if (value_po == value_po1) {
            /*alert("oneway");*/
            /*jQuery("#different_location_adivaha").prop("checked", false);*/
        } else {
            jQuery('.car_dropoffInput').removeAttr('disabled');
            jQuery('#adivaha_cartrawler_cars_cardaterange2').removeAttr('disabled');
            jQuery('.returnTime').removeAttr('disabled');
            jQuery("#different_location_adivaha").prop("checked", true);
            /*alert("twoway");*/
        }






        var ckbox = jQuery('#different_location_adivaha');
        jQuery('#different_location_adivaha').on('click', function() {
            if (ckbox.is(':checked')) {

                jQuery('.car_dropoffInput').removeAttr('disabled');
                /*jQuery('#adivaha_cartrawler_cars_cardaterange2').removeAttr('disabled');
                jQuery('.returnTime').removeAttr('disabled');*/
                jQuery('#adivaha_cartrawler_cars_isoneway').val('No');
                /* alert('You have Checked it one way ');*/
            } else {
                jQuery('.car_dropoffInput').attr('disabled', 'disabled');
                /*jQuery('#adivaha_cartrawler_cars_cardaterange2').attr('disabled', 'disabled');
                jQuery('.returnTime').attr('disabled', 'disabled');*/
                jQuery("#adivaha_cartrawler_cars_isoneway").val('Yes');

                /*    alert('You Un-Checked it two way');*/
            }
        });



        /* end new code add by mk */

    });
});