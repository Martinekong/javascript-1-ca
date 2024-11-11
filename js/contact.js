const submitBtn = document.getElementById("submit-btn");
const submitMessage = document.getElementById("submit-message")

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name")
  const lastName = document.getElementById("last-name")
  const email = document.getElementById("email")
  const subject = document.getElementById("subject")
  const message = document.getElementById("message")

  if (
    firstName.value.trim() &&
    lastName.value.trim() &&
    email.value.trim() &&
    subject.value.trim() &&
    message.value.trim()
  ) {
    submitMessage.textContent = "Message Submitted!"
    submitMessage.classList.remove("error")
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } else {
    submitMessage.textContent = "You need to fill out all fields"
    submitMessage.classList.add("error")
    }
  });