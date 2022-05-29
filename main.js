function digitalClock() {
  let time = new Date();
  hrs = time.getHours();
  mins = time.getMinutes();
  secs = time.getSeconds();

  function addZero(e) {
    if (e < 10) {
      e = '0' + e;
    }
    return e;
  }
  document.querySelectorAll('.clock')[0].innerHTML = addZero(hrs) + ':' + addZero(mins) + ':' + addZero(secs);
  setTimeout(digitalClock, 1000);
}
digitalClock();
