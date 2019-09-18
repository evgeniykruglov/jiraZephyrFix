// ==UserScript==
// @name         JIRA Zephyr Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix Zephyr styles
// @author       Sergey Mayorov
// @match        http://jira.development.dictate.it:8080/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==


GM_addStyle ( `
    #project-config-versions-add.aui,
    #project-config-panel-versions.project-config-panel {
           max-height: 100%;
    }

    #testDetailGrid .table-container-wrapper {
            height: 100%;
            max-height: max-content;
            height: max-content;
    }
    #testDetailGrid .grid-column:not(.orderId-column):not(.attachmentsMap-column), #testDetailGridPopover .grid-column:not(.orderId-column):not(.attachmentsMap-column) {
        min-width: 30% !important;
    }
    #unfreezedGrid .grid-column[data-columnkey="data"] > div, #unfreezedGrid .grid-column[data-columnkey="result"] > div, #unfreezedGrid .grid-column[data-columnkey="step"] > div, #freezedGrid .grid-column[data-columnkey="data"] > div, #freezedGrid .grid-column[data-columnkey="result"] > div, #freezedGrid .grid-column[data-columnkey="step"] > div, .grid-column[data-columnkey="htmlStep"] > div, .grid-column[data-columnkey="htmlData"] > div, .grid-column[data-columnkey="htmlResult"] > div, .grid-column[data-columnkey="htmlStep"], .grid-column[data-columnkey="htmlData"], .grid-column[data-columnkey="htmlResult"], .grid-column[data-columnkey="data"], .grid-column[data-columnkey="result"], .grid-column[data-columnkey="step"] {
        max-width: 100% !important;
    }
    #viewissuesidebar {
        width: 23% !important;
    }

` );


