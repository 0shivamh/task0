var range = document.querySelector("#range");

var t= document.querySelector("#triangle");

range.addEventListener("input", function() {
  t.style["border-right-width","border-left-width"]=this.value + "em";

});
