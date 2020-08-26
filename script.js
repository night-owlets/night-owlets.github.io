const comingSoonHeading = document.querySelector('#coming-soon-heading');

comingSoonHeading.addEventListener('mouseover', () =>
  comingSoonHeading.classList.add('animate__animated', 'animate__tada')
);

comingSoonHeading.addEventListener('mouseleave', () =>
  comingSoonHeading.classList.remove('animate__animated', 'animate__tada')
);
