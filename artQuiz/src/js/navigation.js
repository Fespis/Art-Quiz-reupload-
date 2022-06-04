export { nav };

function nav() {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  const page5 = document.querySelector(".page5");
  const page6 = document.querySelector(".page6");
  const page7 = document.querySelector(".page7");

  const logoIconHome1 = document.querySelector(".logo-icon-home1");
  const logoIconHome2 = document.querySelector(".logo-icon-home2");
  const logoIconHome3 = document.querySelector(".logo-icon-home3");
  const page1Settings = document.querySelector(".settings-icon");
  const page1ArtistQuiz = document.querySelectorAll(".button-main-page");
  const page1PicturesQuiz = document.querySelectorAll(".button-main-page");
  const page2SettingsBack = document.querySelector(".settings-back-text");
  const page3SettingsBack = document.querySelector(".page3-settings");
  const page3ImageHome = document.querySelector(".page3-header-navigations");
  const page4SettingsBack = document.querySelector(".page4-settings");
  const page4ImageHome = document.querySelector(".page4-header-navigations");
  const page5HeaderClose = document.querySelector(".page5-header-close");
  const page5LastMenuHome = document.querySelector(".page5-last-menu-button-home");
  const page5LastMenuNext = document.querySelector(".page5-last-menu-button-next");
  const page5ExitGame = document.querySelector(".page5-exit-game");
  const page5ExitGameExit = document.querySelector(".page5-exit-game-exit");
  const page5ExitGameCancel = document.querySelector(".page5-exit-game-cancel");
  const page5ExitGameClose = document.querySelector(".page5-exit-game-close");

  const page6HeaderClose = document.querySelector(".page6-header-close");
  const page6LastMenuHome = document.querySelector(".page6-last-menu-button-home");
  const page6LastMenuNext = document.querySelector(".page6-last-menu-button-next");
  const page6ExitGame = document.querySelector(".page6-exit-game");
  const page6ExitGameExit = document.querySelector(".page6-exit-game-exit");
  const page6ExitGameCancel = document.querySelector(".page6-exit-game-cancel");
  const page6ExitGameClose = document.querySelector(".page6-exit-game-close");
  const page7Settings = document.querySelector(".page7-settings");
  const page7ImageHome = document.querySelector(".page7-header-navigations");

  //====================All Page (Logo Icon)
  function navGoHome(somePage) {
    page1.classList.remove("hidden");
    page1.classList.add("block");
    somePage.classList.remove("block");
    somePage.classList.add("hidden");
  }

  logoIconHome1.addEventListener("click", () => {
    navGoHome(page3);
  });
  logoIconHome2.addEventListener("click", () => {
    navGoHome(page4);
  });
  logoIconHome3.addEventListener("click", () => {
    navGoHome(page7);
  });

  //====================Page1 (Main Menu)
  function navGoOnSomePage(somePage, currentPage) {
    somePage.classList.remove("hidden");
    somePage.classList.add("block");
    currentPage.classList.remove("block");
    currentPage.classList.add("hidden");
  }
  function hiddenSomePage(somePage) {
    somePage.classList.remove("block");
    somePage.classList.add("hidden");
  }

  page1Settings.addEventListener("click", () => {
    navGoOnSomePage(page2, page1);
  });

  page1ArtistQuiz[0].addEventListener("click", () => {
    navGoOnSomePage(page3, page1);
  });

  page1PicturesQuiz[1].addEventListener("click", () => {
    navGoOnSomePage(page4, page1);
  });

  //====================Page2 (Settings)
  page2SettingsBack.addEventListener("click", () => {
    navGoOnSomePage(page1, page2);
  });

  //====================Page3 (Artists Quiz Categories)
  page3SettingsBack.addEventListener("click", () => {
    navGoOnSomePage(page2, page3);
  });

  page3ImageHome.addEventListener("click", () => {
    navGoOnSomePage(page1, page3);
  });

  //====================Page4 (Pictures Quiz Categories)
  page4SettingsBack.addEventListener("click", () => {
    navGoOnSomePage(page2, page4);
  });

  page4ImageHome.addEventListener("click", () => {
    navGoOnSomePage(page1, page4);
  });

  //====================Page5 (Game Artists Quiz)

  page5LastMenuNext.addEventListener("click", () => {
    navGoOnSomePage(page3, page5);
    hiddenSomePage(page5ExitGame);
  });

  page5LastMenuHome.addEventListener("click", () => {
    navGoOnSomePage(page1, page5);
    hiddenSomePage(page5ExitGame);
  });

  page5HeaderClose.addEventListener("click", navPage5ExitGameMenu);
  function navPage5ExitGameMenu() {
    page5ExitGame.classList.remove("hidden");
  }

  page5ExitGameClose.addEventListener("click", navPage5Cancel);
  page5ExitGameCancel.addEventListener("click", navPage5Cancel);
  function navPage5Cancel() {
    page5ExitGame.classList.add("hidden");
  }

  page5ExitGameExit.addEventListener("click", navPage5Exit);
  function navPage5Exit() {
    page5ExitGame.classList.add("hidden");
    navGoOnSomePage(page3, page5);
  }

  //====================Page6 (Game Artists Quiz)

  page6LastMenuNext.addEventListener("click", () => {
    hiddenSomePage(page6ExitGame);
    navGoOnSomePage(page4, page6);
  });

  page6LastMenuHome.addEventListener("click", () => {
    hiddenSomePage(page6ExitGame);
    navGoOnSomePage(page1, page6);
  });

  page6HeaderClose.addEventListener("click", navPage6ExitGameMenu);
  function navPage6ExitGameMenu() {
    page6ExitGame.classList.remove("hidden");
  }

  page6ExitGameClose.addEventListener("click", navPage6Cancel);
  page6ExitGameCancel.addEventListener("click", navPage6Cancel);
  function navPage6Cancel() {
    page6ExitGame.classList.add("hidden");
  }

  page6ExitGameExit.addEventListener("click", navPage6Exit);
  function navPage6Exit() {
    page6ExitGame.classList.add("hidden");
    navGoOnSomePage(page4, page6);
  }

  //====================Page7 (Score)

  page7Settings.addEventListener("click", navPage7Settings);
  function navPage7Settings() {
    navGoOnSomePage(page2, page7);
  }
  page7ImageHome.addEventListener("click", navPage7Home);
  function navPage7Home() {
    navGoOnSomePage(page1, page7);
  }
}
