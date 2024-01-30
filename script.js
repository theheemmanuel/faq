const quest = document.querySelectorAll(".qqss");

quest.forEach((e) => {
  const answer = e.querySelector(".answer");
  const icon = e.querySelector(".icon");
  const icon2 = e.querySelector(".icon2");

  icon.addEventListener("click", () => {
    answer.classList.toggle("active");
    icon.classList.toggle("active");
    icon2.classList.toggle("active");
  });

  icon2.addEventListener("click", () => {
    answer.classList.toggle("active");
    icon.classList.toggle("active");
    icon2.classList.toggle("active");
  });
});
