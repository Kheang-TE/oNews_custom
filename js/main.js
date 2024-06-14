// on attend que le DOM soit chargé pour exécuter le handler (`function () {}`)
window.addEventListener('DOMContentLoaded', () => {
  // une fois qu'on est prêt,
  // on lance le script pour gérer la newsletter
  newsletter.init();

  const sidebarBtn = document.getElementById('sidebar-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });
  sidebarCloseBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});