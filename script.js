var money, time;

function detectDayBudget() {  // определяю бюджет на месяц
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

detectDayBudget();

var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 3; i++) {
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

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        сonsole.log(" мало!");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log(" ну норм");
    } else if (appData.moneyPerDay >= 2000 && appData.moneyPerDay < 10000) {
        console.log(" найс ");
    } else if (appData.moneyPerDay >= 10000) {
        console.log(" жесть ");
    } else {
        console.log(" чето не так");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExps() {
    for (let i = 0; i < 3; i++) {
        let optExps = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExps;
    }
}

chooseOptExps();

