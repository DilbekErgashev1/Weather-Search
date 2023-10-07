function myFunc(){
    let row = document.querySelector('.row');
    let name = document.querySelector('.searchInp');
    row.innerHTML = ''
    if (name.value == '') {
        alert("Maydonni to'ldiring!")
    } else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name.value}&appid=49a39b49462b6e8624780044f4a883ec`, () => {
            method: "GET"
        }).then(response => response.json())
        .then(data => {
                console.log(data);
                row.innerHTML = `
                <div class="col">
                <div class="col-6 bigTarget">
                <h5 class="p-0 m-0">${data.name} <span class="p-0 m-0">${data.sys.country}</span></h5>
                <p class="targetone p-0 m-0">Weather: ${data.weather[0].main}</p>
                <p class="targetwo p-0 m-0">${data.weather[0].description}</p>
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center">
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="photo"></img>
                </div>
                </div>
                `
        });
    }
}













