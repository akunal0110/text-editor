document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("text");
  const darkModeBtn = document.getElementById("darkModeBtn");

  // Formatting buttons
  const buttons = [
    "bold", "italic", "underline", "strikethrough",
    "justifyLeft", "justifyRight", "justifyCenter", "justifyFull",
    "unorderedList", "increaseFontSize", "decreaseFontSize",
    "copyBtn", "resetBtn"
  ];

  buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener("click", function () {
      switch (id) {
        case "bold": document.execCommand("bold"); break;
        case "italic": document.execCommand("italic"); break;
        case "underline": document.execCommand("underline"); break;
        case "strikethrough": document.execCommand("strikethrough"); break;
        case "justifyLeft": document.execCommand("justifyLeft"); break;
        case "justifyRight": document.execCommand("justifyRight"); break;
        case "justifyCenter": document.execCommand("justifyCenter"); break;
        case "justifyFull": document.execCommand("justifyFull"); break;
        case "unorderedList": document.execCommand("insertUnorderedList"); break;
        case "increaseFontSize":
          text.style.fontSize = (parseInt(getComputedStyle(text).fontSize) + 1) + "px";
          break;
        case "decreaseFontSize":
          text.style.fontSize = (parseInt(getComputedStyle(text).fontSize) - 1) + "px";
          break;
        case "copyBtn":
          navigator.clipboard.writeText(text.innerText);
          break;
        case "resetBtn":
          text.innerHTML = "";
          break;
      }
    });
  });

  // 🌙 Dark Mode Toggle
  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});
