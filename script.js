const countUp = (element) => {
  const target = Number(element.dataset.count || 0);
  const duration = 1200;
  const startTime = performance.now();

  const updateCount = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);
    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  requestAnimationFrame(updateCount);
};

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const statNumbers = document.querySelectorAll(".stat-number");
statNumbers.forEach((item) => countUp(item));
