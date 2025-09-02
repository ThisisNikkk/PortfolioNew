const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = submitBtn.querySelector(".btn__text");
const btnLoader = submitBtn.querySelector(".btn__loader");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Loader effect start
  btnText.style.display = "none";
  btnLoader.style.display = "inline-block";

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        Toastify({
          text: "Message Sent Successfully!",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          backgroundColor: "white",
          color: "black",
          className: "toast-success",
        }).showToast();
        form.reset();
      } else {
        Toastify({
          text: "Something went wrong. Please try again.",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          backgroundColor: "#d63031",
          color: "black",
          className: "toast-failure",
        }).showToast();
      }
    })
    .catch(() => {
      Toastify({
        text: "Network error. Please try again.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#d63031",
        color: "black",
        className: "toast-failure",
      }).showToast();
    })
    .finally(() => {
      // Loader effect stop
      btnText.style.display = "inline-block";
      btnLoader.style.display = "none";
    });
});
