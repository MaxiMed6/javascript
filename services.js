var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн"; // добавление новой услуги через квадратные скобки

function Prices(obj) { //получение цен
    return Object.values(obj) //получение значений
        .filter(value => typeof value === 'string') //фильтрация на строки
        .map(price => parseInt(price, 10)); //перевод в числа десятичной системы
}

function TotalPrice(obj) {
    return Prices(obj).reduce((total, price) => total + price, 0) + " грн"; //суммирование. 0 - начальное значение
}

function MinPrice(obj) {
    return Math.min(...Prices(obj)) + " грн"; //поиск минимального значения. ... - rest оператор
}

function MaxPrice(obj) {
    return Math.max(...Prices(obj)) + " грн"; //поиск максимального значения
}
console.log(TotalPrice(services)); 
console.log(MinPrice(services));   
console.log(MaxPrice(services));   
