export { loadImgPage3, loadImgPage4 };

function loadImgPage3() {
  const picturesForPage3 = document.querySelectorAll(".page3-main-item-image");
  const titleForPage3 = document.querySelectorAll(".page3-main-item-title");
  const arrayTitleForPage3 = [
    "(A) Portrait",
    "(A) Landscape",
    "(A) Still life",
    "(A) Impressionism",
    "(A) Expressionism",
    "(A) Avant-garde",
    "(A) Renaissance",
    "(A) Surrealism",
    "(A) Kitsch",
    "(A) Minimalism",
    "(A) Interior",
    "(A) Nude",
  ];

  let arrayNumberPictures = 1;
  for (let file of picturesForPage3) {
    file.style.backgroundImage = `url(images/page3/${arrayNumberPictures}.png)`;
    arrayNumberPictures++;
  }
  let arrayTitleIndex = 0;
  for (let file of titleForPage3) {
    file.textContent = `${arrayTitleForPage3[`${arrayTitleIndex}`]}`;
    arrayTitleIndex++;
  }
}

function loadImgPage4() {
  const picturesForPage4 = document.querySelectorAll(".page4-main-item-image");
  const titleForPage4 = document.querySelectorAll(".page4-main-item-title");
  const arrayTitleForPage4 = [
    "(P) Portrait",
    "(P) Landscape",
    "(P) Still life",
    "(P) Impressionism",
    "(P) Expressionism",
    "(P) Avant-garde",
    "(P) Renaissance",
    "(P) Surrealism",
    "(P) Kitsch",
    "(P) Minimalism",
    "(P) Interior",
    "(P) Nude",
  ];

  let arrayNumberPictures = 1;
  for (let file of picturesForPage4) {
    file.style.backgroundImage = `url(images/page4/${arrayNumberPictures}.png)`;
    arrayNumberPictures++;
  }
  let arrayTitleIndex = 0;
  for (let file of titleForPage4) {
    file.textContent = `${arrayTitleForPage4[`${arrayTitleIndex}`]}`;
    arrayTitleIndex++;
  }
}