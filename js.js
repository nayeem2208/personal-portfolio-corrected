const postUrl = 'https://script.google.com/macros/s/AKfycbwNO_dleTuKfbqikJLr0cfWoJL8aP6ELDua92f2k3MUIlk0KwXbHDmAJpFKDRAnTDJI/exec';

const form = document.getElementById("gform");

form.addEventListener('submit', (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        submitForm();
    }
});


function submitForm() {
    //Get the form data
    var data = new FormData(form);

    //Create XMLHttpRequest
    var xhr = new XMLHttpRequest();

    //Open the connection and send the data to the server
    xhr.open("POST", postUrl);
    xhr.send(data);

    xhr.onload = () => {
        alert('The message been sent successfully!');
    }
}
