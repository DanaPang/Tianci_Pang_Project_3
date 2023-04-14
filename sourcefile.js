var $ = function(id){
    return document.getElementById(id);
}

function showRangeNumber(value) {
    $("resultOfRange").innerHTML = value; 
  }

function validateTXT(){
    var contentID=["firstname","lastname","occupation","myemail","phone"];
    var spanID=["span1","span2","span3","span4","span5"];
    for (i=0;i<contentID.length;i++){
        var valueOfContent=$(contentID[i]).value;
        var spanResult=$(spanID[i]);
        if (valueOfContent==""){
            spanResult.innerHTML="This field is required."
        }else{
            spanResult.innerHTML="";
        }
    }
    const phoneRegex=/^[0-9]{10}$/;
    if (!phoneRegex.test($("phone").value)){
        spanResult.innerHTML="You need to type a 10 digit number";
    }
}

function saveInfo(){
    var contentID=["firstname","lastname","occupation","myemail","phone","comments"];
    var storageID=["st1","st2","st3","st4","st5","st6"];
    for (i=0;i<contentID.length;i++){
        localStorage.setItem(storageID[i],$(contentID[i]).value);
    }
}

function removeInfo(){
    localStorage.clear();
}

var imageSources=["imag1.jpg","imag2.jpg","imag3.png","imag4.jpg","imag5.png"];
var currentImage=0;

function nextPictures(){
    if (currentImage<imageSources.length-1){
        currentImage++;
        $("myImage").src=imageSources[currentImage];
    }    
}

function previousPictures(){
    if (currentImage>0){
        currentImage--;
        $("myImage").src=imageSources[currentImage];
    }    
}