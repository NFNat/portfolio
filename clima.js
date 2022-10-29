window.addEventListener('load', ()=>{
    if (navigator.geolocation) {
        let lon
        let lat

        let temperaturaValor = document.getElementById('temperatura__valor')
        let temperaturaDescripcion = document.getElementById("temperatura__descripcion")
        let ubicacion = document.getElementById('ubicacion')
        let iconoAnimado = document.getElementById('icono__animado')

        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=b634939825b3c76f8672f97904145bd7&units=metric`
            //const url = `https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=b634939825b3c76f8672f97904145bd7`
            
            fetch(url)
            .then( response => { return response.json()})
            .then (data => {
               
                let temp = Math.round(data.main.temp);
                temperaturaValor.textContent = `${temp} ºC`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc

                let ubic = data.name 
                ubicacion.textContent = ubic

               
               switch (data.weather[0].main) {
                case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }
            })
            .catch (error => {
                console.log(error);
            })

            
        })
    }
})


