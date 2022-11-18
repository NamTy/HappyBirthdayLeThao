timeLeft = 3;

function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  } else {
      window.location = "../HappyBirthdayLeThao/birthday.html";
  }
}

setTimeout(countdown, 1000);
