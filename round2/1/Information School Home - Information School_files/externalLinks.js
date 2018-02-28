//Allows pages to conform to web standards for opening new windows
//(target="_blank") is no longer allowed as opening new windows is outside
//the scope of xhtml. This script allows you to type rel="external" inside 
//an <a> tag
function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}
window.onload = externalLinks;
/*
     FILE ARCHIVED ON 18:44:33 Mar 25, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:55:06 Feb 24, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/