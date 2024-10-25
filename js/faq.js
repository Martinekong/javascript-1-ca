const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faqItem) => {
  const faqBtn = faqItem.querySelector(".faq-btn");
  const faqAnswer = faqItem.querySelector(".faq-answer");

  faqBtn.addEventListener("click", () => {
    faqAnswer.classList.toggle("visible");

    faqItems.forEach((item) => {
      if (item !== faqItem) {
        item.querySelector(".faq-answer").classList.remove("visible");
      }
    });
  });
});