fetch('https://www.balldontlie.io/api/v1/teams')
    .then((res) => res.json())
    .then(data => {
        data.forEach(user => {
            const markup = `<li>${user.city}</li>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
        })
    });
    




