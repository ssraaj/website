(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{311:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"source-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#source-problems"}},[e._v("#")]),e._v(" Source problems")]),e._v(" "),o("p",[o("strong",[e._v("This page is for when you encounter a problem with a source (built-in or extension).")])]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("It can be accompanied by these error messages:")]),e._v(" "),o("ul",[o("li",[e._v("HTTP Error 5xx")])]),e._v(" "),o("ul",[o("li",[e._v("HTTP Error 4xx")])]),e._v(" "),o("ul",[o("li",[e._v("java.security.cert.CertPathValidatorException")])]),e._v(" "),o("ul",[o("li",[e._v("Page List is empty")])]),e._v(" "),o("ul",[o("li",[e._v("Unable to resolve host")])]),e._v(" "),o("ul",[o("li",[e._v("unexpected url")])]),e._v(" "),o("ul",[o("li",[e._v("Attempt to invoke virtual method 'java.lang.String org.jsoup.nodes.Node.attr(java.lang.String)' on a null object reference")])])]),e._v(" "),o("h2",{attrs:{id:"diagnosis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagnosis"}},[e._v("#")]),e._v(" Diagnosis")]),e._v(" "),o("ol",[o("li",[e._v("Try opening the manga in WebView. If there is CAPTCHA, solve it and see if it helped.")]),e._v(" "),o("li",[e._v('Change your internet connection (switch to WiFi, mobile data or a VPN, use a "What\'s my IP" site to confirm your ip has changed), then try again.')]),e._v(" "),o("li",[e._v("Ask other users to try the action that gives you the error.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Bonus step")]),e._v(" "),o("p",[e._v("Try the latest dev version, your issue may have been fixed. Also check versions of your extensions.")])]),e._v(" "),o("p",[e._v("If any of these help go to "),o("a",{attrs:{href:"#it-only-happens-to-me"}},[e._v("it only happens to me")]),e._v(".\nIf it's not just you, go to "),o("a",{attrs:{href:"#everyone-is-having-this-problem"}},[e._v("everyone is having this problem")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"it-only-happens-to-me"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-only-happens-to-me"}},[e._v("#")]),e._v(" It only happens to me")]),e._v(" "),o("p",[e._v("You may be getting a CAPTCHA, may have been IP-banned, or some other counter-measure that website owners deploy against programs like Tachiyomi. If that is the case, there is probably nothing that can be done about that. Some of them (like CAPTCHA) have to be manually solved, some are temporary (IP bans).")]),e._v(" "),o("p",[o("strong",[e._v("Workarounds that can lower chance of it happening again:")])]),e._v(" "),o("ul",[o("li",[e._v("Don't use downloads with the source.")]),e._v(" "),o("li",[e._v("Have less manga in library from the source.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("All of the above are very imprecise and fuzzy rules, because each site has their own, non-public limits and triggers.")])]),e._v(" "),o("h3",{attrs:{id:"everyone-is-having-this-problem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#everyone-is-having-this-problem"}},[e._v("#")]),e._v(" Everyone is having this problem")]),e._v(" "),o("p",[e._v("In this case it is a problem with the site.")]),e._v(" "),o("ol",[o("li",[e._v("Have a look at open issues "),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("for the app"),o("OutboundLink")],1),e._v(" and/or "),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi-extensions/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("It may have been fixed already, but not released yet, so look at closed issues ("),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("app"),o("OutboundLink")],1),e._v(" / "),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(") issues as well.")]),e._v(" "),o("li",[e._v("If you can't find the issue there, open a new one.")])]),e._v(" "),o("h2",{attrs:{id:"solving-a-captcha"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solving-a-captcha"}},[e._v("#")]),e._v(" Solving a CAPTCHA "),o("Badge",{attrs:{text:"0.8.4 +",vertical:"middle"}})],1),e._v(" "),o("p",[e._v("Please note that WebView is not the same as using your browser.\nWebView is a new feature introduced in stable version "),o("code",[e._v("0.8.4")]),e._v(" to allow\nfor log-in only features and solving CAPTCHA.")]),e._v(" "),o("p",[e._v("You can find the web view option by opening a manga, then tapping the 3 dots in the top right while in the "),o("code",[e._v("Info")]),e._v(" tab. If you have no existing manga from the source, go to "),o("code",[e._v("Catalogues")]),e._v(", press "),o("code",[e._v("Browse")]),e._v(" beside the source, and open a manga, following the above instructions.")]),e._v(" "),o("p",[e._v("Once you are in WebView, you will see a webpage and a bar on top with an arrow at the left side, pointing to the left edge of your screen.\nIf there is no CAPTCHA on the webpage, initiate one by tapping a manga title, if possible. Once a CAPTCHA is shown, solve it. After that, use the aforementioned back arrow on the bar at the top of your screen to go back to your manga. Please do not use the back button on your phone as it does not work as expected.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If WebView doesn't work for you, please update the "),o("code",[e._v("Android System WebView")]),e._v(" app through "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.webview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Play Store"),o("OutboundLink")],1),e._v(", then go to "),o("a",{attrs:{href:"https://developer.android.com/studio/debug/dev-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Options"),o("OutboundLink")],1),e._v(" in your phone's settings and set WebView Implementation to Android System WebView.")])]),e._v(" "),o("figure",{staticClass:"centered"},[o("img",{attrs:{src:e.$withBase("/assets/media/openinwebview.jpg")}})])])}),[],!1,null,null,null);t.default=a.exports}}]);