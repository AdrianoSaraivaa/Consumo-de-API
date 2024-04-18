document.getElementById('cidade').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const entrada = document.getElementById('entrada').value;
    const chave = '777fd6c175f16899b669ab9b22be7638'; // Chave do Professor

    // URL da API
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&appid=${chave}&units=metric`;

    // Requisição para a API
    fetch(Url)
        .then(response => response.json())
        .then(data => {
            
            const weather = document.getElementById('Informaçãodotempo');
            weather.innerHTML = `
                <p>Temperatura Máxima: ${data.main.temp_max}°C</p>
                <p>Temperatura Mínima: ${data.main.temp_min}°C</p>
                <p>Sensação Térmica: ${data.main.feels_like}°C</p>
                <p>Condição: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.log('Erro ao buscar dados da API:', error));
});
