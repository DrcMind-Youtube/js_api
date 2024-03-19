const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const fenetreDiv = document.querySelector(".video");

  const pipWindow = await documentPictureInPicture.requestWindow({
    width: 600,
    height: 500,
  });

  [...document.styleSheets].forEach((styleSheet) => {
    try {
      const cssRules = [...styleSheet.cssRules]
        .map((rule) => rule.cssText)
        .join("");
      const style = document.createElement("style");

      style.textContent = cssRules;
      pipWindow.document.head.appendChild(style);
    } catch (e) {
      const link = document.createElement("link");

      link.rel = "stylesheet";
      link.type = styleSheet.type;
      link.media = styleSheet.media;
      link.href = styleSheet.href;
      pipWindow.document.head.appendChild(link);
    }
  });

  pipWindow.document.body.append(fenetreDiv);
});
