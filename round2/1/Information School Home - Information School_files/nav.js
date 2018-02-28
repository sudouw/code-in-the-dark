<!--
var selectedNav0;

function collapseNav(navRoot) {
	for(var n = 0; n < navRoot.childNodes.length; n++) {
		var cur = navRoot.childNodes[n];
		if(cur.nodeName == "LI") {
			var childList = cur.getElementsByTagName("ul")[0];
			if(!childList) continue;
			var text = cur.getElementsByTagName("span")[0];
			if(!text) continue;
			
			childList.open = false;
			childList.realHeight = childList.offsetHeight;
			childList.curHeight = 1;
			childList.style.height = "1px";
			childList.style.overflow = "hidden";
			childList.style.display = "none";
			if(cur.className == "navSel") {	clickNav(childList); }
			text.onclick = clickNavClosure(childList);
		}
	}
}
function clickNavClosure(e) { return function() { clickNav(e); } }

function clickNav(childList) {
	if(!childList.open) {
		childList.style.display = "block";
		childList.open = true;
		resizeList(childList);
	}
	if(selectedNav0) {
		selectedNav0.open = false;
		resizeList(selectedNav0);
	}
	selectedNav0 = ( (childList == selectedNav0) ? null : childList);
}

function resizeList(ul) {
	var direction  = (ul.open ? 1 : -1);
	ul.curHeight += direction * 20; // pixels per resize step
	if(ul.curHeight > ul.realHeight) ul.curHeight = ul.realHeight;
	if(ul.curHeight < 1) ul.curHeight = 1;
	ul.style.height = ul.curHeight + "px";
	
	if( ((ul.curHeight > 1) && !ul.open) || ((ul.curHeight < ul.realHeight) && ul.open) )
		setTimeout(function() { resizeList(ul); }, 1); // delay between resize cycles
	else if( !ul.open) ul.style.display = "none";
}

// -->
/*
     FILE ARCHIVED ON 04:49:52 Mar 17, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:50:00 Feb 24, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/