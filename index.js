document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  overlay.classList.add('active');
  popup.classList.add('show');
});

function closePopup() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  overlay.classList.remove('active');
  popup.classList.remove('show');

  setTimeout(function() {
    overlay.style.display = 'none';
  }, 500);
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var answer = document.getElementById('answer').value.toLowerCase();
  var modalText = document.getElementById('modalText');
  
  if (answer === 'ну максим') {
      modalText.textContent = 'Ладно, на самом деле я за все тебя люблю) Но особенно за вещи, которых я писал в "Про тебя"';
  } else if (answer === 'ну максиим') {
      modalText.textContent = 'Ладно, на самом деле я за все тебя люблю) Но особенно за вещи, которых я писал в "Про тебя"';
  } else if (answer === 'ну максииим') {
    modalText.textContent = 'Ладно, на самом деле я за все тебя люблю) Но особенно за вещи, которых я писал в "Про тебя"';
}
  else {
      modalText.textContent = 'Неправильно!';
  }
  
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName('close')[0];
  
  modal.style.display = 'block';
  
  span.onclick = function() {
      modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});

