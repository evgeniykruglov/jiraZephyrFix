// ==UserScript==
// @name         Metanit Dark theme Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix Zephyr styles
// @author       Sergey Mayorov
// @match        https://metanit.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==


GM_addStyle ( `
	:root[theme='dark'] {
    --body-bg-color: #000;
    --container-bg-color: #222;
    --menc-bg-color: #333;
}

` );


