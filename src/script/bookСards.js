const genre = document.querySelectorAll('.genre');

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

    let result = apiData.items;
    console.log(result);
    // console.log('start cards', cards);
    result.forEach(item => {
        console.log(item);

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

        //Форматирование рейтинка
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

      const cardBlock = `
        <div class="product_card">
            <div class="image_book" ${thumbnail}></div>
            <div class="description">
                <p>${authors}</p>
                <h2>${item.volumeInfo.title}</h2>
                <div class="rating-mini">
                    ${averageRating}
                </div>
                ${ratingsCount}
                <div class="container_descrip">
                    <div class="descrip">
                        ${item.volumeInfo.description}
                    </div>
                </div>
                    ${retailPrice}
                <button>buy now</button>
            </div>
        </div>
      `;
      cards = cards + cardBlock;
    });

    cards = cards + "<button>Load more</button>";
    
    // console.log('end cards', cards);
      
    resultNode.innerHTML = cards;
  }

useRequest('https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=<key>&printType=books&startIndex=0&maxResults=6&langRestrict=en', displayResult)


for(let i = 0; i < genre.length; i++) {
    genre[i].addEventListener('click', () => {
        selectingAnElement(genre[i]);
        useRequest(`https://www.googleapis.com/books/v1/volumes?q="subject:${categories[i]}"&key=<key>&printType=books&startIndex=0&maxResults=6&langRestrict=en`, displayResult)
    });
};