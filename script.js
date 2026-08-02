(() => {
  const root = document.documentElement;
  const languageButton = document.querySelector("[data-language-toggle]");
  let language = "ar";

  const applyLanguage = () => {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    languageButton.textContent = language === "ar" ? "EN" : "عربي";
    languageButton.setAttribute("aria-label", language === "ar" ? "Switch to English" : "التبديل إلى العربية");
  };

  languageButton.addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";
    applyLanguage();
  });

  applyLanguage();
})();
