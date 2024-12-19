
function startCountdown() {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; 
    const countdownElement = document.getElementById("tempo-restante");
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = endTime - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "A promoção acabou!";
      } else {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
  
  startCountdown();

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; 
    startCountdown(endTime);
    document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);
  });