const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function(event) {
    return 'Hee Hee thats tickles'
  });
}

function clickAlert() {
    alert('Hee Hee thats tickles');
}
input.addEventListener('click' , clickAlert);
