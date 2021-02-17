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

var exps = prompt("Введите обязательную статью расходов в этом месяце", "");
var optExps = +prompt("Во сколько обойдется?", "");

appData.expences = {
    exps: optExps
};

var dayBudget = appData.budget / 30;

alert("Ваш бюджет на один день:" + dayBudget);

