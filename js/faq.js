const faqBtn = document.querySelectorAll(".faq-btn");
const faqAnswer = document.querySelectorAll(".faq-answer");

faqBtn.forEach((faqBtn) => {
  faqBtn.addEventListener("click", () => {
    faqAnswer.forEach((faqAnswer) => {
      faqAnswer.classList.toggle("visible")
    });
  })
})