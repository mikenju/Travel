angular.module("AdivahaAHBHotelbedsactivitySearchbox", [
    'elif',
    'AdivahaAHBHotelbedsactivitySearchbox.directives'
]);

angular.element(document).ready(function() {
    var element = angular.element(document.querySelector('#adivaha_api_hotelbedsactivity_box'));
    var isInitialized = element.injector();
    if (!isInitialized) {
        angular.bootstrap(element, ['AdivahaAHBHotelbedsactivitySearchbox']);
    }
});

angular.module("AdivahaAHBHotelbedsactivitySearchbox").filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);
        return input;
    };
});

'use strict';
/* Controllers */
angular.module('AdivahaAHBHotelbedsactivitySearchbox.directives', [])

    /* Starting of Hotelbeds Activity Search Box*/
    .directive('adivahaAhbHotelbedsactivitySearchBox', function() {
        return {
            controller: function($scope, $http) {
                var prefix = jQuery('#prefix_adivaha_hotelbedsactivity').val();
                var pid = jQuery('#pid').val();
                $scope.prefix = prefix;
                $scope.agent_id = '';

                var forResize = document.getElementById('adivaha_hotelbedsactivity_forResize').value;
                //alert(forResize);
                if (forResize == 'Yes') {
                    setInterval(function() {
                        iframesizeincreaser = parseInt(angular.element(".autocomplete_hotelbedsactivity_booking")[0].offsetHeight);
                        document.getElementById("iframesize_manager_adivaha_hotelsactivity_booking").style.height = (iframesizeincreaser + 0) + "px";



                        iframesizeincreasers3 = 0;
                        //iframesizeincreasers3 = parseInt(jQuery(".adivaha_hotelbedsactivity_booking_adults").css("height"));
                        iframesizeincreasers3 = parseInt(angular.element(".adivaha_hotelbedsactivity_booking_adults")[0].offsetHeight);
                        if (iframesizeincreasers3 > 0) {
                            document.getElementById("iframesize_manager_adivaha_hotelsactivity_booking_adults").style.height = (iframesizeincreasers3 + 0) + "px";
                        }

                    }, 10);

                }

                var xhr = null;
                $scope.getLocation_HotelsHint = function(val) {
                    var locale = document.getElementById("adh_language").value;
                    var term = $scope.adi_destination_name;
                    return xhr = $http.get('https://travelbeesapi.com/webServices/hotelbeds/activity/v2/api.php', {
                        params: {
                            action: "getLocations",
                            lang: locale,
                            limit: "5",
                            term: term
                        }
                    }).then(function(response) {
                        if (JSON.stringify(response.data.hotels) != "[]" && JSON.stringify(response.data.hotels) != "[]") {
                            $scope.hotel_destinations = response.data.hotels;
                            $scope.city_destinations = response.data.cities;
                            $scope.showpopup = true;
                        } else {
                            $scope.showpopup = false;
                        }

                    });
                };

                $scope.Update_Search_Hotels_Param = function(city_destinations_id, latinFullName) {
                    $scope.adi_destination_name = latinFullName;
                    $scope.adi_destination_id = city_destinations_id;
                    document.getElementById(prefix + "regionid").value = $scope.adi_destination_id;
                    document.getElementById(prefix + "regionname").value = latinFullName;
                    $scope.showpopup = false;
                };

                $scope.Search_Activity = function() {
                    var rooms = document.getElementById(prefix + "rooms").value;

                    var adtStr = '';
                    var chdStr = '';
                    var childAgeStr = '';
                    for (var i = 0; i < rooms; i++) {
                        adtStr += jQuery('#' + prefix + 'adults_' + i).val() + ',';
                        chdStr += jQuery('#' + prefix + 'childs_' + i).val() + ',';
                        var chls = jQuery('#' + prefix + 'childs_' + i).val();
                        if (chls > 0) {
                            var agess = '';
                            var agesss = '';
                            for (var c = 0; c < chls; c++) {
                                var age = document.getElementById(prefix + "childAge" + i + '_' + c).value;
                                agess += age + ',';
                            }
                            agesss = agess.slice(0, -1);
                            childAgeStr += i + '_' + agesss + '-';
                        } else {
                            childAgeStr += i + '-';
                        }
                    }

                    var adults = adtStr.slice(0, -1);
                    var childs = chdStr.slice(0, -1)
                    var childAge = childAgeStr.slice(0, -1);

                    var resultsPage = document.getElementById(prefix + 'result_page').value;

                    var regionid = document.getElementById(prefix + "regionid").value;
                    regionid = regionid.replace("|", "_");

                    //var url = resultsPage+"?mt=result&dest="+document.getElementById("destination_text").value+"&countryName="+document.getElementById("country_text").value+"&countryCode="+document.getElementById("countryCode").value+"&destiCode="+document.getElementById("cityCode").value+"&checkIn="+document.getElementById(prefix+"checkIn").value+"&checkOut="+document.getElementById(prefix+"checkOut").value+"&adults="+adults+"&children="+childs+"&childAge="+childAge+"&language="+document.getElementById("adh_language").value+"&currency="+document.getElementById("adh_currency").value+"&agent_id="+$scope.agent_id;

                    var url = resultsPage + "?mt=result&dest=" + document.getElementById(prefix + "regionname").value + "&cityId=" + regionid + "&checkIn=" + document.getElementById(prefix + "checkIn").value + "&checkOut=" + document.getElementById(prefix + "checkOut").value + "&adults=" + adults + "&children=" + childs + "&childAge=" + childAge + "&language=" + document.getElementById("adh_language").value + "&currency=INR&agent_id=" + $scope.agent_id;

                    if (pid != '') {
                        top.location.href = url;
                    } else {
                        location.href = url;
                    }

                    jQuery(".inputadiPColor").addClass("clicked_btnloader");
                };

                /* Show Hide Hotel Criteria Filters */
                $scope.showpopupfilters = false;
                $scope.filtersonoff = function(val) {
                    $scope.showpopupfilters = true;
                }

                $scope.hideRoomGroup = function(val) {
                    $scope.showpopupfilters = false;
                    showGuestRoom();
                }

                $scope.increasenoofrooms = function() {
                    if ($scope.noofrooms < 7) {
                        $scope.noofrooms++;
                        document.getElementById(prefix + "rooms").value = $scope.noofrooms;
                    }
                    setTimeout(function() {
                        changeChildNo();
                    }, 100);
                }

                $scope.decreasenoofrooms = function() {
                    if ($scope.noofrooms > 1) {
                        $scope.noofrooms--;
                        document.getElementById(prefix + "rooms").value = $scope.noofrooms;
                    }
                    setTimeout(function() {
                        changeChildNo();
                    }, 100);
                }

                function showGuestRoom() {
                    var totalGuest = 0;
                    for (var i = 0; i < $scope.noofrooms; i++) {
                        var adt = jQuery("#" + prefix + "adults_" + i).val();
                        var chd = jQuery("#" + prefix + "childs_" + i).val();
                        totalGuest += parseInt(adt) + parseInt(chd);
                    }
                    $scope.totalGuest = totalGuest;
                    $scope.filterswitcher = totalGuest + " " + document.getElementById("txt_guests").value;
                }

                function changeChildNo() {
                    jQuery('.changeChildNo').change(function() {
                        var r = jQuery(this).attr('relRoom');
                        var n = jQuery(this).val();
                        var html = '';
                        if (n > 0) {
                            html += '<span style="font-size: 13px;margin-top: 10px;display: inline-block;float: left;width: 100%;"><label class="age_label">Children Ages</label></span>';
                            for (var i = 0; i < n; i++) {
                                html += '<div class="age_childdiv  select_box_' + i + '"><select name="childAge[' + r + '][]" id="' + prefix + 'childAge' + r + '_' + i + '" class=" childagarss  "><option selected="selected" value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select></div>'
                            }
                        }
                        jQuery('#' + prefix + 'childAgeID_' + r).html(html);
                    })
                }
                setTimeout(function() {
                    changeChildNo();
                }, 100);


                /* Set the Default Values */

                $scope.adi_destination_id = document.getElementById(prefix + "regionid").value;
                $scope.adi_destination_name = document.getElementById(prefix + "regionname").value;
                $scope.noofrooms = document.getElementById(prefix + "rooms").value;

                var adultArr = document.getElementById(prefix + "adults").value.split(",");
                var childsArr = document.getElementById(prefix + "children").value.split(",");
                var childAgeArr = document.getElementById(prefix + "childage").value.split("-");

                /* Bind Child Age ==*/
                function childAgeHtml() {

                    for (var g = 0; g < $scope.noofrooms; g++) {
                        var nchild = childsArr[g];
                        if (nchild > 0) {
                            var childAgeHtml = '';
                            var cAge = childAgeArr[g].split('_');
                            var childAg = cAge[1];
                            for (var h = 0; h < nchild; h++) {
                                var childAgArr = childAg.split(',');
                                childAgeHtml += 'Age Below 12 years <select id="' + prefix + 'childAge' + g + '_' + h + '" class="childagarss form-control">';
                                for (var k = 0; k < 13; k++) {
                                    if (childAgArr[h] == k) {
                                        childAgeHtml += '<option value="' + k + '" selected="selected">' + k + '</option>';
                                    } else {
                                        childAgeHtml += '<option value="' + k + '">' + k + '</option>';
                                    }
                                }
                                childAgeHtml += '</select>';
                            }
                        }

                        jQuery('#' + prefix + 'childAgeID_' + g).html(childAgeHtml);

                    }

                }

                setTimeout(function() {
                    childAgeHtml()
                }, 400);
                setTimeout(function() {
                    selectAdtChd()
                }, 100);

                function selectAdtChd() {
                    for (var s = 0; s < $scope.noofrooms; s++) {
                        jQuery("#" + prefix + "adults_" + s + " option[value=" + adultArr[s] + "]").attr('selected', 'selected');
                        jQuery("#" + prefix + "childs_" + s + " option[value=" + childsArr[s] + "]").attr('selected', 'selected');
                    }
                }

                /*==== On Page Load show this ===*/
                var totalGuest = 0;
                for (var i = 0; i < $scope.noofrooms; i++) {
                    var adt = adultArr[i];
                    var chd = childsArr[i];;
                    totalGuest += parseInt(adt) + parseInt(chd);
                }
                $scope.totalGuest = totalGuest;
                $scope.filterswitcher = totalGuest + " " + document.getElementById("txt_guests").value;

            },
            template: '<div class="adiFullp tabpaneback searchBoxMobile" style=""><div class="' + document.getElementById('adimaxwidth').value + '"><ul class="adiFullp width' + document.getElementById('responsive_width').value + ' labelno' + document.getElementById('label_yes_and_no').value + ' siteL' + document.getElementById('adh_language').value + '">' +

                '<li class="adiFullWp-45 position-relative map_ioncs"> <label class="label-onP nolabel labelColor">I want to go to</label> <input type="text" class="inputadiP " ng-model="adi_destination_name" ng-change="getLocation_HotelsHint(desti)"><div class="show-autocomplete-popup showhidepopup{{showpopup}} background-color-white adi-box-shadow position-absolute autocomplete_hotelbedsactivity_booking">' +
                '<!-- City lists autosation -->' +
                '<h6 style="font-size: 11px;letter-spacing: 1px;padding: 8px 8px 0px 8px;">' + document.getElementById('txt_cities').value + '</h6><a class="autocomplete-dropdown adi-full padding-10 border-bottom-1" ng-cloak ng-repeat="city_destinations in city_destinations track by $index"  ng-click="Update_Search_Hotels_Param(city_destinations.locationId, city_destinations.fullname)">{{city_destinations.fullname}}</a>' +

                '</div></li>' +

                '<li class="adiFullWp-21 calendar_ioncs"> <label class="label-onP nolabel labelColor">Travel Dates</label> <input type="text" class="inputadiP daterangeResorts adip-border" name="daterangeResorts" id="{{prefix}}dateRange" value=""></li>' +

                '<li class="adiFullWp-20 position-relative man_image_ioncs"> <label class="label-onP labelColor nolabel">Travelers</label> <input type="text" ng-model="filterswitcher" class="inputadiP adip-border" ng-click="filtersonoff()" readonly="readonly" id="dropboxadi">' +


                '<div id="drope_box" class="background-color-white P-adi-box-shadow adiFullp padding-20 position-absolute drope_box-css showhidefilters{{showpopupfilters}}  adivaha_hotelbedsactivity_booking_adults">' +

                '<div class="adiFullp margin-bottom-10">' +

                '<div id="packListdiv" style="width:100%">' +

                '<div class="margintopFull" ng-repeat="n in [] | range: noofrooms">' +

                '<div class="packadultscls new-div-add1 nomar" style="width: 45%;float: left;">' +


                '<label class="label-onP" >' + document.getElementById('txt_adults').value + '</label><select name="adults[]" id="{{prefix}}adults_{{n}}" class="form-control backImgUseNew "><option selected="selected" value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div> <div class="packchildsscls  nomar"><label class="label-onP" >' + document.getElementById('txt_children').value + '</label><select name="childs[]" id="{{prefix}}childs_{{n}}" class="form-control changeChildNo backImgUseNew  selectchild" relroom="{{n}}"><option selected="selected" value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div style="clear:both;"></div><div id="{{prefix}}childAgeID_{{n}}" class="packchildagecls age-childAge"></div></div><br>' +
                '</div><div style="clear:both;"></div>' +
                '</div>' +

                '<div class="adiFullp">' +
                '<div class="be-ddn-footer adiFullp" style="background-color:' + document.getElementById('color_filterbutton').value + ';"> <a href="javascript:void(0)" class="" ng-click="hideRoomGroup();">' + document.getElementById('txt_done').value + '</a>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '</li>' +
                '<li class="adiFullWp-14">' +
                '<label class="label-onP nolabel">&nbsp;</label>' +

                '<input class="inputadiP inputadiPColor" style="padding-left: 0px;" type="button" value="Search" ng-click="Search_Activity();">' +

                '</li>' +
                '</ul>' +
                '</div>' +

                '</div>' +

                '<div class="tabpanebackinmg"></div>' + '<div id="iframesize_manager_adivaha_hotelsactivity_booking" style=""></div><div id="iframesize_cal_manager_adivaha_hotelbedsactivity_booking" style=""></div><div id="iframesize_manager_adivaha_hotelsactivity_booking_adults" style=""></div>' +

                '<style>.tabpaneback {background-color: ' + document.getElementById('color_wrapperbackground').value + ';padding-top: ' + document.getElementById('paddingtop').value + ';padding-bottom: ' + document.getElementById('paddingbottom').value + ';padding-left: ' + document.getElementById('paddingleft').value + ';padding-right: ' + document.getElementById('paddingright').value + ';}.labelColor {color: ' + document.getElementById('color_labelcolor').value + '}.inputadiPColor {background-color: ' + document.getElementById('color_filterbutton').value + ';}.show-autocomplete-popup a:hover {color: #fff;background-color: ' + document.getElementById('color_autocompletehover').value + '}.adiFullWp-22{width:22.5%}</style>'

        };
    })

jQuery(function() {
    var prefix = jQuery('#prefix_adivaha_hotelbedsactivity').val();
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

    if (document.getElementById(prefix + "checkIn") != null) {
        var today = new Date();
        var today_Date = new Date(document.getElementById(prefix + "checkIn").value);
        var nextDayDate = new Date(document.getElementById(prefix + "checkOut").value);
        jQuery("#" + prefix + "dateRange").daterangepicker({
            startDate: today_Date,
            endDate: nextDayDate,
            opens: opens,
            autoApply: true,
            minDate: today_Date,
            autoclose: true,
            locale: {
                direction: direction,
                format: 'DD-MMM-YYYY',
                daysOfWeek: daysOfWeek,
                monthNames: monthNames,
                firstDay: 1
            }
        }, function(start, end, label) {
            if (start.format('YYYY-MM-DD') == end.format('YYYY-MM-DD')) {
                end.setDate(start.getDate() + 1);
            }
            jQuery("#" + prefix + "checkIn").val(start.format('YYYY-MM-DD'));
            jQuery("#" + prefix + "checkOut").val(end.format('YYYY-MM-DD'))
        });


        var forResize = document.getElementById('adivaha_hotelbedsactivity_forResize').value;
        jQuery("#" + prefix + "dateRange").on('show.daterangepicker', function(ev, picker) {
            //do something, like clearing an input
            if (forResize == 'Yes') {
                document.getElementById("iframesize_cal_manager_adivaha_hotelbedsactivity_booking").style.height = "0px";
            }
        });
        jQuery("#" + prefix + "dateRange").on('hide.daterangepicker', function(ev, picker) {
            //do something, like clearing an input
            if (forResize == 'Yes') {
                document.getElementById("iframesize_cal_manager_adivaha_hotelbedsactivity_booking").style.height = "0px";
            }
        });

    }


});