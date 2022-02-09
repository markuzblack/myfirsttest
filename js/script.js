'use strict';
let numberOfFilms;

    function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
     start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    function rememberMyFilms () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов? ', ''),
                  b = prompt('На сколько вы его оцените ?', '');
                  personalMovieDB.movies[a] = [b];
          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = [b];
          } else {
              console.log('error');
              i--;
          }
        }
    }
    rememberMyFilms();

    function detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно таки мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы просто киноман');
        } else {
            console.log('Произошла ошибка!');
        }
    }
    detectPersonalLevel();

    function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    showMyDB(personalMovieDB.privat);

    function writeYourGaners () {
        for (let i = 1; i <= 3; i ++) {
            let gen = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = gen;
        }
    }
    writeYourGaners();



    const option = {
        name: 'test',
        width: '1024',
        height: '1024',
        colors: {
            border: 'black',
            bg: 'red'
        }
    };
    
    let counter = 0;
    for (let key in option) {
        if (typeof(option[key]) === 'object') {
            for (let i in option[key]) {
                console.log(`свойство ${i} имеет значение ${option[key][i]}`);
                counter++;
            }
        } else {
            console.log(`свойство ${key} имеет значение ${option[key]}`);
            counter++;
        }
        
    }
    console.log(counter);