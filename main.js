const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  if (navigator.canShare) {
    try {
      await navigator.share({
        title: "API de partage",
        text: "C'est parti !",
        url: window.location.href,
      });
    } catch (error) {
      console.log(error);
    }
  }
});
