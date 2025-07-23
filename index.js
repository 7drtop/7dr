function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

window.onload = () => {
  showPage('home'); // أول صفحة تظهر لما يدخل الموقع
};
