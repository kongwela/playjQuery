function loadRepo(){
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
   if(this.readyState == 4&& this.status == 200){
     results=JSON.parse(this.responseText);
     for(var i=0;i<results.length;i++){
         console.log(results[i].name);
        }  
    }       
}

xhttp.open("GET", "https://api.github.com/users/kongwela/repos", true )
xhttp.send();
}