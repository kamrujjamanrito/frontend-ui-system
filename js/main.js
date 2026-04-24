
document.addEventListener("DOMContentLoaded", () => {

  const title = document.querySelector(".hero__title");
  const desc = document.querySelector(".hero__desc");
  const actions = document.querySelector(".hero__actions");

  // simple animation fallback (no GSAP dependency required)
  title.style.opacity = 0;
  desc.style.opacity = 0;
  actions.style.opacity = 0;

  setTimeout(() => {
    title.style.transition = "0.8s ease";
    title.style.opacity = 1;

    setTimeout(() => {
      desc.style.transition = "0.8s ease";
      desc.style.opacity = 1;

      setTimeout(() => {
        actions.style.transition = "0.8s ease";
        actions.style.opacity = 1;
      }, 200);

    }, 200);

  }, 100);

});