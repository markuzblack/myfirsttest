'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms : function() {
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
    },
    detectPersonalLevel : function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно таки мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы просто киноман');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB : function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB : function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        } 
    },
    writeYourGaners : function () {
        for (let i = 1; i <= 3; i ++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '', genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр под номером ${i + 1} - это ${item} `);
        });
    }
};



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

