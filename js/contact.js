import { displayOverlayMessage } from "./utils.js";

const submitBtn = document.getElementById("submit-btn");

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
    displayOverlayMessage("Message Submitted!")
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } else {
    displayOverlayMessage("You need to fill out all fields")
    }
  });