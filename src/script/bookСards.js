const genre = document.querySelectorAll('.genre');

function selectingAnElement(elem) {
    document.querySelector('.categories .activ').classList.remove('activ');
    elem.parentNode.classList.add('activ');
}

function addCards(elem) {
    console.log(elem)
    let xhr = new XMLHttpRequest();
    // Инициализируем запрос
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyCtUunme0MJS-BYEyA-SF_jSp6yeMNn2V4&printType=books&startIndex=0&maxResults=6&langRestrict=en');

    // Добавляем обрабочик ответа сервера
    xhr.onload = function() {
    if (xhr.status != 200) { // HTTP ошибка?
        // Если статус не 200 (указывает, что запрос выполнен успешно),
        // то обрабатываем отдельно
        console.log('Статус ответа: ', xhr.status);
    } else {
        // Ответ мы получаем в формате JSON, поэтому его надо распарсить
        // console.log('Ответ сервера JSON', xhr.response);

        // Парсим и выводим ответ сервера
        let result = JSON.parse(xhr.response)
        console.log(result);
        console.log('Название', result.items[0].volumeInfo.title);
        console.log('Автор', result.items[0].volumeInfo.authors);
        //console.log('Средний рейтинг, если есть', result.items[0].volumeInfo.averageRating);
        console.log('Описание', result.items[0].volumeInfo.description);
        console.log('Возможность продажи', result.items[0].saleInfo.saleability);
    }
    };

    // Добавляем обрабочик процесса загрузки
    xhr.onprogress = function(event) {
    // Выведем прогресс загрузки
    console.log(`Загружено ${event.loaded} из ${event.total}`)
    };

    // Добавляем обрабочик ошибки
    xhr.onerror = function() {
    // обработаем ошибку, не связанную с HTTP (например, нет соединения)
    console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    // Отправляем запрос
    xhr.send();
}



for(let i = 0; i < genre.length; i++) {
    genre[i].addEventListener('click', () => {
        selectingAnElement(genre[i]);
        addCards(genre[i].textContent);
    });
};