var budgetController = (

    function () {
        // Some code
    }
)();

var UIController = (function () {

    return {
        getinput: function () {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value,
            }
        }
    }
   // some code 
}

)();

var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAddItem  = function() {
        
        // 1. Get the filed input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Calculate the budget

        // 4. Display the budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);
