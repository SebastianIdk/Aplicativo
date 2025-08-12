(function () {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const closeBtn2 = document.getElementById('closeModal2');
  const backdrop = document.getElementById('backdrop');

  const openModal = () => {
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      (closeBtn || closeBtn2)?.focus();
    }, 10);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    openBtn.focus();
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  closeBtn2.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
})();
