// Задача «Аннигилируй это».
// Вы устроились работать в лабораторию по изучению антиматерии,
// где проводят различные опыты. Ваш отдел изучает процессы,
// которые происходят при объединении материи и антиматерии.
// Вам необходимо провести серию опытов над некоторым
// количеством молекул.
// Соседний отдел разработал аппарат, который превращает
// материю в антиматерию на небольшое время. Он пригодится
// вам в проведении опытов, в которых используется следующий алгоритм:
// 1. Находим 2 самых тяжёлых молекулы.
// 2. Одну из них превращаем в антиматерию.
// 3. Объединяем их. При этом, если вес одинаковый, они аннигилируются.
// Если же вес различается, то мы получаем новую молекулу, вес которой
// равен разнице весов предыдущих двух. Сама получившаяся молекула
// является материей.
// Если осталась одна молекула — нужно выяснить её вес. Если же молекул
// много — возвращаемся к пункту 1.
// Вам необходимо узнать, молекула какого веса останется в конце
// опыта, это знание нужно учёным другого отдела. Вам необходимо
// разработать код, чтобы он работал за приемлемое время.
// В качестве входных данных у вас будет массив с весами
// молекул weights. В качестве выходных данных необходимо в
// консоль вернуть число, которое обозначает вес последней
// молекулы. Если молекул не останется, то необходимо вернуть 0.
// Пример работы:
// Вход: let weights = [2,7,4,1,8,1]
// Выход: 1
// Берём молекулы с весом 7 и 8, превращаем 7 в антимолекулу
// и сталкиваем её с молекулой весом 8. Остаётся молекула
// весом 1. Веса оставшихся молекул стали [2,4,1,1,1].
// Берём молекулы с весом 2 и 4, превращаем 2 в антимолекулу
// и сталкиваем её с молекулой весом 4. Остаётся молекула
// весом 2. Веса оставшихся молекул стали [2,1,1,1]. Берем
// молекулы с весом 2 и 1, превращаем 1 в антимолекулу и
// сталкиваем её с молекулой весом 2. Остаётся молекула весом 1.
// Веса оставшихся молекул стали [1,1,1]. Берем молекулы с
// весом 1 и 1, превращаем одну из них в антимолекулу и
// сталкиваем ее со второй. Они аннигилируются. Веса
// оставшихся молекул [1]. Осталась одна молекула. Результат — 1.

let weights = [2,7,4,1,8,1];

switch(weights.length) {
    case 0: 
        console.log(`result: 0`);
        break;
    case 1:
        console.log(`result: ${weights[0]}`);
        break;
    case 2:
        console.log(`result: ${Math.abs(weights[0]-weights[1])}`);
}

let max1 = 0, max = 1;

for(let i = 2; i < weights.length; i++) {
    if(weights[i] > weights[max]) {
        if(weights[max1] <= weights[max]) {
            max1 = max;
            max = i;
        } else {
            max = max1;
            max1 = i;
        }
    }
    if(i == weights.length-1) {
        i = 1;
        if(!weights[max] && !weights[max1]) {
            console.log(`result: 0`);
            break;
        }
        if(!weights[max]) {
            console.log(`result: ${weights[max1]}`);
            break;
        } else if(!weights[max1]) {
            console.log(`result: ${weights[max]}`);
            break;
        }
        weights[max] = Math.abs(weights[max]-weights[max1]);
        weights[max1] = 0;
        max1 = 0;
        max = 1;
    }
}

// скопировал решение