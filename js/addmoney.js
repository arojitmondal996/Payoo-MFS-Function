/**
 * how to get a number from an input field
 * 1. create a variable
 * 2. right side document.getElementById(id)
 * 3. value
 * 4. parseFloat
 */
console.log('add money added');
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = document.getElementById('input-add-money').ariaValueMax;
        const addMoneyNumber = parseFloat(addMoney);


    })