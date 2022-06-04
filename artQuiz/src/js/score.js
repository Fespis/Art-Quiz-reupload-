function score() {
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  const page7 = document.querySelector(".page7");

  const page3MainCategories = document.querySelector(".page3-main-categories");
  const page4MainCategories = document.querySelector(".page4-main-categories");

  const page7MainItemTitle = document.querySelectorAll(
    ".page7-main-item-title"
  );
  const page7MainCategories = document.querySelector(".page7-main-categories");
  const page7MainItemImage = document.querySelectorAll(
    ".page7-main-item-image"
  );

  const page7MainScoreName = document.querySelectorAll(
    ".page7-main-score-name"
  );
  const page7MainScoreYear = document.querySelectorAll(
    ".page7-main-score-year"
  );
  const page7MainScoreAuthor = document.querySelectorAll(
    ".page7-main-score-author"
  );

  let number;
  let scorePage;
  let data;

  function cardInfo() {
    let card = event.target;
    let cardInfo = card.querySelector(".page7-main-score");
    cardInfo.classList.toggle("hidden");
    cardInfo.classList.toggle("block");
  }

  function getNumberArtists() {
    let nameOfCategory1 = scorePage.innerText.replace(/\s/g, "");
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

  function getNumberPortraits() {
    let nameOfCategory1 = scorePage.innerText.replace(/\s/g, "");
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

  page3MainCategories.addEventListener("click", scorePage3);
  function scorePage3() {
    let eventClick = event.target;
    let parentScore = eventClick.closest(".page3-main-item");
    let score = eventClick.closest(".score");
    if (!score) return;

    scorePage = parentScore.querySelector(".page3-main-item-title");
    if (scorePage.style.color) {
      //Navigation
      page3.classList.remove("block");
      page3.classList.add("hidden");
      page7.classList.remove("hidden");
      page7.classList.add("block");

      //Title
      for (let title of page7MainItemTitle) {
        title.innerText = scorePage.innerText;
      }

      //Images
      getNumberArtists();
      let i = 0;
      for (let file of page7MainItemImage) {
        file.style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[i]}.jpg)`;
        i++;
      }

      //Name, Year, Author info
      page7MainCategories.addEventListener("click", cardInfo);
      getData();
    }
  }

  
  page4MainCategories.addEventListener("click", scorePage4);
  function scorePage4() {
    let eventClick = event.target;
    let parentScore = eventClick.closest(".page4-main-item");
    let score = eventClick.closest(".score");
    if (!score) return;

    scorePage = parentScore.querySelector(".page4-main-item-title");
    if (scorePage.style.color) {
      //Navigation
      page4.classList.remove("block");
      page4.classList.add("hidden");
      page7.classList.remove("hidden");
      page7.classList.add("block");

      //Title
      for (let title of page7MainItemTitle) {
        title.innerText = scorePage.innerText;
      }

      //Images
      getNumberPortraits();
      let i = 0;
      for (let file of page7MainItemImage) {
        file.style.backgroundImage = `url(https://raw.githubusercontent.com/Fespis/image-data/master/img/${number[i]}.jpg)`;
        i++;
      }

      //Name, Year, Author info
      page7MainCategories.addEventListener("click", cardInfo);
      getData();
    }
  }

  async function getData() {
    let imageInfo;
    imageInfo = "./data.json";
    const res = await fetch(imageInfo);
    data = await res.json();
    let numberImage = 0;
    let numberName = 0;
    let numberYear = 0;
    let numberAuthor = 0;

    for (let file of page7MainItemImage) {
      let rightAnswer = localStorage.getItem(
        data[number[numberImage]].imageNum
      );
      if (rightAnswer == "true") {
        file.style.filter = "grayscale(0)";
      } else {
        file.style.filter = "grayscale(100%)";
      }
      numberImage++;
    }

    for (let file of page7MainScoreName) {
      file.innerText = `${data[number[numberName]].name}`;
      numberName++;
    }
    for (let file of page7MainScoreYear) {
      file.innerText = `${data[number[numberYear]].year}`;
      numberYear++;
    }
    for (let file of page7MainScoreAuthor) {
      file.innerText = `${data[number[numberAuthor]].author}`;
      numberAuthor++;
    }
  }
  //End
}

export { score };
