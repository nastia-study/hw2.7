var money, time;

var startBtn = document.querySelector('#start'),
    values = document.querySelectorAll('.result-table div:nth-child(2n)'),
    expences = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.querySelectorAll('.data button')[0],
    optExpensesBtn = document.querySelectorAll('.data button')[1],
    countBtn = document.querySelectorAll('.data button')[2],
    optExpenses = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),

	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i <= expences.length / 2; i += 2) {
        let expName = expences[i].value;
        let expVal = +expences[i+1].value;
        if (typeof(expName) == 'string' && typeof(expVal) == 'number' && expName != '' && expVal != '' && typeof expName != null && typeof expVal != null) {
            appData.expences[expName] = expVal;
            sum += +expVal;
        } else {
            console.log("Введите нормальные данные!");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optExpensesBtn.addEventListener('click', function() {
    let allOptExps = '';
    for (let i = 0; i < optExpenses.length; i++) {
        appData.optionalExpenses[i] = optExpenses[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
    
});

countBtn.addEventListener('click', function() {
    if (appData.money != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'мало!';
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'ну норм';
        } else if (appData.moneyPerDay >= 2000 && appData.moneyPerDay < 10000) {
            levelValue.textContent = ' найс';
        } else if (appData.moneyPerDay >= 10000) {
            levelValue.textContent = 'жесть';
        } else {
            levelValue.textContent = 'чето не так';
        }
    } else {
        dayBudgetValue.textContent = 'error!!1!';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    incomeValue.textContent = items;
    appData.income = items.split(', ');
});

checkSavings.addEventListener('click', function() {
    (appData.savings == false) ? 
        appData.savings = true : 
        appData.savings = false;
})

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
    
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
    
        appData.monthIncome = (sum/100/12*percent).toFixed(1);
        appData.yearIncome = (sum/100*percent).toFixed(1);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
})

var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

