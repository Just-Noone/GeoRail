let translations = {};

// Function to fetch the translations from the JSON file
const loadTranslations = async () => {
  try {
    const response = await fetch('/public/assets/lang/translations.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    translations = await response.json();
    console.log('Translations loaded:', translations); // Check if translations are loaded
  } catch (error) {
    console.error('Error loading translations:', error);
  }

  const loadTranslations = async () => {
    try {
      console.log('Attempting to fetch translations...');  // Add this line
      const response = await fetch('/public/assets/lang/translations.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      translations = await response.json();
      console.log('Translations loaded:', translations);  // Log the fetched translations
    } catch (error) {
      console.error('Error loading translations:', error);  // Log any errors
    }
  };
  
};

// Function to set the language and update the text content
const setLanguage = (language) => {
  if (!translations[language]) {
    console.error(`Translations for language ${language} not found`);
    return;
  }

  const translation = translations[language];

  document.getElementById("nav_about").textContent = translation.nav_about;
  document.getElementById("nav_server").textContent = translation.nav_server;
  document.getElementById("nav_dynmap").textContent = translation.nav_dynmap;
  document.getElementById("nav_sysmap").textContent = translation.nav_sysmap;
  document.getElementById("nav_joininstructions").textContent = translation.nav_joininstructions;
  document.getElementById("nav_discord").textContent = translation.nav_discord;
  document.getElementById("nav_cities").textContent = translation.nav_cities;
  document.getElementById("nav_railways").textContent = translation.nav_railways;
  document.getElementById("hero_title1").textContent = translation.hero_title1;
  document.getElementById("hero_title2").textContent = translation.hero_title2;
  document.getElementById("hero_about").textContent = translation.hero_about;
  document.getElementById("hero_announcement_title").textContent = translation.hero_ann_title;
  document.getElementById("hero_announcement_text").textContent = translation.hero_ann_sub;
  document.getElementById("cookies_text").textContent = translation.cookies_text;
  document.getElementById("ss_title1").textContent = translation.ss_title1;
  document.getElementById("ss_title2").textContent = translation.ss_title2;
  document.getElementById("ss_about").textContent = translation.ss_about;
  document.getElementById("cookies_close").textContent = translation.cookies_close;
  document.getElementById("cookies_close_decl").textContent = translation.cookies_close_decl;
  document.getElementById("about_title").textContent = translation.about_title;
  document.getElementById("abt1").textContent = translation.about_text1;
  document.getElementById("abt2").textContent = translation.about_text2;
  document.getElementById("abt3").textContent = translation.about_text3;
  document.getElementById("abt4").textContent = translation.about_text4;
  document.getElementById("abt5").textContent = translation.about_text5;
  document.getElementById("ssb_title").textContent = translation.ssb_title;
};

// Event listener for the language selector
document.getElementById("languageSelect").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

// Load translations when the page loads and set the default language
window.addEventListener('load', async () => {
  await loadTranslations();
  setLanguage(document.getElementById("languageSelect").value); // Set the default selected language
});
