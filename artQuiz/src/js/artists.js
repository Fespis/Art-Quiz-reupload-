//===================== Game artists
function gameArtists() {
  const page3 = document.querySelector(".page3");
  const page5 = document.querySelector(".page5");
  const page3MainCategories = document.querySelector(".page3-main-categories");
  const page5MainImage = document.querySelector(".page5-main-image");
  const page5MainBlock = document.querySelector(".page5-main-block");
  const page5MainAnswers = document.querySelectorAll(".page5-main-answers");
  const page5TrueFalse = document.querySelector(".page5-true-false");
  const page5TrueFalseImage = document.querySelector(".page5-true-false-image");
  const page5TrueFalseButton = document.querySelector(".page5-true-false-button");
  const page5TrueFalseCheckMark = document.querySelector(".page5-true-false-image-check-mark");
  const page5TrueFalseName = document.querySelector(".page5-true-false-name");
  const page5TrueFalseAuthor = document.querySelector(".page5-true-false-author");
  const page5TrueFalseYear = document.querySelector(".page5-true-false-year");
  const page5LastMenu = document.querySelector(".page5-last-menu");
  const page5LastMenuScore = document.querySelector(".page5-last-menu-score");
  const page3MainItemTitle = document.querySelectorAll(".page3-main-item-title");
  const page5Circle = document.querySelectorAll(".page5-progress-range-circle");
  const page5ExitGameExit = document.querySelector(".page5-exit-game-exit");

  let dataArray;
  let nameOfCategory;
  let numberOfPicture = 0;
  let number = [];
  let arr = [0, 1, 2, 3];
  let correctAnswer;
  let numberOfCorrectAnswer = 0;
  let time;

  //=====================Array with number of Images
  page3MainCategories.addEventListener("click", getNumber);
  function getNumber() {
    let allMainItems = event.target.closest(".page3-main-item");
    if (!allMainItems) return;
    nameOfCategory = allMainItems.querySelector(".page3-main-item-title");
    let nameOfCategory1 = nameOfCategory.innerText.replace(/\s/g, "");
    if (nameOfCategory1 == "(A)Portrait") {
      number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else if (nameOfCategory1 == "(A)Landscape") {
      number = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    } else if (nameOfCategory1 == "(A)Stilllife") {
      number = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    } else if (nameOfCategory1 == "(A)Impressionism") {
      number = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
    } else if (nameOfCategory1 == "(A)Expressionism") {
      number = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
    } else if (nameOfCategory1 == "(A)Avant-garde") {
      number = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
    } else if (nameOfCategory1 == "(A)Renaissance") {
      number = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
    } else if (nameOfCategory1 == "(A)Surrealism") {
      number = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
    } else if (nameOfCategory1 == "(A)Minimalism") {
      number = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
    } else if (nameOfCategory1 == "(A)Kitsch") {
      number = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    } else if (nameOfCategory1 == "(A)Interior") {
      number = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109];
    } else if (nameOfCategory1 == "(A)Nude") {
      number = [110, 111, 112, 113, 114, 115, 116, 117, 118, 119];
    }
  }

  //=====================Array with random number of Info
  async function getArtist() {
    let imageInfo;
    imageInfo = "./data.json";
    const res = await fetch(imageInfo);
    const data = await res.json();
    dataArray = data;

    function getRandomData(rightNumberOfAuthor) {
      let randomCard = Math.floor(Math.random() * data.length);
      if (rightNumberOfAuthor === randomCard) {
        getRandomData(rightNumberOfAuthor);
      } else if (rightNumberOfAuthor !== randomCard) {
        return data[randomCard].author;
      }
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    shuffle(arr);
    page5MainAnswers[arr[0]].innerText = data[number[numberOfPicture]].author;
    page5MainAnswers[arr[1]].innerText = getRandomData(numberOfPicture);
    page5MainAnswers[arr[2]].innerText = getRandomData(numberOfPicture);
    page5MainAnswers[arr[3]].innerText = getRandomData(numberOfPicture);

    correctAnswer = data[number[numberOfPicture]].author;
  }

  //=====================Timer
  function timer() {
    const page5Time = document.querySelector(".page5-time");

    let timeOfTimer = time;

    page5Time.innerText = timeOfTimer;

    let timer = setInterval(() => {
      timeOfTimer = timeOfTimer - 1;
      page5Time.innerText = timeOfTimer;
      if (timeOfTimer == 0) {
        clearInterval(timer);
        page3.classList.remove("hidden");
        page3.classList.add("block");
        page5.classList.remove("block");
        page5.classList.add("hidden");
        audio("time");
      }
    }, 1000);

    page5MainBlock.addEventListener("click", () => {
      let allMainAnswers = event.target.closest(".page5-main-answers");
      if (!allMainAnswers) return;
      clearInterval(timer);
    });

    page5ExitGameExit.addEventListener("click", () => {
      clearInterval(timer);
    });

    if (numberOfPicture == number.length) {
      clearInterval(timer);
    }
  }

  //=====================Audio
  function audio(name) {
    let audio = new Audio(`images/sound/${name}.mp3`);
    audio.volume = localStorage.getItem("Volume");
    audio.play();
  }

  //===================== Load Game(Artists Quiz)
  page3MainCategories.addEventListener("click", navPage3Game);
  function navPage3Game() {
    //Delegation
    numberOfCorrectAnswer = 0;
    numberOfPicture = 0;
    let allMainItems = event.target.closest(".page3-main-item");
    let score = event.target.closest(".score");
    if (!allMainItems) return;
    if (score) return;
    nameOfCategory = allMainItems.querySelector(".page3-main-item-title");
    let titleCategories = allMainItems.querySelector(".page3-main-item-title");
    titleCategories.style.color = "#ffbca2";

    //Clear Circle
    for (let file of page5Circle) {
      file.style.backgroundColor = "#d9d9d9";
    }

    //Load New Page
    page3.classList.remove("block");
    page3.classList.add("hidden");
    page5.classList.remove("hidden");
    page5.classList.add("block");
    page5LastMenu.classList.add("hidden");

    //load First Image
    page5MainImage.style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[numberOfPicture]}.jpg)`;

    // Load First Artist
    getArtist();

    // timer
    time = localStorage.getItem("timeOfTimer");
    let timerOn = localStorage.getItem("TimerOn");
    if (timerOn == "true") {
      timer();
    }
  }

  //===================== Load New Game(Artists Quiz)
  page5MainBlock.addEventListener("click", changeImage);
  function changeImage() {
    let allMainAnswers = event.target.closest(".page5-main-answers");
    if (!allMainAnswers) return;

    // Load New Image
    page5TrueFalseImage.style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[numberOfPicture]}.jpg)`;
    page5TrueFalseName.innerText = dataArray[number[numberOfPicture]].name;
    page5TrueFalseAuthor.innerText = dataArray[number[numberOfPicture]].author;
    page5TrueFalseYear.innerText = dataArray[number[numberOfPicture]].year;
    numberOfPicture++;

    if (numberOfPicture !== 10) {
      page5MainImage.style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[numberOfPicture]}.jpg)`;
    }

    // Load New Artist
    if (numberOfPicture <= number.length - 1) {
      getArtist();
    }

    //Answer
    page5TrueFalse.classList.remove("hidden");
    page5TrueFalseButton.addEventListener("click", () => {
      page5TrueFalse.classList.add("hidden");
    });

    //Checking for the correct answer
    if (allMainAnswers.innerText == correctAnswer) {
      page5Circle[numberOfPicture - 1].style.backgroundColor = "#477e79";
      localStorage.setItem(dataArray[number[numberOfPicture - 1]].imageNum, true);
      numberOfCorrectAnswer++;
      page5LastMenuScore.innerText = `${numberOfCorrectAnswer}/10`;
      page5TrueFalseCheckMark.style.backgroundImage = "url(images/true.png)";
      if (numberOfPicture !== 10) {
        audio("right");
      }
    } else {
      page5Circle[numberOfPicture - 1].style.backgroundColor = "#b93939";
      localStorage.setItem(dataArray[number[numberOfPicture - 1]].imageNum, false);
      page5TrueFalseCheckMark.style.backgroundImage = "url(images/false.png)";
      page5LastMenuScore.innerText = `${numberOfCorrectAnswer}/10`;
      if (numberOfPicture !== 10) {
        audio("wrong");
      }
    }

    //Result in Category
    let parentScore = nameOfCategory.closest(".page3-main-item");
    let scoreCategories = parentScore.querySelector(".page3-main-item-score");
    scoreCategories.innerText = `${numberOfCorrectAnswer}/10`;

    localStorage.setItem(`${nameOfCategory.innerText}`, scoreCategories.innerText);
    const allItemTitle = document.querySelectorAll(".page3-main-item-title");
    for (let Category of allItemTitle) {
      if (nameOfCategory == Category.innerText) {
        localStorage.setItem(`${Category.innerText}`, scoreCategories.innerText);
      }
    }

    //Last menu
    if (numberOfPicture == number.length) {
      page5LastMenu.classList.remove("hidden");
      if (numberOfCorrectAnswer == 0) {
        audio("winm");
      } else if (numberOfCorrectAnswer == 10) {
        audio("win");
      } else {
        audio("end");
      }
    }

    //New timer
    let timerOn = localStorage.getItem("TimerOn");
    if (timerOn == "true") {
      timer();
    }
  }

  //=====================Get Score After Load
  window.addEventListener("load", saveScore);
  function saveScore() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      for (let get of page3MainItemTitle) {
        if (get.innerText == key) {
          let parentScore = get.closest(".page3-main-item");
          let scoreCategories = parentScore.querySelector(".page3-main-item-score");
          let titleCategories = parentScore.querySelector(".page3-main-item-title");
          titleCategories.style.color = "#ffbca2";
          scoreCategories.innerText = `${localStorage.getItem(key)}`;
        }
      }
    }
  }
}

export { gameArtists };
