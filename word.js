function query() {
window.load;
$(document).ready(function(){
let Search = document.getElementById('lookup');
Search.addEventListener('click', function(){

	var country_List= document.getElementById('country').value;
    var search= document.getElementById('search').value;
        if(search.lu ==false){
		var x = new XMLHttpRequest();
  x.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = this.responseText;
    }
  };

  x.open("GET", "world.php?country=${country}", true);
  x.send();

} 
else if(search.lu == true){
   var x = new XMLHttpRequest();
  x.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = this.responseText;
    }
  };

  x.open("GET", "world.php?country=${country}", true);
  x.send();
