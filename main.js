const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  if ("EyeDropper" in window) {
    // The API is available!
    const eyeDropper = new EyeDropper();

    try {
      const result = await eyeDropper.open();
      // The user selected a pixel, here is its color:
      const colorHexValue = result.sRGBHex;
      const p = document.querySelector("p");
      p.textContent = `Couleur choisie : ${colorHexValue}`;
      p.style.color = colorHexValue;
    } catch (err) {
      // The user escaped the eyedropper mode.
    }
  }
});
