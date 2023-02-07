"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", (e) => register(e));

function register(e) {
  if (!id.value) return alert("Please enter your id");
  if (password.value !== confirmPassword.value) {
    return alert("Passwords do not match");
  }

  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };

  e.preventDefault();

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("Register Error!");
      console.log(err);
    });
}
