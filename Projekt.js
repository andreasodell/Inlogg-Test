
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");
  const logInBtn = document.querySelector(".logInBtn");

  logInBtn.addEventListener("click", () => {
    if (username.value === "andreas" && password.value === "hejsan") {
      window.location = "index.html"
    } else {
      alert("Wrong username or password!")
    }
  });
