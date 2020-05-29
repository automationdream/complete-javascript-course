var budgetController = (

    function () {
        // Some code
    }
)();

var UIController = (function () {
   // some code 
}

)();

var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAddItem  = function() {
        
        // 1. Get the filed input data

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