// ==UserScript==
// @name         Checkmarx Grid size fix
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Adding height adjustments to the checkmarx homepage. Should do it by default but can make it happen with a trigger by hitting the '>' key
// @author       You
// @match        https://ckmrxgreen.hallmark.com/CxWebClient/Projects.aspx
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Mutmatt/TamperMonkeyScripts/master/CheckmarxHomepageHeight.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).on('change', '#ctl00_cpmain_ProjectsGrid_ctl00_ctl03_ctl01_PageSizeComboBox_Input', function() {
        console.log("input changed");
        setHeight();
    });

    $(document).on('keypress', function(e) {
        if (e.which === 62) {
            setHeight();
            console.log('key combo pressed ctrl + [' + e.which + ']');
        }
    });

    function setHeight() {
        var ret;
        ret = $("#ctl00_cpmain_ProjectsGrid_GridData").css('height', '100%');
        console.log('setting height 1 ret [' + ret + ']');
        setTimeout(function () {
            ret = $("#ctl00_cpmain_ProjectsGrid_GridData").css('height', '100%');
            console.log('setting height 2 ret [' + ret + ']');
        }, 1500);
    }
    setHeight();
})();