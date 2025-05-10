// nav start
// nav end
//  abnner start
const messages = [
  "Full-stack web developer...",
  "I build fast, modern websites...",
  "Bootstrap, React, Node.js...",
  "Let's code your dream site."
];
let index = 0, charIndex = 0, isDeleting = false;
const typingDiv = document.getElementById("typing");

function type() {
  const current = messages[index];
  typingDiv.textContent = current.substring(0, charIndex);
  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 80);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % messages.length;
    setTimeout(type, 1000);
  }
}
type();
// banner end
// faq
// ...existing code...

// FAQ ACCORDION
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function() {
    // Collapse any open FAQ except this one
    faqQuestions.forEach(other => {
      if (other !== btn) {
        other.classList.remove('active');
        other.parentElement.querySelector('.faq-answer').classList.remove('open');
        other.querySelector('.faq-toggle').style.transform = 'rotate(0deg)';
      }
    });
    // Toggle this one
    const answer = btn.parentElement.querySelector('.faq-answer');
    btn.classList.toggle('active');
    answer.classList.toggle('open');
    // Chevron rotate
    const icon = btn.querySelector('.faq-toggle');
    if(answer.classList.contains('open')) {
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.style.transform = 'rotate(0deg)';
    }
  });
});
// 