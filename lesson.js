let uan= document.getElementById('UAN'),
    inusd = document.getElementById('USD');

uan.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'lesson.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); 

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inusd.value = uan.value / data.usd;
        } else {
            inusd.value = "Что-то пошло не так!!!";
        }
    });
});