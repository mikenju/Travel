angular.module("adivahaCartransfer", ['elif', 'adivahaCartransfer.directives']);
angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivaha_cartransfer_box'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['adivahaCartransfer']);
    }
});
'use strict';
angular.module('adivahaCartransfer.directives', []).directive('adivahaCartransferSearchBox', function() {
    return {
        controller: function($scope, $http) {
            var prefix = document.getElementById("adivaha_transfer_cars_").value;
            $scope.prefix = prefix;
            var mid = jQuery('#adivaha_transfer_cars_mid').val();


            var forResize = document.getElementById('adivaha_transfer_cars_forResize').value;
            /*if(forResize=='Yes'){
			
				setInterval(function(){ 
				iframesizeincreasers1 = 0;				 
				iframesizeincreasers1 = parseInt(angular.element(".autocomplete_transfer1")[0].offsetHeight);
				if(iframesizeincreasers1 > 0){
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers1 + 150)+"px";
				}else{
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers1 + 150)+"px";
				}
			
				iframesizeincreasers2 = 0;
				iframesizeincreasers2 = parseInt(angular.element(".autocomplete_transfer2")[0].offsetHeight);
				if(iframesizeincreasers2 > 0){
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers2 + 150)+"px";
				}else{
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers1 + 150)+"px";
				}
				
				iframesizeincreasers3 = 0;
				if(iframesizeincreasers3 > 0){
					document.getElementById("adivaha_cartrawler_cars_adults").style.height = (iframesizeincreasers3 + 150)+"px";
				}
				
				
			
				if (jQuery(window).width() < 1024){
					
					
						iframesizeincreasers1 = 0;				 
				iframesizeincreasers1 = parseInt(angular.element(".autocomplete_transfer1")[0].offsetHeight);
				if(iframesizeincreasers1 > 0){
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers1 + 300)+"px";
				}else{
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers1 + 0)+"px";
				}
				
				iframesizeincreasers2 = 0;
				iframesizeincreasers2 = parseInt(angular.element(".autocomplete_transfer2")[0].offsetHeight);
				if(iframesizeincreasers2 > 0){
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers2 + 350)+"px";
				}else{
					document.getElementById("iframesize_manager_adivaha_transfer_cars").style.height = (iframesizeincreasers1 + 0)+"px";
				}
				
				
				
					
				}
				
				
				
				
			}, 10);
			
		
			
			}*/







            var xhr = null;
            $scope.getLocation_Hint_Cars_From = function(val) {
                var locale = document.getElementById("adh_language").value;
                var term = $scope.car_pickupName;
                return xhr = $http.get('https://otageo.cartrawler.com/cartrawlerota/json?msg=%7B%22@Target%22:%22Production%22,%22@PrimaryLangID%22:%22en%22,%22POS%22:%7B%22Source%22:%5B%7B%22@ERSP_UserID%22:%22MP%22,%22@ISOCurrency%22:%22inr%22,%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22' + document.getElementById(prefix + "car_clientid").value + '%22,%22@ID_Context%22:%22CARTRAWLER%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22831601563462337%22,%22@ID_Context%22:%22CUSTOMERID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22831601563462337%22,%22@ID_Context%22:%22ENGINELOADID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22868345%22,%22@ID_Context%22:%22PRIORID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%223%22,%22@ID_Context%22:%22BROWSERTYPE%22%7D%7D%5D%7D,%22@xmlns%22:%22http:%2F%2Fwww.cartrawler.com%2F%22,%22@Version%22:%221.000%22,%22VehLocSearchCriterion%22:%7B%22@ExactMatch%22:%22true%22,%22@ImportanceType%22:%22Mandatory%22,%22PartialText%22:%7B%22@Sort%22:%221%22,%22@Size%22:30,%22@POITypes%22:%221,3,8%22,%22%23text%22:%22' + term + '%22%7D%7D,%22Window%22:%7B%22@name%22:%22Airport%2520Transfers%2520%257C%2520Holiday%2520Autos%22,%22@engine%22:%22CTGT-V1.4%22,%22@svn%22:%221.40.15%22,%22@region%22:%22en%22,%22UserAgent%22:%22Mozilla%2F5.0+(X11;+Linux+x86_64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F85.0.4183.121+Safari%2F537.36%22,%22BrowserName%22:%22chrome%22,%22BrowserVersion%22:%2285%22,%22URL%22:%22https:%2F%2Fwww.holidayautos.com%2Fen%2Ftransfers%22%7D%7D&type=CT_VehLocSearchRQ', {}).then(function(data) {

                    var response = JSON.stringify(data).replace(/@/g, '');
                    var response = JSON.parse(response);
                    if (JSON.stringify(response.data) != "[]") {
                        $scope.airports_destinations = response.data.VehMatchedLocs.LocationDetail;
                        $scope.showpopup1 = true;
                    } else {
                        $scope.showpopup1 = false;
                    }
                });
            };
            $scope.getLocation_Hint_Cars_TO = function(val) {
                var locale = document.getElementById("adh_language").value;
                var term = $scope.car_dropoffName;
                return xhr = $http.get('https://otageo.cartrawler.com/cartrawlerota/json?msg=%7B%22@Target%22:%22Production%22,%22@PrimaryLangID%22:%22en%22,%22POS%22:%7B%22Source%22:%5B%7B%22@ERSP_UserID%22:%22MP%22,%22@ISOCurrency%22:%22inr%22,%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22' + document.getElementById(prefix + "car_clientid").value + '%22,%22@ID_Context%22:%22CARTRAWLER%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22831601563462337%22,%22@ID_Context%22:%22CUSTOMERID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22831601563462337%22,%22@ID_Context%22:%22ENGINELOADID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22868345%22,%22@ID_Context%22:%22PRIORID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%223%22,%22@ID_Context%22:%22BROWSERTYPE%22%7D%7D%5D%7D,%22@xmlns%22:%22http:%2F%2Fwww.cartrawler.com%2F%22,%22@Version%22:%221.000%22,%22VehLocSearchCriterion%22:%7B%22@ExactMatch%22:%22true%22,%22@ImportanceType%22:%22Mandatory%22,%22PartialText%22:%7B%22@Sort%22:%221%22,%22@Size%22:30,%22@POITypes%22:%221,3,8%22,%22%23text%22:%22' + term + '%22%7D%7D,%22Window%22:%7B%22@name%22:%22Airport%2520Transfers%2520%257C%2520Holiday%2520Autos%22,%22@engine%22:%22CTGT-V1.4%22,%22@svn%22:%221.40.15%22,%22@region%22:%22en%22,%22UserAgent%22:%22Mozilla%2F5.0+(X11;+Linux+x86_64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F85.0.4183.121+Safari%2F537.36%22,%22BrowserName%22:%22chrome%22,%22BrowserVersion%22:%2285%22,%22URL%22:%22https:%2F%2Fwww.holidayautos.com%2Fen%2Ftransfers%22%7D%7D&type=CT_VehLocSearchRQ', {}).then(function(data) {

                    var response = JSON.stringify(data).replace(/@/g, '');
                    var response = JSON.parse(response);
                    if (JSON.stringify(response.data) != "[]") {
                        $scope.airports_destinations_drop = response.data.VehMatchedLocs.LocationDetail;
                        $scope.showpopup2 = true;
                    } else {
                        $scope.showpopup2 = false;
                    }
                });
            };
            $scope.pkLat = '';
            $scope.pkLng = '';
            $scope.rtLat = '';
            $scope.rtLng = '';

            function setLocationGeoId(ExternalLocId, dest) {
                return xhr = $http.get('https://otageo.cartrawler.com/cartrawlerota/json?msg=%7B%22@Target%22:%22Production%22,%22@PrimaryLangID%22:%22en%22,%22POS%22:%7B%22Source%22:%5B%7B%22@ERSP_UserID%22:%22AJ%22,%22@ISOCurrency%22:%22EUR%22,%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22' + document.getElementById(prefix + "car_clientid").value + '%22,%22@ID_Context%22:%22CARTRAWLER%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%221031594824175211%22,%22@ID_Context%22:%22CUSTOMERID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%221031594824175211%22,%22@ID_Context%22:%22ENGINELOADID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%22' + document.getElementById(prefix + "car_clientid").value + '%22,%22@ID_Context%22:%22PRIORID%22%7D%7D,%7B%22RequestorID%22:%7B%22@Type%22:%2216%22,%22@ID%22:%223%22,%22@ID_Context%22:%22BROWSERTYPE%22%7D%7D%5D%7D,%22@xmlns%22:%22http:%2F%2Fwww.cartrawler.com%2F%22,%22@Version%22:%221.000%22,%22Action%22:%7B%22@Utility%22:%22DecodeGoogleId%22,%22Value%22:%22' + ExternalLocId + '%22%7D,%22Window%22:%7B%22@name%22:%22Book%2520Airport%2520Transfers%2520%2526%2520Taxi%2520Services%2520Worldwide%2520%257C%2520Booking%2520Deals%22,%22@engine%22:%22CTGT-V1.4%22,%22@svn%22:%221.40.11%22,%22@region%22:%22en%22,%22UserAgent%22:%22Mozilla%2F5.0+(X11;+Linux+x86_64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F84.0.4147.89+Safari%2F537.36%22,%22BrowserName%22:%22chrome%22,%22BrowserVersion%22:%2284%22,%22URL%22:%22https:%2F%2Ftraveltalez.com%2Fen%2Ftransfers%2F%22%7D%7D&type=CT_UtilRQ', {}).then(function(response) {
                    if (dest == 'from') {
                        $scope.pkLat = response.data.Result.Lat;
                        $scope.pkLng = response.data.Result.Lng;
                        $scope.countryID = response.data.Result.Country;
                    } else {
                        $scope.rtLat = response.data.Result.Lat;
                        $scope.rtLng = response.data.Result.Lng;
                    }

                });
            }

            $scope.Update_CarSearch_Field = function(regionid, latinFullName, countryID, lat, lng, ExternalLocId) {
                $scope.car_pickupName = latinFullName;
                $scope.countryID = countryID;
                $scope.pkLat = lat;
                $scope.pkLng = lng;

                $scope.car_pickupID = regionid;
                if ($scope.pkLat == 0.0 && $scope.pkLng == 0.0) {
                    setLocationGeoId(ExternalLocId, 'from');
                }

                document.getElementById(prefix + "car_pickupName").value = latinFullName;
                document.getElementById(prefix + "car_pickupID").value = $scope.car_pickupID;
                $scope.showpopup1 = false;
            };
            $scope.Update_CarSearch_Field_Drop = function(regionid, latinFullName, lat, lng, ExternalLocId) {
                $scope.car_dropoffName = latinFullName;
                $scope.car_returnID = regionid;
                $scope.rtLat = lat;
                $scope.rtLng = lng;
                if ($scope.rtLat == 0.0 && $scope.rtLng == 0.0) {
                    setLocationGeoId(ExternalLocId, 'to');
                }

                document.getElementById(prefix + "car_dropoffName").value = latinFullName;
                document.getElementById(prefix + "car_returnID").value = $scope.car_returnID;
                $scope.showpopup2 = false;
            };
            $scope.Search_cars = function() {



                if (jQuery('#adivaha_transfer_cars_car_pickupName').val() == '') {
                    alert("Please Enter Region Name");
                    return false;
                }
                if (jQuery('#adivaha_transfer_cars_car_dropoffName').val() == '') {
                    alert("Please Enter Region Name");
                    return false;
                }

                /*
                if (jQuery('#adivaha_cartrawler_cars_car_dropoffName').val() == '') {alert("Please Enter To Destination");return false;}

                alert("hello");
                */

                if (document.getElementById("adivaha_transfer_cars_isoneway").value == "Yes") {
                    var oneway = 'true'
                } else {
                    var oneway = 'false'
                }

                if ($scope.pkLat != 0.0 && $scope.pkLng != 0.0) {
                    var pickupid = '&pkLat=' + $scope.pkLat + '&pkLng=' + $scope.pkLng
                } else {
                    var pickupid = '&pickupID=' + $scope.car_pickupID
                }

                if ($scope.rtLat != 0.0 && $scope.rtLng != 0.0) {
                    var returnid = '&rtLat=' + $scope.rtLat + '&rtLng=' + $scope.rtLng
                } else {
                    var returnid = '&pickupID=' + $scope.car_returnID
                }

                var car_dropoffName = $scope.car_dropoffName;
                var car_returnID = $scope.car_returnID;
                var countryID = $scope.countryID;
                //var resultsPage = jQuery('#adivaha_site_url').val() +'/' + document.getElementById("adh_language").value+'/car-transfer-search-result';

                var resultsPage = document.getElementById(prefix + "carResultspage").value;
                var url = resultsPage + "?mid=" + mid + "&mt=result&clientID=" + document.getElementById(prefix + "car_clientid").value + "&CT=MP&ln=" + document.getElementById("adh_language").value + pickupid + "&pickupName=" + $scope.car_pickupName + returnid + "&returnName=" + car_dropoffName + "&pickupDateTime=" + document.getElementById(prefix + "departure_date").value + 'T' + document.getElementById("pickupTime").value + "&returnDateTime=" + document.getElementById(prefix + "return_date").value + 'T' + document.getElementById("returnTime").value + "&oneway=" + oneway + "&passengersAges=30&&elID=1031594824175211&ELID=1031594824175211&curr=" + document.getElementById("adh_currency").value + "&carGroupID=0&residenceID=" + countryID + "&countryID=" + countryID + "&PUF=1&DOF=1&PUR=0&DOR=0#/vehicles";
                top.location.href = url;
                jQuery(".inputadiPColor").addClass("clicked_btnloader");



            };


            /*   jQuery(window).load(function() {
                var islandingpage = document.getElementById(prefix + 'islandingpage').value;
                if (islandingpage == 'yes') {
                  
                        var car_dropoffName = $scope.car_dropoffName;
                        var car_returnID = $scope.car_returnID;
                    
 					
					var resultsPage = jQuery('#adivaha_site_url').val() + '/car-hire';
                    var url = resultsPage + "/?clientID=" + document.getElementById(prefix + "car_clientid").value + "&CT=MP&ln=" + document.getElementById("adh_language").value + "&pickupID=" + $scope.car_pickupID + "&pickupName=" + $scope.car_pickupName + "&returnID=" + car_returnID + "&returnName=" + car_dropoffName + "&pickupDateTime=" + document.getElementById(prefix + "departure_date").value + 'T' + document.getElementById("pickupTime").value + "&returnDateTime=" + document.getElementById(prefix + "return_date").value + 'T' + document.getElementById("returnTime").value + "&passengersAges=30&curr=" + document.getElementById("adh_currency").value + '&carGroupID=0&residenceID='+$scope.countryID+'&countryID='+$scope.countryID+'&PUF=1&DOF=1&PUR=0&DOR=0#/vehicles'; 
					
                    location.href = url;
                    jQuery(".inputadiPColor").addClass("clicked_btnloader");					  
                }
                setTimeout(function() {
                    jQuery(".inputadiPColor").removeClass("clicked_btnloader");
                }, 100);
            });*/

            $scope.car_pickupName = document.getElementById(prefix + "car_pickupName").value;
            $scope.car_pickupID = document.getElementById(prefix + "car_pickupID").value;
            $scope.car_dropoffName = document.getElementById(prefix + "car_dropoffName").value;
            $scope.car_returnID = document.getElementById(prefix + "car_returnID").value;
            $scope.isoneway = document.getElementById(prefix + "isoneway").value;
            $scope.pkLat = document.getElementById(prefix + "pkLat").value;
            $scope.pkLng = document.getElementById(prefix + "pkLng").value;
            $scope.rtLat = document.getElementById(prefix + "rtLat").value;
            $scope.rtLng = document.getElementById(prefix + "rtLng").value;
            $scope.countryID = document.getElementById(prefix + "countryID").value;
            /*
			setTimeout(function() {
                  jQuery("#"+$scope.prefix+"car_pickupName22").val(document.getElementById(prefix + "car_pickupName").value);
				   jQuery("#"+$scope.prefix+"car_dropoffInput22").val($scope.car_dropoffName);
				   	 $scope.departure_date = jQuery("#"+$scope.prefix+"departure_date").val();
				     $scope.return_date = jQuery("#"+$scope.prefix+"return_date").val();
				  
                }, 100);
			*/
            var interval = setInterval(function() {
                if (jQuery(".ct-panel").length) {
                    clearInterval(interval);
                    // Do stuff
                    jQuery("#" + $scope.prefix + "car_pickupName22").val(document.getElementById(prefix + "car_pickupName").value);
                    jQuery("#" + $scope.prefix + "car_dropoffInput22").val($scope.car_dropoffName);
                    $scope.departure_date = jQuery("#" + $scope.prefix + "departure_date").val();
                    $scope.return_date = jQuery("#" + $scope.prefix + "return_date").val();
                }
            }, 10);



        },
        template: '<div class=" modifybtn"><a href="javascript:void(0)" class="modifyToggle"><i class="fa fa-search" aria-hidden="true"></i></a></div><div class="adiFullp tabpaneback searchBoxMobile" style=""><div class="' + document.getElementById('adimaxwidth').value + '"><ul class="adiFullp width' + document.getElementById('responsive_width').value + ' labelno' + document.getElementById('label_yes_and_no').value + ' siteL' + document.getElementById('adh_language').value + '">' +

            '<li class="adiFullWp-25 position-relative location_car">' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_pick_up').value + '</label> ' +



            '<input type="text" class="inputadiP" ng-model="car_pickupName" autocomplete="off" id="{{prefix}}car_pickupName22" value="{{car_pickupName}}" ng-change="getLocation_Hint_Cars_From(this, 1)" placeholder="Type in a location">' +
            '<div class="show-autocomplete-popup showhidepopup1{{showpopup1}} autocomplete_transfer1" autocomplete="off"> ' + '<a class="autocomplete-dropdown" ng-repeat="airports_destinations in airports_destinations track by $index" ng-click="Update_CarSearch_Field(airports_destinations.Code,airports_destinations.Name,airports_destinations.CountryCode,airports_destinations.Lat,airports_destinations.Lng,airports_destinations.ExternalLocId, \'picklocation\')">{{ airports_destinations.Name }}</a> ' + '<a class="autocomplete-dropdown" ng-repeat="city_destinations in city_destinations track by $index" ng-click="Update_CarSearch_Field(city_destinations.Code, city_destinations.Name,city_destinations.CountryCode,city_destinations.Lat,city_destinations.Lng,city_destinations.ExternalLocId, \'droplocation\')">{{ city_destinations.Name }} </a>' + '</div></li>' +

            '<li class="adiFullWp-25 position-relative location_car car_dropoffbox cardropActive"> ' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_drop_off').value + '</label> ' +



            '<input id="{{prefix}}car_dropoffInput22" type="text" class="inputadiP adip-border car_dropoffInput" ng-model="car_dropoffName" value="{{car_dropoffName}}" ng-change="getLocation_Hint_Cars_TO(this, 2)" placeholder="Type in a location">' +

            '<div class="show-autocomplete-popup showhidepopup2{{showpopup2}} autocomplete_transfer2"  > <a class="" ng-cloak ng-repeat="airports_destinations_drop in airports_destinations_drop track by $index" ng-click="Update_CarSearch_Field_Drop(airports_destinations_drop.Code,airports_destinations_drop.Name,airports_destinations_drop.Lat,airports_destinations_drop.Lng,airports_destinations_drop.ExternalLocId)">{{airports_destinations_drop.Name}}</a><a class="" ng-cloak ng-repeat="city_destinations_drop in city_destinations_drop track by $index" ng-click="Update_CarSearch_Field_Drop(city_destinations_drop.Code,city_destinations_drop.Name,city_destinations_drop.Lat,city_destinations_drop.Lng,city_destinations_drop.ExternalLocId)">{{city_destinations_drop.Name}}</a></div></li>' +






            '<!--<li class="adiFullWp-7"> ' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_one_way').value + '</label>' +
            '<a href="" class="onewayu border-left-1 background-color-white " One_Round_Param="\'oneway\'"> ' + document.getElementById('txt_one_way').value + ' </a>' +
            '</li>' +


            '<li class="adiFullWp-7">' +
            '<label class="label-onP nolabel labelColor">' + document.getElementById('txt_round_trip').value + '</label>' +
            '<a href="" class="round_tripu border-left-1 background-color-white " One_Round_Param="\'return\'"> ' + document.getElementById('txt_round_trip').value + '</a>' +
            '</li>-->' +


            '<li class="adiFullWp-12 calendar_ioncs"> <label class="label-onP nolabel labelColor">Pickup Date</label>' +



            '<input type="text" class="inputadiP adip-border daterange" name="cardaterange1" id="{{prefix}}cardaterange1" value="{{departure_date | date:"d-MMM-y"}}"> </li>' + '<li class="adiFullWp-7 pickup_ioncs"> ' + '<div class="pickupTime_ioncs">' + '<label class="label-onP nolabel labelColor active">Time</label>' +


            '<select id="pickupTime" name="pickupTime" class="pickupTime">' + '<option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option><option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option><option value="06:00">06:00</option><option value="06:30">06:30</option><option value="07:00">07:00</option><option value="07:30">07:30</option><option value="08:00">08:00</option><option value="08:30">08:30</option><option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00" selected="selected">10:00</option><option value="10:30">10:30</option><option value="11:00">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option></select></div></li>' +


            '<li class="adiFullWp-12 calendar_ioncs"> <label class="label-onP nolabel labelColor">Return Date </label>' +



            '<input type="text" class="inputadiP daterange adip-border" name="cardaterange2" id="{{prefix}}cardaterange2" value="{{return_date | date:"d-MMM-y"}}" >' + '</li>' + '<li class="adiFullWp-7 pickup_ioncs"> ' + '<div class="pickupTime_ioncs">' + '<label class="label-onP nolabel labelColor active">Time</label>' +

            '<select id="returnTime" class="returnTime" >' + '<option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option><option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option><option value="06:00">06:00</option><option value="06:30">06:30</option><option value="07:00">07:00</option><option value="07:30">07:30</option><option value="08:00">08:00</option><option value="08:30">08:30</option><option value="09:00">09:00</option><option value="09:30">09:30</option><option value="10:00">10:00</option><option value="10:30">10:30</option><option value="11:00" selected="selected">11:00</option><option value="11:30">11:30</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option>' + '</select></div>' + '</li>' + '<li class="adiFullWp-11"> <label class="label-onP nolabel labelColor">&nbsp;</label> <input class="inputadiP inputadiPColor clickFuntalert" style="padding-left: 0px;" type="button" value="' + document.getElementById('txt_search').value + '"  ng-click="Search_cars()"></li></ul><div class="car_inptu_button">' +

            '<input type="checkbox" id="different_location_adivaha" name="different_location_adivaha" value="carYes"  >Return to a different location' +


            '</div></div></div><div class="tabpanebackinmg">' +

            '</div><!--<div id="iframesize_manager_adivaha_transfer_cars" style=""></div>' +
            '<div id="calendar_ioncs_cars_adults" style=""></div>-->' +

            '<style>.tabpaneback{background-color:' + document.getElementById('color_wrapperbackground').value + ';padding-top:' + document.getElementById('paddingtop').value + ';padding-bottom:' + document.getElementById('paddingbottom').value + ';padding-left:' + document.getElementById('paddingleft').value + ';padding-right:' + document.getElementById('paddingright').value + '}.round_tripu a{}.onewayu_selected{background:' + document.getElementById('color_onewayselect').value + '}.labelColor{color:' + document.getElementById('color_labelcolor').value + '}.inputadiPColor{background-color:' + document.getElementById('color_filterbutton').value + '}.show-autocomplete-popup a:hover{background-color:' + document.getElementById('color_autocompletehover').value + '}</style>' + '<style>.radio_lable{ padding-left: 20px;position: relative;} .radio_lable input{position: absolute;left: 0px;}.pickupTime_ionc{}.pickupTime_ioncs select{width: 100%;height: 43px;border: 0px;border-left: 1px solid #ccc;padding-left: 25px;}.pickupTime_ioncs{position: relative;}.cardropActive{}.onewayu_selected{background:' + document.getElementById('color_onewayselect').value + '}@media (min-width:1024px) and (max-width:1199px){#tab-car{}#tab-car ul li:first-child{width:100%}#tab-car ul li:nth-child(3){width:100%;margin-bottom:0px}#tab-car .location_first1{background-position:1% 58%}#tab-car ul li input[type=text]{padding:12px 0px 12px 31px}.div_clol .nav-pills li:last-child{width:inherit !important}#tab-car .show-autocomplete-popup{width:100%}#ct-container .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content, .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content{padding:20px !important;border-radius:8px;background-color:rgba(0,0,0,0.7) !important}#ct-container h4, .ct-modal-container h4{font-size:20px !important;color:#fff !important}.ct-form label{margin-bottom:2px !important;font-size:14px !important;color:#fff;font-weight:100}#ct-container strong, .ct-modal-container strong{font-weight:300}#ct-container .ct-drop-down-container>input, .ct-modal-container .ct-drop-down-container>input{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-form-field .ct-input, .ct-form-field .ct-select{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-btn-p{border:0px solid #ddd;height:41px;width:100%}.ct-hybrid-grid .ct-grid{}.ct-margin-bottom .ct-grid-unit-6-16:first-child{width:100% !important}.ct-hybrid-grid .ct-grid .ct-shiftr-2{margin-left:0%;width:100%}.ct-grid{max-width:100%;min-width:100%}}@media only screen and (min-width:768px) and (max-width:1024px){#tab-car{}#tab-car ul li:first-child{width:100%}#tab-car ul li:nth-child(3){width:100%;margin-bottom:0px}#tab-car .location_first1{background-position:1% 58%}#tab-car ul li input[type=text]{padding:12px 0px 12px 31px}.div_clol .nav-pills li:last-child{width:inherit !important}#tab-car .show-autocomplete-popup{width:100%}#ct-container .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content, .ct-modal-container .ct-modal-dialog-container .ct-modal-dialog .ct-modal-dialog-content{padding:20px !important;border-radius:8px;background-color:rgba(0,0,0,0.7) !important}#ct-container h4, .ct-modal-container h4{font-size:20px !important;color:#fff !important}.ct-form label{margin-bottom:2px !important;font-size:14px !important;color:#fff;font-weight:100}#ct-container strong, .ct-modal-container strong{font-weight:300}#ct-container .ct-drop-down-container>input, .ct-modal-container .ct-drop-down-container>input{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-form-field .ct-input, .ct-form-field .ct-select{padding-right:2em !important;cursor:pointer;border:1px solid #ccc;height:35px;font-size:13px;color:#000}.ct-btn-p{border:0px solid #ddd;height:41px;width:100%}.ct-hybrid-grid .ct-grid{}.ct-margin-bottom .ct-grid-unit-6-16:first-child{width:100% !important}.ct-hybrid-grid .ct-grid .ct-shiftr-2{margin-left:0%;width:100%}.ct-grid{max-width:100%;min-width:100%}}@media (max-width:767px){ body .ct-btn-p{    width: 100% !important;}  .ct-navigation-header{display:none}.ct-navigation-header__total{}.ct-hybrid-grid .ct-grid .ct-grid-unit-4-16{width: 100% !important;float: left !important;}#ct-availability-list ct-vehicle-block{min-height:100% !important}.ct-grid-unit-4-16.ct-table-cell.ct-palette-w-bg-color.ct-height-inherit.ct-padding-top.ct-vehicle-block-has-button-bar{width:98.5%;float:left}.ct-hybrid-grid .ct-grid .ct-grid-unit-8-16{width:100%;display:inline-block !important;text-align:center}.ct-grid.ct-table.ct-height-max{display:inline-block;width:100%}.ct-vehicle-block-special-offers.ct-vehicle-block-special-offers-desktop{min-height:0px;margin-bottom:0px}#ct-container ct-vehicle-block ct-vehicle-block-features[layout="icons-simple"] .ct-list-ticks .ct-list-simple li, .ct-modal-container ct-vehicle-block ct-vehicle-block-features[layout="icons-simple"] .ct-list-ticks .ct-list-simple li{text-align:left;font-size:15px}.ct-table-cell.ct-table-align-top{text-align:left;background: #fff;}#ct-container li, .ct-modal-container li{padding-bottom:1em;    width: 100%;}[ct-app] .ct-navigation-arrows li:first-child{display:none !important}.ct-covid-messaging-pill>span{font-size: 7px!important;}#ct-container strong, .ct-modal-container strong{font-size:15px;margin-bottom:14px;display:inline-block}#ct-container .ct-total-price, .ct-modal-container .ct-total-price{font-size: 17px;}.ct-padding-large.ct-no-padding-bottom.ct-vehicle-block-header{height:inherit !important}#ct-container .ct-navigation-arrows .ct-navigation-arrows_item, .ct-modal-container .ct-navigation-arrows .ct-navigation-arrows_item{font-size:10px !important}[ct-app] .ct-availability-filter-modal-visible.ct-context-content{padding:0px 28px 0px 0px;top:0px;left:0px;right:0px;height:100%;background-color:rgb(0,0,0, 0.7)}[ct-app] .ct-availability-filter-modal-visible.ct-context-content .ct-modal-dialog-close{top:7px;right:7px}.ct-margin-large-top{margin-top:0px !important}#ct-container .ct-filter__table__tablecell, .ct-modal-container .ct-filter__table__tablecell{float:left}#ct-container .ct-filter__table, .ct-modal-container .ct-filter__table{display:inline-block}.#ct-container .ct-table-cell{display: inline-block !important;}}@media (max-width:480px){.ct-hybrid-grid .ct-grid .ct-grid-unit-5-16 {width: 100%!important;float: left;}.ct-hybrid-grid .ct-grid .ct-grid-unit-10-16,.ct-hybrid-grid .ct-grid .ct-grid-unit-6-16,.ct-hybrid-grid .ct-grid .ct-grid-unit-4-16 {width: 100% !important;float: left;}#ct-container .ct-navigation-arrows .ct-navigation-arrows_item{width:100% !important;margin-bottom:10px !important;font-size:15px !important}.ct-navigation-arrows li.ct-active:after, .ct-navigation-arrows .ct-navigation-arrows_item.ct-active:after{border:0px}.ct-navigation-arrows li:before, .ct-navigation-arrows .ct-navigation-arrows_item:before{border:0px}.ct-navigation-arrows li:before, .ct-navigation-arrows .ct-navigation-arrows_item:before{border:0px}#ct-container .ct-body-content, .ct-modal-container .ct-body-content{float:left;width:100% !important}#ct-container .ct-filter__table__tablecell__4-16, .ct-modal-container .ct-filter__table__tablecell__4-16{width:100% !important}#ct-container .ct-filter__table, .ct-modal-container .ct-filter__table{display:inline-block;border-radius:0px}.#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper.ct-bundles-1-cols{width: 100% !important;}.ct-hybrid-grid .ct-grid .ct-shiftr-1:first-child{    margin-left: 0% !important;}.ct-hybrid-grid .ct-grid .ct-grid-unit-14-16,.ct-hybrid-grid .ct-grid .ct-grid-unit-12-16,#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper.ct-bundles-1-cols,#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper .ct-bundle-wrapper .ct-bundle,#ct-container .ct-bundles .ct-panel-content .ct-bundles-wrapper .ct-bundle-wrapper{    width: 100%;}.ct-hybrid-grid .ct-grid .ct-shiftr-2:first-child,[class^="ct-grid-unit"]{    margin-left: 0%;}.ct-text-center {text-align: left;}} .car_inptu_button{font-size: 14px;color: #fff;float: left;width: 100%;padding-top: 8px;} .car_inptu_button input{margin-right: 7px;} select[disabled] { background-color: #ccc; }</style>' +


            '<style>.adiFullWp-25 {width: 25%;}.adiFullWp-12 {width: 12%;}.adiFullWp-7 {width: 7%;}.adiFullWp-11 {width: 11%;}.car_inptu_button {font-size: 14px;color: #fff;float: left;width: 100%;padding-top: 8px;}[ct-app].ct-app-ready {background: transparent !important;}[ct-app]>[ng-view]>div{padding: 0px !important;}.ct-grid{max-width: 1200px!important;}   .pickupTime_ioncs select{border-left: 1px solid #ccc;padding-left: 28px;}   @media (max-width: 1024px){ .adiFullWp-7, .adiFullWp-10 {width: 50%!important; }   #adivaha_cartransfer_box{}  #adivaha_cartransfer_box .searchBoxMobile{} #adivaha_cartransfer_box .searchBoxMobile .adi-max-width>ul{} #adivaha_cartransfer_box>.searchBoxMobile>.adi-max-width>ul>.adiFullWp-12{} #adivaha_cartransfer_box>.searchBoxMobile>.adi-max-width>ul>.adiFullWp-7{}   #adivaha_cartransfer_box .searchBoxMobile>.adi-max-width{} #adivaha_cartransfer_box .searchBoxMobile>.adi-max-width{} #adivaha_cartransfer_box .searchBoxMobile>.adi-max-width>ul{} #adivaha_cartransfer_box .searchBoxMobile>.adi-max-width>ul>.adiFullWp-12{width:70%;}  #adivaha_cartransfer_box .searchBoxMobile>.adi-max-width>ul>.adiFullWp-7{width: 30% !important;} .pickupTime_ioncs select{padding-left: 31px;} } .car_inptu_button input {margin-right: 7px; }</style>'
    };
});

jQuery(document).ready(function() {
    jQuery(function() {
        var language = document.getElementById("adh_language").value;
        var prefix = jQuery('#adivaha_transfer_cars_').val();
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
            autoApply: true,
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
            autoApply: true,
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
        var value_po = document.getElementById(prefix + "isoneway").value



        if (value_po == 'Yes') {
            jQuery("#different_location_adivaha").prop("checked", false);
        } else {

            jQuery("#different_location_adivaha").prop("checked", true);

        }






        var ckbox = jQuery('#different_location_adivaha');
        jQuery('#different_location_adivaha').on('click', function() {
            if (ckbox.is(':checked')) {


                /*jQuery('#adivaha_cartrawler_cars_cardaterange2').removeAttr('disabled');
                jQuery('.returnTime').removeAttr('disabled');*/
                jQuery('#adivaha_transfer_cars_isoneway').val('No');
                /* alert('You have Checked it one way ');*/
            } else {

                /*jQuery('#adivaha_cartrawler_cars_cardaterange2').attr('disabled', 'disabled');
                jQuery('.returnTime').attr('disabled', 'disabled');*/
                jQuery("#adivaha_transfer_cars_isoneway").val('Yes');

                /*    alert('You Un-Checked it two way');*/
            }
        });

        /*
        var forResize =document.getElementById('adivaha_transfer_cars_forResize').value;
        jQuery("#adivaha_transfer_cars_cardaterange1").on('show.daterangepicker', function(ev, picker) {
        	
        		
        		if(forResize=='Yes'){
        		document.getElementById("calendar_ioncs_cars_adults").style.height = "650px";
        		}
        });
        jQuery("#adivaha_transfer_cars_cardaterange1").on('hide.daterangepicker', function(ev, picker) {
        	
        	if(forResize=='Yes'){
        	document.getElementById("calendar_ioncs_cars_adults").style.height = "0px";
        	}
        });
        jQuery("#adivaha_transfer_cars_cardaterange2").on('show.daterangepicker', function(ev, picker) {
        		
        		if(forResize=='Yes'){
        		document.getElementById("calendar_ioncs_cars_adults").style.height = "650px";
        		}
        });
        jQuery("#adivaha_transfer_cars_cardaterange2").on('hide.daterangepicker', function(ev, picker) {
	
        	if(forResize=='Yes'){
        	document.getElementById("calendar_ioncs_cars_adults").style.height = "0px";
        	}
        });
        */


        /* end new code add by mk */

    });
});