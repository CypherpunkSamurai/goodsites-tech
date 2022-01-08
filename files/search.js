var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("srch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("sites");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

}
/*
     FILE ARCHIVED ON 07:25:55 Dec 31, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:12:40 Jan 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 132.847
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.114
  cdx.remote: 0.076
  esindex: 0.013
  LoadShardBlock: 98.874 (3)
  PetaboxLoader3.datanode: 64.351 (4)
  CDXLines.iter: 17.489 (3)
  load_resource: 148.92
  PetaboxLoader3.resolve: 111.849
*/