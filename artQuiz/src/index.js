import { loadImgPage3 } from "./js/categories";
import { loadImgPage4 } from "./js/categories";
import { nav } from "./js/navigation";
import { gameArtists } from "./js/artists";
import { gamePictures } from "./js/pictures";
import { score } from "./js/score";
import { settings } from "./js/settings";

loadImgPage3();
loadImgPage4();
nav();
gameArtists();
gamePictures();
score();
settings();

// console.log(`Ваша оценка - 195-197 баллов
// Отзыв по пунктам ТЗ:
// Не выполненные/не засчитанные пункты:
// 1) Плавная смена изображений, картинки сначала загружаются, потом отображаются, нет ситуации, когда пользователь видит частично загрузившиеся изображения. Плавную смену изображений не проверяем: 1) при загрузке и перезагрузке приложения 2) при открытой консоли браузера
// Частично выполненные пункты:
// 1) 5 баллов за каждую уникальную сложную анимацию, улучшающую интерфейс и удобство использования приложения, но не больше 20 баллов
// feedback: Есть одна анимация, назначенная на разные действия, к примеру при переходе на другую страницу, или в меню score, при клике на карточку + 5 баллов
// 2) дополнительными баллами оценивается очень высокое качество оформления приложения, продуманность отдельных деталей интерфейса, улучшающие внешний вид приложения и удобство пользования им, а также выполненный на высоком уровне и сложный в реализации свой собственный дополнительный функционал, существенно улучшающий качество и/или возможности приложения
// feedback: Есть разное воспроизводство звуков, в зависимости от количества правильно указанных ответов: если правильных ответов 0 или 10(все), так же при истечении времени таймера
// Выполненные пункты:
// 1) вёрстка, дизайн, UI стартовой страницы приложения. Выполняются требования к вёрстке и оформлению приложения. На стартовой странице есть кнопка, при клике по которой открываются настройки викторины, и две кнопки, при кликах по которым можно выбрать тип вопроса: угадать художника по картине, угадать картину по имени её автора
// 2) реализована навигация по страницам приложения. Со стартовой страницы при клике по кнопке с типом вопроса пользователь попадает на страницу категорий выбранного типа вопросов. Со страницы категорий пользователь может вернуться на стартовую страницу приложения. Со страницы категорий при клике по карточке категории пользователь попадает на страницу с вопросами категории. На карточке сыгранной категории есть кнопка или ссылка, при клике по которой пользователь попадает  на страницу с результатами прохождения раунда. Со страницы с вопросами и со страницы с результатами пользователь может вернуться на страницу категорий или на стартовую страницу приложения
// 3) в настройках есть возможность включать/выключать звук, есть регулятор громкости звука. Если звук включён, есть звуковая индикация правильных и неправильных ответов, звуковое сопровождение окончания раунда
// 4) в настройках есть возможность включать/выключать игру на время. Если выбрана игра на время, на странице с вопросами викторины отображается таймер, отсчитывающий время, которое отведено для ответа на вопрос
// 5) в настройках можно указать время для ответа на вопрос в интервале от 5 до 30 секунд с шагом в 5 секунд. Если время истекает, а ответа нет, это засчитывается как неправильный ответ на вопрос
// 6) при перезагрузке страницы приложения настройки сохраняются
// 7) вёрстка, дизайн, UI страницы категории. Выполняются требования к вёрстке и оформлению приложения. На странице категорий размещаются карточки категорий. Карточки категорий могут иметь названия, или их можно просто пронумеровать.
// 8) карточка сыгранной категории внешне отличается от карточки категории, которая ещё не игралась
// feedback: Изменяется цвет названия категории этой карточки на золотистый
// 9) на карточке сыгранной категории отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ
// 10) вёрстка, дизайн, UI страницы с вопросами. Выполняются требования к вёрстке и оформлению приложения. Вопросы в викторине идут в том порядке, в каком информация про картины и их авторов размещается в коллекции исходных данных.
// 11) варианты ответов на вопросы генерируются случайным образом. В вариантах ответов на вопросы викторины должен быть правильный ответ и только один. Правильный ответ в разных вопросах должен находиться на разных местах, а не, например, всегда быть только первым. Варианты ответов должны быть разными. В вариантах ответов не должны повторяться картины одного и того же художника.
// 12) правильным и неправильным ответам пользователя соответствуют индикаторы разного цвета
// feedback: Есть кружочки вверху, которые загораются либо красным, либо зеленым цветом
// 13) после того, как ответ выбран, появляется модальное окно с правильным ответом на вопрос и кнопкой "Продолжить". При клике по кнопке "Продолжить" пользователь переходит к следующему вопросу категории
// 14) после окончания раунда выводится уведомление об окончании раунда и отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ. Есть кнопка "Продолжить" при клике по которой пользователь перенаправляется на страницу категорий данного типа вопросов
// 15) вёрстка, дизайн, UI страницы с результатами. Выполняются требования к вёрстке и оформлению приложения
// 16) страница с результатами содержит превью всех картин категории
// 17) картины, на вопросы про которые или про их авторов был дан правильный ответ, цветные; картины, на вопросы про которые или про их авторов был дан неправильный ответ, черно-белые
// 18) при клике по картине выводится информация о ней - название, автор, год создания
// 19) если раунд проигрывался повторно и результаты изменились, эти изменения отображаются на странице с результатами
// `);
