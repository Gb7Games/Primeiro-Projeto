function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/ChatGPT Image 22 de jun. de 2026, 18_28_58.png",
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/ChatGPT Image 22 de jun. de 2026, 18_34_17.png",
    )
  }
}
