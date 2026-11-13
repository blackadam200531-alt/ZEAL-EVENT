
/* College event website: scroll reveal animation */

const revealTargets = document.querySelectorAll(
  '.section, .info-card, .step-card, .event-panel, ' +
  '.faq-list details, .cta, .disclaimer-box'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
} else {
  revealTargets.forEach((element) => {
    element.classList.add('visible');
  });
}
