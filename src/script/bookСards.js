const genre = document.querySelectorAll('.genre');
const load = document.querySelector('.load_more');
let buttonBuy = document.getElementsByClassName('buy');
const buttonBasket = document.querySelector('.basket');
const productQuantity = document.querySelector('.product_quantity');
const elementCountBuy = document.querySelector('.count_buy');

let countBuy = 0;
if((Number(localStorage.countBuy) === 0) || !(localStorage.countBuy)) {
    productQuantity.classList.add("no_activ");
} else {
    countBuy = Number(localStorage.countBuy);
    elementCountBuy.innerHTML = `${countBuy}`;
}

const categories = [
    'Architecture',
    'Art',
    'Autobiography',
    'Business',
    'Crafts & Hobbies',
    'Drama',
    'Fiction',
    'Cooking',
    'Health & Fitness',
    'History',
    'Humor',
    'Poetry',
    'Psychology',
    'Science',
    'Technology',
    'Travel'
]

function selectingAnElement(elem) {
    document.querySelector('.categories .activ').classList.remove('activ');
    elem.parentNode.classList.add('activ');
}

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

  // Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.shelf_of_books');

function displayResult(apiData) {
    let cards = '';
    let authors = '';
    let thumbnail = '';
    let retailPrice = '';
    let averageRating = '';
    let ratingsCount = '';
    let description = '';

    let result = apiData.items;
    // console.log('start cards', cards);
    result.forEach(item => {

        //Форматирую авторов 
        if (item.volumeInfo.authors) {
            if(item.volumeInfo.authors.length > 1) {
                authors = item.volumeInfo.authors.join(', ');
            } else {
                authors = item.volumeInfo.authors[0];
            }
        } else {
            authors = 'Author unknown'
        }
            
        //форматирую картинку
        if(item.volumeInfo.imageLinks) {
            thumbnail = `style="background-image: url(${item.volumeInfo.imageLinks.thumbnail})"`;
        } else {
            thumbnail = ''
        }

        //Форматирую описание
        if(item.volumeInfo.description) {
            description = item.volumeInfo.description;
        } else {
            description = 'No description';
        }


        //Форматирование рейтинга
        if(item.volumeInfo.averageRating) {
            averageRating = ``;
            value = item.volumeInfo.averageRating;
            value = Math.round(value);
            console.log(value);
            for(let i =0; i < value; i++) {
                averageRating +=`<span class="active"></span>`
            }
            value = 5 - value;
            console.log(value);
            if(value > 0) {
                for(let i = 0; i < value; i++) {
                    averageRating +=`<span></span>`
                }
            }

            ratingsCount = `${item.volumeInfo.ratingsCount} review`;
        } else {
            averageRating = ``;
            ratingsCount = ``
        }

        //Форматирую стоимость
        if(item.saleInfo.retailPrice) {
            retailPrice = `<h3>${item.saleInfo.retailPrice.amount} ${item.saleInfo.retailPrice.currencyCode}</h3>`;
        } else {
            retailPrice = '' 
        }

        let cardBlock
      
        if(averageRating !== '') {
            cardBlock = `
                <div class="product_card">
                    <div class="image_book" ${thumbnail}></div>
                    <div class="description">
                        <p>${authors}</p>
                        <h2>${item.volumeInfo.title}</h2>
                        <div>
                            <div class="rating-mini">
                                ${averageRating}
                            </div>
                            ${ratingsCount}
                        </div>
                        <div class="container_descrip">
                            <div class="descrip">
                                ${description}
                            </div>
                        </div>
                            ${retailPrice}
                        <button class="buy" style="margin-top: 16px" value="${item.volumeInfo.title}, ${authors}, ${retailPrice}">buy now</button>
                    </div>
                </div>
            `;
        } else {
            cardBlock = `
                <div class="product_card">
                    <div class="image_book" ${thumbnail}></div>
                    <div class="description">
                        <p>${authors}</p>
                        <h2>${item.volumeInfo.title}</h2>
                        ${ratingsCount}
                        <div class="container_descrip">
                            <div class="descrip">
                                ${description}
                            </div>
                        </div>
                            ${retailPrice}
                        <button class="buy" style="margin-top: 16px" value="${item.volumeInfo.title}, ${authors}, ${retailPrice}">buy now</button>
                    </div>
                </div>
            `;
        }
      cards = cards + cardBlock;
    });

    cards = cards;
    
    // console.log('end cards', cards);
    console.log("count" + count);
    if(count < 8) {
        resultNode.innerHTML = '';
    }
      
    resultNode.innerHTML += cards;
    shoppingCounter()
  }

function shoppingCounter(){
    for(let k = 0; k < buttonBuy.length; k++) {
        buttonBuy[k].addEventListener('click', () => {
            if(!buttonBuy[k].classList.contains("in_the_cart")) {
                countBuy += 1
                info = buttonBuy[k].getAttribute('value');
                localStorage.setItem('countBuy', countBuy);
                localStorage.setItem(`Buy${countBuy}`, info);
                elementCountBuy.innerHTML = `${countBuy}`;
                productQuantity.classList.remove("no_activ");
                buttonBuy[k].innerHTML = "IN THE CART";
                buttonBuy[k].classList.add("in_the_cart");
            } else {
                if(countBuy >= 1) {
                    countBuy -= 1;
                }
                localStorage.setItem('countBuy', countBuy);
                elementCountBuy.innerHTML = `${countBuy}`;
                if(countBuy < 1) {
                    productQuantity.classList.add("no_activ");
                }
                localStorage.removeItem(`Buy${countBuy}`);
                buttonBuy[k].innerHTML = "buy now";
                buttonBuy[k].classList.remove("in_the_cart");
            }
        });
    };
}

useRequest('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyCtUunme0MJS-BYEyA-SF_jSp6yeMNn2V4&printType=books&startIndex=0&maxResults=6&langRestrict=en', displayResult)

let count = 6;
let categor = 'Architecture';

for(let i = 0; i < genre.length; i++) {
    genre[i].addEventListener('click', () => {
        count = 6;
        selectingAnElement(genre[i]);
        categor = categories[i];
        useRequest(`https://www.googleapis.com/books/v1/volumes?q="subject:${categor}"&key=AIzaSyCtUunme0MJS-BYEyA-SF_jSp6yeMNn2V4&printType=books&startIndex=0&maxResults=6&langRestrict=en`, displayResult)
    });
};

console.log(load)
load.addEventListener('click', () =>{
    useRequest(`https://www.googleapis.com/books/v1/volumes?q="subject:${categor}"&key=AIzaSyCtUunme0MJS-BYEyA-SF_jSp6yeMNn2V4&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`, displayResult);
    count += 6
});

buttonBasket.addEventListener('click', () =>{
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
    countBuy = 0;
    localStorage.clear();
    console.log(localStorage.getItem('countBuy'));
    productQuantity.classList.add("no_activ");
});

