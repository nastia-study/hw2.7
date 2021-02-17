var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (i = 0; i < 3; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце", "");
    var b = +prompt("Во сколько обойдется?", "");
    if (typeof(a) == 'string' && typeof(b) == 'number' && a != '' && b != '' && typeof a != null && typeof b != null) {
        appData.expences[a] = b; 
        console.log("done");
    } else {
        console.log("Введите нормальные данные!");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на один день:" + appData.moneyPerDay);
console.log(appData);

