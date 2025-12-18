let searchBtn=document.getElementById("searchBtn");

searchBtn.addEventListener("click",()=>{
    let city=document.getElementById("cityInput").value.trim();
    if(city===""){
        alert("Please enter a city name");
        return;
    }  

    window.location.href=`destination.html?city=${city}`;
});