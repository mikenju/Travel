angular.module("AdivahaFlySmartSearchBox", ['elif', 'AdivahaFlySmartSearchBox.directives']);
angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivaha_fly_smart_searchbox'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['AdivahaFlySmartSearchBox']);
    }
});
'use strict';
angular.module('AdivahaFlySmartSearchBox.directives', []).directive('adivahaFlySmartSearchBox', function() {
    return {
        controller: function($scope, $http) {
            var prefix = jQuery('#prefix_adivaha_fly_smart').val();
            $scope.prefix = prefix;
            $scope.islandingpage = jQuery('#islandingpage').val();
            var xhr = null;
            $scope.getFlight_Hint = function(val, whichs) {
                var locale = document.getElementById("adh_language").value;
                if (whichs == 1) {
                    var term = this.adi_from_name;
                } else {
                    var term = this.adi_to_name;
                }
                return xhr = $http.get('https://www.jetradar.com/autocomplete/places', {
                    params: {
                        locale: locale,
                        limit: "5",
                        q: term
                    }
                }).then(function(response) {
                    if (JSON.stringify(response.data.city_name) != "[]" && JSON.stringify(response.data.city_name) != "[]") {
                        $scope.flights_destinations = response.data;
                        if (whichs == 1) {
                            $scope.showpopup1 = true;
                            $scope.showpopup2 = false;
                        } else {
                            $scope.showpopup2 = true;
                            $scope.showpopup1 = false;
                        }
                    } else {
                        $scope.showpopup1 = false;
                        $scope.showpopup2 = false;
                    }
                });
            };

            $scope.Search_Flights = function() {
                var isoneway = document.getElementById(prefix + "isoneway").value;
                var resultsPage = jQuery('#adivaha_site_url').val() + '/' + document.getElementById(prefix + "result_page").value;

                var from_iata_name = document.getElementById(prefix + "from_iata_name").value;
                var fromArr = from_iata_name.split(",");
                var from_country = fromArr[fromArr.length - 1].trim();

                var to_iata_name = document.getElementById(prefix + "return_iata_name").value;
                var toArr = to_iata_name.split(",");
                var to_country = toArr[toArr.length - 1].trim();

                if ((from_country == 'India') && (to_country == 'India')) {
                    var isDomestic = 'Yes';
                } else {
                    var isDomestic = 'No';
                }

                var url = resultsPage + "/?mt=result&origin_name=" + document.getElementById(prefix + "from_iata_name").value + "&origin_iata=" + document.getElementById(prefix + "from_iata").value + "&destination_name=" + document.getElementById(prefix + "return_iata_name").value + "&destination_iata=" + document.getElementById(prefix + "return_iata").value + "&depart_date=" + document.getElementById(prefix + "departure_date").value + "&return_date=" + document.getElementById(prefix + "return_date").value + "&one_way=" + isoneway + "&adults=" + document.getElementById(prefix + "adults").value + "&children=" + document.getElementById(prefix + "children").value + "&infants=" + document.getElementById(prefix + "infants").value + "&currency=" + document.getElementById("adh_currency").value + "&language=" + document.getElementById("adh_language").value + "&isDomestic=" + isDomestic + "&cabin=" + jQuery('#two_flightscabin').val() + "&themecolors=" + document.getElementById("themecolors_code_use_only").value;

                location.href = url;
                jQuery(".inputadiPColor").addClass("clicked_btnloader");
            };

            jQuery('.cabinType').click(function() {
                var v = jQuery(this).val();
                jQuery('#two_flightscabin').val(v);
            })
            /*== Onload Cabon ==*/
            $scope.cabin = jQuery('#two_flightscabin').val();
            if ($scope.cabin == 'Business') {
                jQuery('#cabinbus').prop('checked', true);
            } else {
                jQuery('#cabinecom').prop('checked', true);
            }




            $scope.showpopupfilters = false;
            $scope.filtersonoff = function(val) {
                $scope.showpopupfilters = true;
            };
            $scope.hideRoomGroup = function(val) {
                $scope.showpopupfilters = false;
                $scope.filterswitcher = (parseInt($scope.noofadults) + parseInt($scope.noofchildren) + parseInt($scope.infants)) + " " + document.getElementById('txt_passengers').value;
            };
            $scope.Update_Search_Flights_Param = function(flight_destinations_id, flight_latinFullName, whichs) {
                if (whichs == 1) {
                    $scope.from_iata = flight_destinations_id;
                    $scope.adi_from_name = flight_latinFullName;
                    document.getElementById(prefix + "from_iata").value = flight_destinations_id;
                    document.getElementById(prefix + "from_iata_name").value = flight_latinFullName;
                } else {
                    $scope.return_iata = flight_destinations_id;
                    $scope.adi_to_name = flight_latinFullName;
                    document.getElementById(prefix + "return_iata").value = flight_destinations_id;
                    document.getElementById(prefix + "return_iata_name").value = flight_latinFullName;
                }
                $scope.showpopup1 = false;
                $scope.showpopup2 = false;
            };
            $scope.selectTripType = function(val) {
                if (val == 'oneway') {
                    jQuery("#" + prefix + "isoneway").val('Yes');
                    jQuery("#" + prefix + "round").removeClass('onewayu_selected');
                    jQuery("#" + prefix + "oneway").addClass('onewayu_selected');
                    jQuery("#" + prefix + "return_dateRange").attr('disabled', 'disabled');
                } else {
                    jQuery("#" + prefix + "isoneway").val('No');
                    jQuery("#" + prefix + "oneway").removeClass('onewayu_selected');
                    jQuery("#" + prefix + "round").addClass('onewayu_selected');
                    jQuery("#" + prefix + "return_dateRange").removeAttr('disabled');
                }
            };
            var tripType = jQuery("#" + prefix + "isoneway").val();
            if (tripType == 'Yes') {
                var tripTypeS = 'oneway';
            } else {
                var tripTypeS = 'round';
                $scope.selectTripType('round');
            }
            setTimeout(function() {
                $scope.selectTripType(tripTypeS);
            }, 100);
            $scope.increasenoofadults = function() {
                if ($scope.noofadults < 7) {
                    $scope.noofadults++;
                    document.getElementById(prefix + "adults").value = $scope.noofadults;
                }
            };
            $scope.decreasenoofadults = function() {
                if ($scope.noofadults > 1) {
                    $scope.noofadults--;
                    document.getElementById(prefix + "adults").value = $scope.noofadults;
                }
            };
            $scope.increasenoochilds = function() {
                if ($scope.noofchildren < 7) {
                    $scope.noofchildren++;
                    document.getElementById(prefix + "children").value = $scope.noofchildren;
                }
            };
            $scope.decreasenoochilds = function() {
                if ($scope.noofchildren > 0) {
                    $scope.noofchildren--;
                    document.getElementById(prefix + "children").value = $scope.noofchildren;
                }
            };
            $scope.increasenooinfants = function() {
                if ($scope.infants < 7) {
                    $scope.infants++;
                    document.getElementById(prefix + "infants").value = $scope.infants;
                }
            };
            $scope.decreasenooinfants = function() {
                if ($scope.infants > 0) {
                    $scope.infants--;
                    document.getElementById(prefix + "infants").value = $scope.infants;
                }
            };
            $scope.adi_from_name = document.getElementById(prefix + "from_iata_name").value;
            $scope.adi_from_IATA = document.getElementById(prefix + "from_iata").value;
            $scope.adi_to_name = document.getElementById(prefix + "return_iata_name").value;
            $scope.adi_to_IATA = document.getElementById(prefix + "return_iata").value;
            $scope.noofadults = document.getElementById(prefix + "adults").value;
            $scope.noofchildren = document.getElementById(prefix + "children").value;
            $scope.infants = document.getElementById(prefix + "infants").value;
            $scope.filterswitcher = (parseInt(document.getElementById(prefix + "adults").value) + parseInt(document.getElementById(prefix + "children").value) + parseInt(document.getElementById(prefix + "infants").value)) + " " + document.getElementById('txt_passengers').value;
        },
        template: '<div class="adiFullp tabpaneback searchBoxMobile" style=""><div class="' + document.getElementById('adimaxwidth').value + '"><h2 style="display:none">Book a Cheap Flight</h2><div class="tripbutton " style=""><div id="{{prefix}}oneway" class="onewayu" ng-click="selectTripType(\'oneway\')"><span class="tabsCircle appendRight5"></span>' + document.getElementById('txt_one_way').value + '</div><div class="round_tripu" id="{{prefix}}round" ng-click="selectTripType(\'round\')"><span class="tabsCircle appendRight5"></span>' + document.getElementById('txt_round_trip').value + '</div></div><ul class="adiFullp width' + document.getElementById('responsive_width').value + ' labelno' + document.getElementById('label_yes_and_no').value + ' siteL' + document.getElementById('adh_language').value + '"><li class="adiFullWp-25 position-relative map_ioncs"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_flying_from').value + '</label> <input type="text" class="inputadiP" ng-model="adi_from_name" ng-change="getFlight_Hint(this, 1)"><div class="show-autocomplete-popup showhidepopup1{{showpopup1}}">' + '<a class="" ng-cloak ng-repeat="flights_destinations in flights_destinations track by $index" ng-click="Update_Search_Flights_Param(flights_destinations.code, flights_destinations.city_fullname, 1)" ng-if="flights_destinations.name">' + '<div class="city_fullname_left">' + '<span class="leftspancss">{{flights_destinations.city_fullname}}</span>' + '<span class="leftspancss1">{{flights_destinations.name}}</span>' + '</div>' + '<div class="city_fullname_right" style="">' + '<span class="rightspancss">{{flights_destinations.code}}</span></div></a>' + '</div></li><span class="flight-swipe-icon"></span><li class="adiFullWp-25 position-relative map_ioncs"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_flying_to').value + '</label> <input type="text" class="inputadiP adip-border" ng-model="adi_to_name" ng-change="getFlight_Hint(this, 2)"><div class="show-autocomplete-popup showhidepopup2{{showpopup2}}">' + '<a class="" ng-cloak ng-repeat="flights_destinations in flights_destinations track by $index" ng-click="Update_Search_Flights_Param(flights_destinations.code, flights_destinations.city_fullname, 2)" ng-if="flights_destinations.name">' + '<div class="city_fullname_left">' + '<span class="leftspancss ">{{flights_destinations.city_fullname}}</span>' + '<span class="leftspancss1 ">{{flights_destinations.name}}</span>' + '</div>' + '<div class="city_fullname_right" class="">' + '<span class="rightspancss">{{flights_destinations.code}}</span></div></a>' + '</div></li><!--<li class="adiFullWp-7"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_one_way').value + '</label><a href="" id="{{prefix}}oneway" class="onewayu border-left-1 background-color-white" ng-click="selectTripType(\'oneway\')"> ' + document.getElementById('txt_one_way').value + ' </a></li><li class="adiFullWp-7"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_round_trip').value + '</label><a href="" id="{{prefix}}round" class="round_tripu border-left-1 background-color-white" ng-click="selectTripType(\'round\')">' + document.getElementById('txt_round_trip').value + '</a></li>--><li class="adiFullWp-12 calendar_ioncs"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_Check_in').value + '</label> <input type="text" class="inputadiP adip-border daterange" name="daterange1" id="{{prefix}}depature_dateRange" value=""></li><span class="flight-swipe-icon  flight-swipe-icon1"></span><li class="adiFullWp-12 calendar_ioncs"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_Check_out').value + '</label> <input type="text" class="inputadiP daterange adip-border" name="daterange2" id="{{prefix}}return_dateRange"></li><li class="adiFullWp-15 position-relative man_image_ioncs"> <label class="label-onP nolabel labelColor">' + document.getElementById('txt_travelers').value + '</label> <input type="text" ng-model="filterswitcher" class="inputadiP adip-border" ng-click="filtersonoff()" readonly="readonly" id="dropboxadi">' +

            '<div id="drope_box" class="background-color-white adi-box-shadow adiFullp padding-20 position-absolute drope_box-css showhidefilters{{showpopupfilters}}">' +

            '<div class="full_box_div_new_style">' +
            '<div class="full_box_div_new_style_one">' +
            '<label class="label-onP">' + document.getElementById('txt_adults').value + '</label>' +
            '<a href="" class="border-one-1" ng-click="decreasenoofadults()"><i class="fa fa-minus" aria-hidden="true"></i></a> <a href="" class="border-two-2">{{noofadults}}</a> <a href="" class="border-three-3" ng-click="increasenoofadults()"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
            '</div>' +

            '<div class="full_box_div_new_style_one">' +
            '<label class="label-onP">' + document.getElementById('txt_children').value + '</label>' +
            '<a href="" class="border-one-1" ng-click="decreasenoochilds()"><i class="fa fa-minus" aria-hidden="true"></i></a> <a href="" class="border-two-2">{{noofchildren}}</a> <a href="" class="border-three-3" ng-click="increasenoochilds()"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
            '</div>' +

            '<div class="full_box_div_new_style_one">' +
            '<label class="label-onP">' + document.getElementById('txt_infants').value + '</label>' +
            '<a href="" class="border-one-1" ng-click="decreasenooinfants()"><i class="fa fa-minus" aria-hidden="true"></i></a> <a href="" class="border-two-2">{{infants}}</a> <a href="" class="border-three-3" ng-click="increasenooinfants()"><i class="fa fa-plus" aria-hidden="true"></i></a>' +
            '</div>' +
            '</div>' +

            '<!--<div class="adiFullp margin-bottom-10">' +
            '<div class="P-adi-width-33"> <label class="label-onP">' + document.getElementById('txt_adults').value + '</label><div class="adiFullp" style="display: flex;"> <a href="" class="border-one" ng-click="decreasenoofadults()">-</a> <a href="" class="border-two">{{noofadults}}</a> <a href="" class="border-three" ng-click="increasenoofadults()">+</a></div></div>' +

            '<div class="P-adi-width-33"> <label class="label-onP">' + document.getElementById('txt_children').value + '</label><div class="adiFullp" style="display: flex;"> <a href="" class="border-one" ng-click="decreasenoochilds()">-</a> <a href="" class="border-two">{{noofchildren}}</a> <a href="" class="border-three" ng-click="increasenoochilds()">+</a></div></div><div class="P-adi-width-33"> <label class="label-onP">' + document.getElementById('txt_infants').value + '</label><div class="adiFullp" style="display: flex;"> <a href="" class="border-one" ng-click="decreasenooinfants()">-</a> <a href="" class="border-two">{{infants}}</a> <a href="" class="border-three" ng-click="increasenooinfants()">+</a></div></div></div>-->' +

            '<div class="adiFullp border-bottom-1"><ul><li class="adiFullp margin-top-10"> <label class="radio_lable"> <input type="radio" name="flight_cabin" value="Economy" checked="checked" aria-invalid="false" id="cabinecom" class="cabinType">' + document.getElementById('txt_economy').value + '</label></li><li class="adiFullp margin-top-10 margin-bottom-10"> <label class="radio_lable"> <input type="radio" name="flight_cabin" value="Business" aria-invalid="false" id="cabinbus" class="cabinType"> ' + document.getElementById('txt_business').value + '</label></li></ul></div><div class="adiFullp margin-top-10"><div class="be-ddn-footer adiFullp" > <a href="javascript:void(0)" style="background-color:' + document.getElementById('color_filterbutton').value + ';" class="done adi-btn text-color-white adiFullp" ng-click="hideRoomGroup();">' + document.getElementById('txt_done').value + '</a></div></div></div>' +

            '</li><li class="adiFullWp-11"> <label class="label-onP nolabel labelColor">&nbsp;</label> <input class="inputadiP inputadiPColor" style="padding-left: 0px;" type="button" value="' + document.getElementById('txt_search').value + '" ng-click="Search_Flights()"></li></ul></div></div><style>.tabpaneback{background-color:' + document.getElementById('color_wrapperbackground').value + ';padding-top:' + document.getElementById('paddingtop').value + ';padding-bottom:' + document.getElementById('paddingbottom').value + ';padding-left:' + document.getElementById('paddingleft').value + ';padding-right:' + document.getElementById('paddingright').value + '}.round_tripu a{}.onewayu_selected{background:' + document.getElementById('color_onewayselect').value + '}.labelColor{color:' + document.getElementById('color_labelcolor').value + '}.inputadiPColor{background-color:' + document.getElementById('color_filterbutton').value + '}.show-autocomplete-popup a:hover{background-color:' + document.getElementById('color_autocompletehover').value + '}.city_fullname_left{float: left;width: 90%;}.leftspancss {width: 100%;float: left;font-size: 15px;font-weight: 600;}.leftspancss1 {width: 88%;float: left;font-size: 12px;padding-top: 6px;font-weight: 500;}.city_fullname_right{width: 10%;float: right}.rightspancss{font-weight: 600}</style>'
    };
});
jQuery(function() {
    var prefix = jQuery('#prefix_adivaha_fly_smart').val();
    var language = document.getElementById("adh_language").value;
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
    var today = new Date();
    var today_Date = new Date(document.getElementById(prefix + "departure_date").value);
    var nextDayDate = new Date(document.getElementById(prefix + "return_date").value);
    jQuery("#" + prefix + "depature_dateRange").daterangepicker({
        "singleDatePicker": true,
        startDate: today_Date,
        endDate: nextDayDate,
        minDate: today,
        opens: 'right',
        autoclose: true,
        locale: {
            format: 'DD-MM-YYYY',
            direction: direction,
            daysOfWeek: daysOfWeek,
            monthNames: monthNames,
            firstDay: 1
        }
    }, function(start, end, label) {
        jQuery("#" + prefix + "departure_date").val(start.format('YYYY-MM-DD'));
        jQuery("#" + prefix + "return_date").val(end.format('YYYY-MM-DD'));
        jQuery("#" + prefix + "return_dateRange").data('daterangepicker').minDate = jQuery("#" + prefix + "depature_dateRange").data('daterangepicker').startDate;
        jQuery("#" + prefix + "return_dateRange").data('daterangepicker').startDate = jQuery("#" + prefix + "depature_dateRange").data('daterangepicker').endDate;
        jQuery("#" + prefix + "return_dateRange").val(jQuery("#" + prefix + "depature_dateRange").data('daterangepicker').startDate.format('DD-MM-YYYY'));


        /*jQuery("#" + prefix + "departure_date").val(start.format('YYYY-MM-DD'));
        jQuery("#" + prefix + "return_date").val(end.format('YYYY-MM-DD'));
        jQuery("#" + prefix + "return_dateRange").data('daterangepicker').minDate = jQuery("#" + prefix + "depature_dateRange").data('daterangepicker').startDate;
      jQuery("#" + prefix + "return_dateRange").data('minDate').startDate = jQuery("#" + prefix + "depature_dateRange").data('daterangepicker').startDate;
       jQuery("#" + prefix + "return_dateRange").val(jQuery("#" + prefix + "depature_dateRange").data('daterangepicker').startDate.format('DD-MM-YYYY'));
	   
	   */
    });
    jQuery("#" + prefix + "return_dateRange").daterangepicker({
        "singleDatePicker": true,
        startDate: nextDayDate,
        endDate: nextDayDate,
        minDate: nextDayDate,
        opens: 'right',
        autoclose: true,
        locale: {
            format: 'DD-MM-YYYY',
            direction: direction,
            daysOfWeek: daysOfWeek,
            monthNames: monthNames,
            firstDay: 1
        }
    }, function(start, end, label) {
        jQuery("#" + prefix + "return_dateRange").val(start.format('YYYY-MM-DD'));
        jQuery("#" + prefix + "return_dateRange").val(end.format('YYYY-MM-DD'));
        jQuery("#" + prefix + "return_date").val(end.format('YYYY-MM-DD'));
    });
});