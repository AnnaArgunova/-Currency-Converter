let uan= document.getElementById('UAN'),
    inusd = document.getElementById('USD');

uan.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){

    let request = new XMLHttpRequest();

    request.open('GET', 'lesson.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); 

    request.onload = function() {

        if(request.readyState === 4) {
            if(request.status == 200) {
                resolve(this.response)
            }
            else {
                reject();
            
            }
    }
}
});
};

catchData()
.then(response => {
console.log(response);
        let data = JSON.parse(response);
        inusd.value = uan.value / data.usd;
})

.then(() => console.log(5000))
.catch(() => inusd.value = "Что-то пошло не так!!!")

});
    
