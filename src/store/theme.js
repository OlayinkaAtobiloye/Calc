export const setTheme1 = () => {
  var r = document.querySelector(":root");
  r.style.setProperty("--blue", "lightblue");
  r.style.setProperty("--toggle-background", "hsl(223, 31%, 20%)");
  r.style.setProperty("--toggle-button", "hsl(6, 63%, 50%)");
  r.style.setProperty("--toggle-button-shadow", "hsl(6, 70%, 34%)");
  r.style.setProperty("--textcol1", "white");
  r.style.setProperty("--main1", "hsl(222, 26%, 31%)");
  r.style.setProperty("--keypad1", "hsl(30, 25%, 89%)");
  r.style.setProperty("--shadow1", "hsl(28, 16%, 65%)");
  r.style.setProperty("--text-color", "hsl(60, 10%, 19%)");
  r.style.setProperty("--button-dark-blue", "hsl(225, 21%, 49%)");
  r.style.setProperty("--button-dark-blue-shadow", "hsl(224, 28%, 35%)");
  r.style.setProperty("--result-background", "hsl(223, 31%, 20%)");
  return 1;
};

export const setTheme2 = () => {
  var r = document.querySelector(":root");
  r.style.setProperty("--toggle-background", "hsl(0, 5%, 81%)");
  r.style.setProperty("--toggle-button", "hsl(25, 98%, 40%)");
  r.style.setProperty("--toggle-button-shadow", "hsl(25, 99%, 27%)");
  r.style.setProperty("--textcol1", "black");
  r.style.setProperty("--main1", "hsl(0, 0%, 93%)");
  r.style.setProperty("--keypad1", "hsl(45, 7%, 89%)");
  r.style.setProperty("--shadow1", "hsl(35, 11%, 61%)");
  r.style.setProperty("--text-color", "hsl(60, 10%, 19%)");
  r.style.setProperty("--button-dark-blue", "hsl(185, 42%, 37%)");
  r.style.setProperty("--button-dark-blue-shadow", "hsl(185, 58%, 25%)");
  r.style.setProperty("--result-background", "white");
  return 2;
};

export const setTheme3 = () => {
  var r = document.querySelector(":root");
  r.style.setProperty("--toggle-background", "hsl(268, 71%, 12%)");
  r.style.setProperty("--toggle-button", "hsl(176, 100%, 44%)");
  r.style.setProperty("--toggle-button-shadow", "hsl(25, 99%, 27%)");
  r.style.setProperty("--textcol1", "hsl(52, 100%, 62%)");
  r.style.setProperty("--main1", "hsl(268, 75%, 9%)");
  r.style.setProperty("--keypad1", "hsl(268, 71%, 12%)");
  r.style.setProperty("--shadow1", "hsl(290, 70%, 36%)");
  r.style.setProperty("--text-color", "hsl(52, 100%, 62%)");
  r.style.setProperty("--button-dark-blue", "hsl(281, 89%, 26%)");
  r.style.setProperty("--button-dark-blue-shadow", "hsl(285, 91%, 52%)");
  r.style.setProperty("--result-background", "hsl(268, 71%, 12%)");
  return 3;
};

export function setColorScheme(scheme) {
  switch (scheme) {
    case "dark":
      setTheme3();
      return 3;
    case "light":
      setTheme2();
      return 2;
    default:
      setTheme1();
      return 1;
  }
}

export function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  return "light";
}

//   export function setMediaScheme(){
//   if(window.matchMedia){
//     var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     colorSchemeQuery.addEventListener('change', () => setColorScheme(getPreferredColorScheme()));
//     return setColorScheme(getPreferredColorScheme());
// }
// }
