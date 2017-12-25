function huiFormCheckAttach() {
    //Check region
    var curRegion = $("#hdnCountry").val()//jQuery('#countryPicker').attr("data-value");
    if (curRegion == -1) {
        hui.toast('Please select the country/region of your country'); return false;
    }
    return true;
}

(function ($, doc, $$) {
    function changeCookie(cookieValue,cookieName) {
        if (cookieValue != null && cookieValue != "") {
            $$.cookie(cookieName, cookieValue, { expires: 1000 });
        } else if ($$.cookie(cookieName) != undefined && $$.cookie(cookieName) != "") {
            $$.removeCookie(cookieName);
        }
    }
    $.init();
    $.ready(function () {
        //普通示例
        var userPicker = new $.PopPicker({ buttons: ['Cancel', 'OK'] });
        userPicker.setData(Countries);
        var showUserPickerButton = doc.getElementById('countryPicker');
        //var userResult = doc.getElementById('userResult');
        showUserPickerButton.addEventListener('tap', function (event) {
            userPicker.show(function (items) {
                //userResult.innerText = JSON.stringify(items[0]);
                $$('#countryPicker').html(items[0].text);
                //$$('#countryPicker').attr("data-value", items[0].value);
                $$("#hdnCountry").val(items[0].value);
                changeCookie(items[0].value, "gs-mb-prodiqy-country");
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);

        if ($$.cookie('gs-mb-prodiqy-country') != undefined && $$.cookie('gs-mb-prodiqy-country') != "") {
            userPicker.pickers[0].setSelectedValue($$.cookie('gs-mb-prodiqy-country'));
            if (!!userPicker.getSelectedItems()[0])
            $$('#countryPicker').text(userPicker.getSelectedItems()[0].text);
            $$("#hdnCountry").val($$.cookie('gs-mb-prodiqy-country'));
        }
    });

    hui.ready(function () { hui.formInit(); });
    function submitNow() {
        if (huiFormCheck('#form1')) {
            hui.centerLoading();
            $$("#form1").submit();
        }
    }

    $$("#btnSubmit").click(function () {
        submitNow();
    });

    $$(function () {

        if ($$.cookie('gs-mb-prodiqy-email') != undefined && $$.cookie('gs-mb-prodiqy-email') != "") {
            $$("#txtEmail").val($$.cookie('gs-mb-prodiqy-email'));
        }
        if ($$.cookie('gs-mb-prodiqy-uname') != undefined && $$.cookie('gs-mb-prodiqy-uname') != "") {
            $$("#txtName").val($$.cookie('gs-mb-prodiqy-uname'));
        }

        $$("#txtEmail").on("input propertychange", function() { changeCookie(this.value,"gs-mb-prodiqy-email") });
        $$("#txtName").on("input propertychange", function() { changeCookie(this.value,"gs-mb-prodiqy-uname") });
       
    });
   
})(mui, document, jQuery);

