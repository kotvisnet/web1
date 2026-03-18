document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('.tab-panel');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
      panels.forEach((panel) => panel.classList.toggle('hidden', panel.id !== tab));
    });
  });

  const calcBtn = document.getElementById('calcBtn');
  const area = document.getElementById('area');
  const result = document.getElementById('result');

  if (calcBtn && area && result) {
    calcBtn.addEventListener('click', () => {
      const m2 = Number(area.value) || 0;
      const cement = Math.ceil(m2 * 0.7);
      result.textContent = `Для ${m2} м² примерно нужно ${cement} кг сухой смеси.`;
    });
  }
});
