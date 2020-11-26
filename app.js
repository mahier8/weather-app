window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.latitude;
            lat = position.coords.longitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid={7295284e6f47e6531cb18aab0a146408
        }`;
        
        fetch(api)
            .then(response => {
                return response.json();
        })
            .then(data => {
                console.log(data);
            });
        });
    }
});