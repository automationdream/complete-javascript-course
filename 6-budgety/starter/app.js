var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur){
            sum += cur.value;
        });
        data.totals[type]=sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                ID = 0
            }

            // Create new item
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },
        calculateBudget: function () {
            // calculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');



            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp

            // calculate the percentege of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round(data.totals.exp/ data.totals.inc * 100);
            } else {
                data.percentage = -1;
            }
        },

        deleteItem: function (type, id) {
            var ids, index;

            ids = data.allItems[type].map(function(current) {
                return current.id;
            })

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index,1);
            }
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function () {
            console.log(data);
        }

    }
})();
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDesription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    };

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // Create HTML string with placeholder text 

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // Replace placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // Insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        clearFields: function () {
            var fields;
            fields = document.querySelectorAll(DOMstrings.inputDesription + ',' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = "";

            })

            fieldsArr[0].focus();
        },
        displayBuget: function (obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }
            else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "--"
            }
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    }
    // some code 
}

)();

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    };
    var updateBudget = function () {
        // 1. Calculate the budget
            budgetCtrl.calculateBudget()

        // 2. Return the budget
            var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
            UICtrl.displayBuget(budget);

    }

    var ctrlAddItem = function () {
        var input, newItem

        // 1. Get the filed input data
        var input = UICtrl.getinput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetController.addItem(input.type, input.description, input.value);

            // 3. Add item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget

            updateBudget();
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemId, splitID, type, ID; 

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemId) {
            // inc-1
            splitID = itemId.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);

            //1. delete the item from the data structure
            budgetController.deleteItem(type, id);

            //2. delete the item from the UI

            //3. Update and show the new budget


        }
    }

    return {
        init: function () {
            console.log('Application has started.');
            UICtrl.displayBuget(
            {
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();