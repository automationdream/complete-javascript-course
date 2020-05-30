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


    var data = {
        allItems: {
        exp: [],
        inc : [],
        },
        totals: {
           exp: 0,
           inc: 0,
    }

    }();

var UIController = (function () {

        var DOMstrings = {
            inputType: '.add__type',
            inputDesription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn',
        };

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
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

    };

    var ctrlAddItem  = function() {
        
        // 1. Get the filed input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Calculate the budget

        // 4. Display the budget on the UI

    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();