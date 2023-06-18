const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');


const getinfo = async(event) =>{
    event.preventDefault();
   let cityval  = cityname.value;

    
   if(cityval === ""){
      city_name.innerText = `please write the name before search`;
   }else{
    try{
    let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=fb639b8ca84772497886688ea5a7b755`
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];
    console.log(data);
    
    city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
    temp_real_val.innerText = arrData[0].main.temp;
    // temp_status.innerText = arrData[0].weather[0].main;
   }catch{
      city_name.innerText = `please enter the city name properly`
   }
}
}  

submitBtn.addEventListener('click', getinfo);