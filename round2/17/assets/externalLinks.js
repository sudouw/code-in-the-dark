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
