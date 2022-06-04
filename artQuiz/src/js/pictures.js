//===================== Game artists
function gamePictures() {
  const page4 = document.querySelector(".page4");
  const page6 = document.querySelector(".page6");
  const page4MainCategories = document.querySelector(".page4-main-categories");
  const page6MainImages = document.querySelectorAll(".page6-main-image");
  const page6MainBlock = document.querySelector(".page6-main-block");
  const page6MainTitle = document.querySelector(".page6-main-title");
  const page6TrueFalse = document.querySelector(".page6-true-false");
  const page6TrueFalseImage = document.querySelector(".page6-true-false-image");
  const page6TrueFalseButton = document.querySelector(".page6-true-false-button");
  const page6TrueFalseCheckMark = document.querySelector(".page6-true-false-image-check-mark");
  const page6TrueFalseName = document.querySelector(".page6-true-false-name");
  const page6TrueFalseAuthor = document.querySelector(".page6-true-false-author");
  const page6TrueFalseYear = document.querySelector(".page6-true-false-year");
  const page6LastMenu = document.querySelector(".page6-last-menu");
  const page6LastMenuScore = document.querySelector(".page6-last-menu-score");
  const page4MainItemTitle = document.querySelectorAll(".page4-main-item-title");
  const page6Circle = document.querySelectorAll(".page6-progress-range-circle");
  const page6ExitGameExit = document.querySelector(".page6-exit-game-exit");

  let dataArray;
  let nameOfCategory;
  let numberOfPicture = 0;
  let number = [];
  let arr = [0, 1, 2, 3];
  let correctAnswer;
  let numberOfCorrectAnswer = 0;
  let time;

  //=====================Array with number of Images
  page4MainCategories.addEventListener("click", getNumber);
  function getNumber() {
    let allMainItems = event.target.closest(".page4-main-item");
    if (!allMainItems) return;
    nameOfCategory = allMainItems.querySelector(".page4-main-item-title");
    let nameOfCategory1 = nameOfCategory.innerText.replace(/\s/g, "");
    if (nameOfCategory1 == "(P)Portrait") {
      number = [120, 121, 122, 123, 124, 125, 126, 127, 128, 129];
    } else if (nameOfCategory1 == "(P)Landscape") {
      number = [130, 131, 132, 133, 134, 135, 136, 137, 138, 139];
    } else if (nameOfCategory1 == "(P)Stilllife") {
      number = [140, 141, 142, 143, 144, 145, 146, 147, 148, 149];
    } else if (nameOfCategory1 == "(P)Impressionism") {
      number = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159];
    } else if (nameOfCategory1 == "(P)Expressionism") {
      number = [160, 161, 162, 163, 164, 165, 166, 167, 168, 169];
    } else if (nameOfCategory1 == "(P)Avant-garde") {
      number = [170, 171, 172, 173, 174, 175, 176, 177, 178, 179];
    } else if (nameOfCategory1 == "(P)Renaissance") {
      number = [180, 181, 182, 183, 184, 185, 186, 187, 188, 189];
    } else if (nameOfCategory1 == "(P)Surrealism") {
      number = [190, 191, 192, 193, 194, 195, 196, 197, 198, 199];
    } else if (nameOfCategory1 == "(P)Minimalism") {
      number = [200, 201, 202, 203, 204, 205, 206, 207, 208, 209];
    } else if (nameOfCategory1 == "(P)Kitsch") {
      number = [210, 211, 212, 213, 214, 215, 216, 217, 218, 219];
    } else if (nameOfCategory1 == "(P)Interior") {
      number = [220, 221, 222, 223, 224, 225, 226, 227, 228, 229];
    } else if (nameOfCategory1 == "(P)Nude") {
      number = [230, 231, 232, 233, 234, 235, 236, 237, 238, 239];
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
        return data[randomCard].imageNum;
      }
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(arr);
    page6MainImages[
      arr[0]
    ].style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[numberOfPicture]}.jpg)`;
    page6MainImages[
      arr[1]
    ].style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${getRandomData(
      numberOfPicture
    )}.jpg)`;
    page6MainImages[
      arr[2]
    ].style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${getRandomData(
      numberOfPicture
    )}.jpg)`;
    page6MainImages[
      arr[3]
    ].style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${getRandomData(
      numberOfPicture
    )}.jpg)`;
    page6MainTitle.innerText = `What picture did ${data[number[numberOfPicture]].author} paint?`;

    correctAnswer = page6MainImages[arr[0]].style.backgroundImage;
  }

  //=====================Timer
  function timer() {
    const page6Time = document.querySelector(".page6-time");

    let timeOfTimer = time;

    page6Time.innerText = timeOfTimer;

    let timer = setInterval(() => {
      timeOfTimer = timeOfTimer - 1;
      page6Time.innerText = timeOfTimer;
      if (timeOfTimer == 0) {
        clearInterval(timer);
        page4.classList.remove("hidden");
        page4.classList.add("block");
        page6.classList.remove("block");
        page6.classList.add("hidden");
        audio("time");
      }
    }, 1000);

    page6MainBlock.addEventListener("click", () => {
      let allMainAnswers = event.target.closest(".page6-main-image");
      if (!allMainAnswers) return;
      clearInterval(timer);
    });

    page6ExitGameExit.addEventListener("click", () => {
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
  page4MainCategories.addEventListener("click", navPage4Game);
  function navPage4Game() {
    //Delegation
    numberOfCorrectAnswer = 0;
    numberOfPicture = 0;
    let allMainItems = event.target.closest(".page4-main-item");
    let score = event.target.closest(".score");
    if (!allMainItems) return;
    if (score) return;
    nameOfCategory = allMainItems.querySelector(".page4-main-item-title");
    let titleCategories = allMainItems.querySelector(".page4-main-item-title");
    titleCategories.style.color = "#ffbca2";

    //Clear Circle
    for (let file of page6Circle) {
      file.style.backgroundColor = "#d9d9d9";
    }

    //Load New Page
    page4.classList.remove("block");
    page4.classList.add("hidden");
    page6.classList.remove("hidden");
    page6.classList.add("block");
    page6LastMenu.classList.add("hidden");

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
  page6MainBlock.addEventListener("click", changeImage);
  function changeImage() {
    let allMainAnswers = event.target.closest(".page6-main-image");
    if (!allMainAnswers) return;

    // Load New Image
    page6TrueFalseImage.style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[numberOfPicture]}.jpg)`;
    page6TrueFalseName.innerText = dataArray[number[numberOfPicture]].name;
    page6TrueFalseAuthor.innerText = dataArray[number[numberOfPicture]].author;
    page6TrueFalseYear.innerText = dataArray[number[numberOfPicture]].year;

    numberOfPicture++;

    // Load New Artist
    if (numberOfPicture <= number.length - 1) {
      getArtist();
    }

    //Answer
    page6TrueFalse.classList.remove("hidden");
    page6TrueFalseButton.addEventListener("click", () => {
      page6TrueFalse.classList.add("hidden");
    });

    //Checking for the correct answer
    if (allMainAnswers.style.backgroundImage == correctAnswer) {
      page6Circle[numberOfPicture - 1].style.backgroundColor = "#477e79";
      localStorage.setItem(dataArray[number[numberOfPicture - 1]].imageNum, true);
      numberOfCorrectAnswer++;
      page6LastMenuScore.innerText = `${numberOfCorrectAnswer}/10`;
      page6TrueFalseCheckMark.style.backgroundImage = "url(images/true.png)";
      if (numberOfPicture !== 10) {
        audio("right");
      }
    } else {
      page6Circle[numberOfPicture - 1].style.backgroundColor = "#b93939";
      localStorage.setItem(dataArray[number[numberOfPicture - 1]].imageNum, false);
      page6TrueFalseCheckMark.style.backgroundImage = "url(images/false.png)";
      page6LastMenuScore.innerText = `${numberOfCorrectAnswer}/10`;
      if (numberOfPicture !== 10) {
        audio("wrong");
      }
    }

    //Result in Category
    let parentScore = nameOfCategory.closest(".page4-main-item");
    let scoreCategories = parentScore.querySelector(".page4-main-item-score");
    scoreCategories.innerText = `${numberOfCorrectAnswer}/10`;
    localStorage.setItem(`${nameOfCategory.innerText}`, scoreCategories.innerText);
    const allItemTitle = document.querySelectorAll(".page4-main-item-title");
    for (let Category of allItemTitle) {
      if (nameOfCategory == Category.innerText) {
        localStorage.setItem(`${Category.innerText}`, scoreCategories.innerText);
      }
    }

    //Last menu
    if (numberOfPicture == number.length) {
      page6LastMenu.classList.remove("hidden");
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
      for (let get of page4MainItemTitle) {
        if (get.innerText == key) {
          let parentScore = get.closest(".page4-main-item");
          let scoreCategories = parentScore.querySelector(".page4-main-item-score");
          let titleCategories = parentScore.querySelector(".page4-main-item-title");
          titleCategories.style.color = "#ffbca2";
          scoreCategories.innerText = `${localStorage.getItem(key)}`;
        }
      }
    }
  }
}

export { gamePictures };
