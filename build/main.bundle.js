/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _script_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/slider.js */ \"./src/script/slider.js\");\n/* harmony import */ var _script_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_slider_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _script_book_ards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/bookСards.js */ \"./src/script/bookСards.js\");\n/* harmony import */ var _script_book_ards_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script_book_ards_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://books/./src/index.js?");

/***/ }),

/***/ "./src/script/bookСards.js":
/*!*********************************!*\
  !*** ./src/script/bookСards.js ***!
  \*********************************/
/***/ (() => {

eval("var genre = document.querySelectorAll('.genre'); //Кнопки категорий книг\nvar load = document.querySelector('.load_more'); //Кнопка добавления карточек товара\nvar buttonBuy = document.getElementsByClassName('buy'); //Живая коллекция кнопок покупки карточек товара\nvar buttonBasket = document.querySelector('.basket'); //Кнопка корзины\nvar productQuantity = document.querySelector('.product_quantity'); //Красный круг, отображающий количество товара\nvar elementCountBuy = document.querySelector('.count_buy'); //Цифра внутри крвсного круга\nvar keyAPI = \"\"; //Кюч Google API \nvar resultItog = []; //Массив с отображаемым в данный момент товаром\nvar idBuy = 0; //ID для сохранения информации о товаре в localStorage\nvar countBuy = 0; //Счетчик покупок\n\n//Проверка наличия необходимых мараметров в localStorage\nif (localStorage.idBuy) {\n  idBuy = Number(localStorage.idBuy);\n}\nif (Number(localStorage.countBuy) === 0 || !localStorage.countBuy) {\n  productQuantity.classList.add(\"no_activ\");\n} else {\n  countBuy = Number(localStorage.countBuy);\n  elementCountBuy.innerHTML = \"\".concat(countBuy);\n}\n\n//Массив категорий для запроса\nvar categories = ['Architecture', 'Art', 'Autobiography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Cooking', 'Health & Fitness', 'History', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel'];\n\n//Функция для отображения визуального выбора категории\nfunction selectingAnElement(elem) {\n  document.querySelector('.categories .activ').classList.remove('activ');\n  elem.parentNode.classList.add('activ');\n}\n\n//Запрос\nfunction useRequest(url, callback) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', url, true);\n  xhr.onload = function () {\n    if (xhr.status != 200) {\n      console.log('Статус ответа: ', xhr.status);\n    } else {\n      var result = JSON.parse(xhr.response);\n      if (callback) {\n        callback(result);\n      }\n    }\n  };\n  xhr.onerror = function () {\n    console.log('Ошибка! Статус ответа: ', xhr.status);\n  };\n  xhr.send();\n}\n;\nvar resultNode = document.querySelector('.shelf_of_books'); //Нода для вставки результата запроса\n\n//Вставка карточек товара в ноду\nfunction displayResult(apiData) {\n  var cards = ''; //\n  var authors = ''; //Автор\n  var thumbnail = ''; //Картинка\n  var retailPrice = ''; //Стоимость\n  var averageRating = ''; //Средний рейтинг\n  var ratingsCount = ''; //Количество отзывов\n  var description = ''; //Описание товара\n\n  var result = apiData.items; //Выбор необходимой части запроса\n  resultItog = resultItog.concat(result);\n\n  //Цикл который проходит по результатам запроса и собирает карты товара\n  result.forEach(function (item) {\n    //Форматирую авторов \n    if (item.volumeInfo.authors) {\n      if (item.volumeInfo.authors.length > 1) {\n        authors = item.volumeInfo.authors.join(', ');\n      } else {\n        authors = item.volumeInfo.authors[0];\n      }\n    } else {\n      authors = 'Author unknown';\n    }\n\n    //Форматирую картинку\n    if (item.volumeInfo.imageLinks) {\n      thumbnail = \"style=\\\"background-image: url(\".concat(item.volumeInfo.imageLinks.thumbnail, \")\\\"\");\n    } else {\n      thumbnail = '';\n    }\n\n    //Форматирую описание\n    if (item.volumeInfo.description) {\n      description = item.volumeInfo.description;\n    } else {\n      description = 'No description';\n    }\n\n    //Форматирование рейтинга\n    if (item.volumeInfo.averageRating) {\n      averageRating = \"\";\n      value = item.volumeInfo.averageRating;\n      value = Math.round(value);\n      for (var i = 0; i < value; i++) {\n        averageRating += \"<span class=\\\"active\\\"></span>\";\n      }\n      value = 5 - value;\n      if (value > 0) {\n        for (var _i = 0; _i < value; _i++) {\n          averageRating += \"<span></span>\";\n        }\n      }\n      ratingsCount = \"\".concat(item.volumeInfo.ratingsCount, \" review\");\n    } else {\n      averageRating = \"\";\n      ratingsCount = \"\";\n    }\n\n    //Форматирую стоимость\n    if (item.saleInfo.retailPrice) {\n      retailPrice = \"<h3>\".concat(item.saleInfo.retailPrice.amount, \" \").concat(item.saleInfo.retailPrice.currencyCode, \"</h3>\");\n    } else {\n      retailPrice = '';\n    }\n\n    //Создание кнопки покупки\n    var buttonBuys = \"<button class=\\\"buy\\\" style=\\\"margin-top: 16px\\\" value=\\\"\".concat(item.volumeInfo.title, \"\\\">buy now</button>\");\n\n    //Проверяем, не была ли уже выбрана книга, кнопка которой должна будет изменится, если книжка была выбрана\n    for (var key in localStorage) {\n      if (!localStorage.hasOwnProperty(key)) {\n        continue; // пропустит такие ключи, как \"setItem\", \"getItem\" и так далее\n      }\n      if (localStorage.getItem(key).includes(\"\".concat(item.volumeInfo.title))) {\n        buttonBuys = \"<button class=\\\"buy in_the_cart\\\" style=\\\"margin-top: 16px\\\" value=\\\"\".concat(item.volumeInfo.title, \"\\\">IN THE CART</button>\");\n      }\n    }\n    var cardBlock; //Блок с карточкой товара\n\n    //Формирование бока с картчкой товара\n    if (averageRating !== '') {\n      cardBlock = \"\\n                <div class=\\\"product_card\\\">\\n                    <div class=\\\"image_book\\\" \".concat(thumbnail, \"></div>\\n                    <div class=\\\"description\\\">\\n                        <p>\").concat(authors, \"</p>\\n                        <h2>\").concat(item.volumeInfo.title, \"</h2>\\n                        <div>\\n                            <div class=\\\"rating-mini\\\">\\n                                \").concat(averageRating, \"\\n                            </div>\\n                            \").concat(ratingsCount, \"\\n                        </div>\\n                        <div class=\\\"container_descrip\\\">\\n                            <div class=\\\"descrip\\\">\\n                                \").concat(description, \"\\n                            </div>\\n                        </div>\\n                            \").concat(retailPrice, \"\\n                        \").concat(buttonBuys, \"\\n                    </div>\\n                </div>\\n            \");\n    } else {\n      cardBlock = \"\\n                <div class=\\\"product_card\\\">\\n                    <div class=\\\"image_book\\\" \".concat(thumbnail, \"></div>\\n                    <div class=\\\"description\\\">\\n                        <p>\").concat(authors, \"</p>\\n                        <h2>\").concat(item.volumeInfo.title, \"</h2>\\n                        \").concat(ratingsCount, \"\\n                        <div class=\\\"container_descrip\\\">\\n                            <div class=\\\"descrip\\\">\\n                                \").concat(description, \"\\n                            </div>\\n                        </div>\\n                            \").concat(retailPrice, \"\\n                            \").concat(buttonBuys, \"\\n                    </div>\\n                </div>\\n            \");\n    }\n    cards = cards + cardBlock; //добавление нескольких блоков\n  });\n\n  //Обновит ноду, если сменилась категория товара    \n  if (count < 8) {\n    resultNode.innerHTML = '';\n  }\n\n  //Добавляет в ноду блоки\n  resultNode.innerHTML += cards;\n  shoppingCounter(resultItog);\n}\n\n//Функция работы кнопки купить\nfunction shoppingCounter(result) {\n  buttonBuy = document.getElementsByClassName('buy');\n  var _loop = function _loop(k) {\n    buttonBuy[k].addEventListener('click', function () {\n      if (!buttonBuy[k].classList.contains(\"in_the_cart\")) {\n        countBuy += 1;\n        idBuy += 1;\n        //info = buttonBuy[k].getAttribute('value');\n        //Сохраняем параметры в localStorage\n        localStorage.setItem('idBuy', idBuy);\n        localStorage.setItem('countBuy', countBuy);\n        localStorage.setItem(\"Buy\".concat(idBuy), JSON.stringify(result[k]));\n\n        //Создаем/редактируем красный круг возле корзины\n        elementCountBuy.innerHTML = \"\".concat(countBuy);\n        productQuantity.classList.remove(\"no_activ\");\n\n        //Меняем параметры кнопки, которую нажали \n        buttonBuy[k].innerHTML = \"IN THE CART\";\n        buttonBuy[k].classList.add(\"in_the_cart\");\n      } else {\n        info = buttonBuy[k].getAttribute('value'); //Получаем название сохраненной книга\n\n        //Чтобы счетчик покупок не ушел в минус\n        if (countBuy >= 1) {\n          countBuy -= 1;\n        }\n\n        //Обновляем данные в localStorage\n        localStorage.setItem('countBuy', countBuy);\n\n        //Убираем/редактируем красный круг возле корзины\n        elementCountBuy.innerHTML = \"\".concat(countBuy);\n        if (countBuy < 1) {\n          productQuantity.classList.add(\"no_activ\");\n        }\n\n        //Удаляем лишние данные в localStorage\n        for (var key in localStorage) {\n          if (!localStorage.hasOwnProperty(key)) {\n            continue; // пропустит такие ключи, как \"setItem\", \"getItem\" и так далее\n          }\n          if (localStorage.getItem(key).includes(\"\".concat(info))) {\n            localStorage.removeItem(key);\n          }\n        }\n\n        //Меняем параметры кнопки, которую нажали \n        buttonBuy[k].innerHTML = \"buy now\";\n        buttonBuy[k].classList.remove(\"in_the_cart\");\n      }\n    });\n  };\n  for (var k = 0; k < buttonBuy.length; k++) {\n    _loop(k);\n  }\n  ;\n}\n\n//Делаем первоначальный запрос\nuseRequest(\"https://www.googleapis.com/books/v1/volumes?q=\\\"subject:Architecture\\\"&key=\".concat(keyAPI, \"&printType=books&startIndex=0&maxResults=6&langRestrict=en\"), displayResult);\nvar count = 6; //Задаем значение счетчику, который используется в URL\nvar categor = 'Architecture'; //Задае првонаальное значение категории книг\n\n//Обработчик нажания на категорию\nvar _loop2 = function _loop2(i) {\n  genre[i].addEventListener('click', function () {\n    resultItog = []; // При переходи из одной категори в другую обновляем массив с отображаемыми карточками товара\n    count = 6; //Обновляем счетчик\n    selectingAnElement(genre[i]);\n    categor = categories[i]; //Обновляем выбранную категорию\n    useRequest(\"https://www.googleapis.com/books/v1/volumes?q=\\\"subject:\".concat(categor, \"\\\"&key=\").concat(keyAPI, \"&printType=books&startIndex=0&maxResults=6&langRestrict=en\"), displayResult);\n  });\n};\nfor (var i = 0; i < genre.length; i++) {\n  _loop2(i);\n}\n;\n\n//Обработчик нажания на Load more\nload.addEventListener('click', function () {\n  useRequest(\"https://www.googleapis.com/books/v1/volumes?q=\\\"subject:\".concat(categor, \"\\\"&key=\").concat(keyAPI, \"&printType=books&startIndex=\").concat(count, \"&maxResults=6&langRestrict=en\"), displayResult);\n  count += 6;\n});\n\n//Обработчик нажатия на корзину\nbuttonBasket.addEventListener('click', function () {\n  for (var key in localStorage) {\n    if (!localStorage.hasOwnProperty(key)) {\n      continue; // пропустит такие ключи, как \"setItem\", \"getItem\" и так далее\n    }\n    console.log(key + \": \" + localStorage.getItem(key));\n  }\n\n  //Для очистки localStorage\n  /* countBuy = 0;\r\n  localStorage.clear();\r\n  productQuantity.classList.add(\"no_activ\"); */\n});\n\n//# sourceURL=webpack://books/./src/script/book%D0%A1ards.js?");

/***/ }),

/***/ "./src/script/slider.js":
/*!******************************!*\
  !*** ./src/script/slider.js ***!
  \******************************/
/***/ (() => {

eval("var img = document.querySelector('.images');\nvar setEntity = function setEntity(index) {\n  img.classList.add(\"slide_\".concat(index));\n  document.querySelector(\".dot_\".concat(index)).setAttribute('fill', '#9E98DC');\n};\nvar dots_0 = document.querySelector('.dots_0');\nvar dots_1 = document.querySelector('.dots_1');\nvar dots_2 = document.querySelector('.dots_2');\nvar dot_0 = document.querySelector('.dot_0');\nvar dot_1 = document.querySelector('.dot_1');\nvar dot_2 = document.querySelector('.dot_2');\nvar currentIndex = 0;\nfunction clearAtribut() {\n  for (var i = 0; i < 3; i++) {\n    if (img.classList.contains(\"slide_\".concat(i))) {\n      img.classList.remove(\"slide_\".concat(i));\n    }\n  }\n  if (dot_0.getAttribute('fill') === '#9E98DC') {\n    dot_0.setAttribute('fill', '#EFEEF6');\n  } else if (dot_1.getAttribute('fill') === '#9E98DC') {\n    dot_1.setAttribute('fill', '#EFEEF6');\n  } else {\n    dot_2.setAttribute('fill', '#EFEEF6');\n  }\n}\n;\nfunction SliderInterval() {\n  clearAtribut();\n  if (currentIndex < 2) {\n    currentIndex += 1;\n    setEntity(currentIndex);\n    document.querySelector(\".dot_\".concat(currentIndex - 1)).setAttribute('fill', '#EFEEF6');\n  } else if (currentIndex >= 2) {\n    document.querySelector(\".dot_\".concat(currentIndex)).setAttribute('fill', '#EFEEF6');\n    currentIndex = 0;\n    setEntity(currentIndex);\n  }\n}\n;\ndots_0.addEventListener('click', function () {\n  clearAtribut();\n  setEntity(0);\n  currentIndex = 0;\n});\ndots_1.addEventListener('click', function () {\n  clearAtribut();\n  setEntity(1);\n  currentIndex = 1;\n});\ndots_2.addEventListener('click', function () {\n  clearAtribut();\n  setEntity(2);\n  currentIndex = 2;\n});\nsetInterval(SliderInterval, 5000);\n\n//# sourceURL=webpack://books/./src/script/slider.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://books/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://books/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://books/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://books/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://books/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://books/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://books/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://books/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://books/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://books/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;