var nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});
function toggleMenu() {
  document.getElementById('mob').classList.toggle('open');
}
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e, i) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add('on'); }, i * 90);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });
document.querySelectorAll('.reveal').forEach(function(r) { obs.observe(r); });
function handleSubmit() {
  var b = document.querySelector('.fsub');
  b.textContent = 'Message Sent — We\'ll Be In Touch';
  b.style.background = '#2e6b46';
  b.disabled = true;
  setTimeout(function() {
    b.textContent = 'Send Message';
    b.style.background = '';
    b.disabled = false;
  }, 5000);
}
