let container = document.getElementById("searchedTimeZone");

let timeZoneName = document.getElementById("timeZoneName");
let lati = document.getElementById("lat");
let longi = document.getElementById("long");
let std = document.getElementById("std");
let stdSeconds = document.getElementById("stdSeconds");
let dst = document.getElementById("dst");
let dstSeconds = document.getElementById("dstSeconds");
let country = document.getElementById("country");
let postcode = document.getElementById("postcode");
let city = document.getElementById("city");



let timeZoneName1 = document.getElementById("timeZoneName1");
let lati1 = document.getElementById("lat1");
let longi1 = document.getElementById("long1");
let std1 = document.getElementById("std1");
let stdSeconds1 = document.getElementById("stdSeconds1");
let dst1 = document.getElementById("dst1");
let dstSeconds1 = document.getElementById("dstSeconds1");
let country1 = document.getElementById("country1");
let postcode1 = document.getElementById("postcode1");
let city1 = document.getElementById("city1");


var lat, lon;
document.addEventListener("DOMContentLoaded", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            fetching(lat, lon);
        })
    }
});

function fetching(lat, lon) {
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=512315b5170d45c5a36c3ad4b925e9b0`)
        .then(resp => resp.json())
        .then((result) => {
            console.log(result.results[0]);
            timeZoneName.innerText = result.results[0].timezone.name;
            lati.innerText = result.results[0].lat;
            longi.innerText = result.results[0].lon;
            std.innerText = result.results[0].timezone.offset_STD;
            stdSeconds.innerText = result.results[0].timezone.offset_STD_seconds;
            dst.innerText = result.results[0].timezone.offset_DST;
            dstSeconds.innerText = result.results[0].timezone.offset_DST_seconds;
            country.innerText = result.results[0].country;
            postcode.innerText= result.results[0].postcode;
            city.innerText = result.results[0].city;

        }).catch(err=>console.log("error",err));
}


function showResult(){

    let inputAddress = document.getElementById("inputAddress");
    let inputValue = inputAddress.value;

    let search = document.getElementById("search");
    if(inputValue==""){
        container.style.display="none";
        let para = document.createElement("p");
        para.innerText = "Please Enter Address";
        para.style.color ="red";
        search.append(para);
    }
    else{
                
        
        
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${inputValue}&format=json&apiKey=512315b5170d45c5a36c3ad4b925e9b0`)
        .then(resp => resp.json())
        .then((result) => {
            console.log(result);
            console.log(22222);
            timeZoneName1.innerText = result.results[0].timezone.name;
            lati1.innerText = result.results[0].lat;
            longi1.innerText = result.results[0].lon;
            std1.innerText = result.results[0].timezone.offset_STD;
            stdSeconds1.innerText = result.results[0].timezone.offset_STD_seconds;
            dst1.innerText = result.results[0].timezone.offset_DST;
            dstSeconds1.innerText = result.results[0].timezone.offset_DST_seconds;
            country1.innerText = result.results[0].country;
            postcode1.innerText= result.results[0].postcode;
            city1.innerText = result.results[0].city;

        })
        .catch(err => console.log("error",err));
        container.style.display="contents";
    }

}
