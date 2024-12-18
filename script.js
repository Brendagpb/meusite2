function scrollToProdutos() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  }
  
  function comprar() {
    alert('Produto adicionado ao carrinho!');
  }
  
  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      alert('Obrigado por se inscrever!');
      document.getElementById('email').value = '';
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  });
  
  const countdownElement = document.getElementById('countdown');
  let tempo = 3600; 
  setInterval(function() {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    countdownElement.innerHTML = `${horas}h ${minutos}m ${segundos}s`;
    tempo--;
    if (tempo <= 0) {
      countdownElement.innerHTML = 'Promoção acabou!';
    }
  }, 1000);
  
  window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});