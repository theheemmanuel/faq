const quest = document.querySelectorAll(".qqss");

quest.forEach((e) => {
  const answer = e.querySelector(".answer");
  const icon = e.querySelector(".icon");

  icon.addEventListener("click", () => {
    answer.classList.toggle("active");
  });
});
