let inputField = document.getElementById('input-value');
let addAmount = document.getElementById('add-amount');
let inputFieldFeni = document.getElementById('input-value-feni');
let addAmountFeni = document.getElementById('add-amount-feni')
let inputFieldInjured = document.getElementById('input-value-injured');
let addAmountInjured = document.getElementById('add-amount-injured');
let totalAmount = document.getElementById('total-amount');

function showBtn(id) {
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.add('bg-btn_color', 'border-none');
    document.getElementById('history-btn').classList.remove('bg-btn_color', 'border-none');
    showBtn('donation');
})
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.add('bg-btn_color', 'border-none');
    document.getElementById('donation-btn').classList.remove('bg-btn_color', 'border-none');
    showBtn('history');
})
// Donate Money
function donateMoney() {
    let inputValue = parseFloat(inputField.value);
    if (inputValue < 0)  {
        alert('Sorry! It is not allowed negative values.')
        return;
    }
    else if(inputValue > 5500){
         alert('Your Account doesn`t have enough Money')
         return;
    }
    let addAmountValue = parseFloat(addAmount.innerText);
    let addMoney = addAmountValue + inputValue;
    document.getElementById('add-amount').innerText = addMoney;
    let totalAmountValue = parseFloat(totalAmount.innerText);
    let currentAmount = totalAmountValue - inputValue;
    document.getElementById('total-amount').innerText = currentAmount;
    let history = document.getElementById('history');
    history.innerHTML += `
    <div class="border-2 rounded-2xl p-10 space-y-2 mb-4">
        <h1 class="font-semibold">${inputValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p id="time" class="text-sm opacity-60">${new Date}</p>
    </div>
    `
}
function donateMoneyFeni() {
    let inputValueFeni = parseFloat(inputFieldFeni.value);
    let addAmountValueFeni = parseFloat(addAmountFeni.innerText);
    let addMoneyFeni = addAmountValueFeni + inputValueFeni;
    document.getElementById('add-amount-feni').innerText = addMoneyFeni;
    let totalAmountValue = parseFloat(totalAmount.innerText);
    let currentAmount = totalAmountValue - inputValueFeni;
    document.getElementById('total-amount').innerText = currentAmount;
    if (inputValueFeni < 0) {
        alert('Sorry! It is not allowed negative values.');
        return;
    }
    let history = document.getElementById('history');
    history.innerHTML += `
    <div class="border-2 rounded-2xl p-10 space-y-2 mb-4">
        <h1 class="font-semibold">${inputValueFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
        <p class="text-sm opacity-60">${new Date}</p>
    </div>
    `
}
function donateMoneyFeniInjured() {
    let inputValueInjured = parseFloat(inputFieldInjured.value);
    let addAmountValueInjured = parseFloat(addAmountInjured.innerText);
    let addMoneyFeni = addAmountValueInjured + inputValueInjured;
    document.getElementById('add-amount-injured').innerText = addMoneyFeni;
    let totalAmountValue = parseFloat(totalAmount.innerText);
    let currentAmount = totalAmountValue - inputValueInjured;
    document.getElementById('total-amount').innerText = currentAmount;
    if (inputValueInjured < 0) {
        alert('Sorry! It is not allowed negative values.');
        return;
    }
    let history = document.getElementById('history');
    history.innerHTML += `
    <div class="border-2 rounded-2xl p-10 space-y-2 mb-4">
        <h1 class="font-semibold">${inputValueInjured} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p class="text-sm opacity-60">${new Date}</p>
    </div>
    `
}


// Go to Blog Page
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = './blog.html';
})
//Go to Home Page
function home() {
    window.location.href = './index.html'
}

