document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            const responseDiv = document.getElementById('response');
            responseDiv.innerHTML = `<p>${data.answer}</p><img src="${data.image}" alt="Yes or No Image">`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('response').innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        });
}); 