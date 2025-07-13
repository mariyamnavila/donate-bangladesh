function getInputValueById(id) {
    const donateValue = document.getElementById(id).value;

    const donateAmount = parseFloat(donateValue);
    // console.log(donateAmount)

    return donateAmount;
}

function getBalance(id) {
    const currentBalance = document.getElementById(id).innerText
    const currentBalanceNumber = parseFloat(currentBalance);
    return currentBalanceNumber
}

function presentBalance(id) {
    const present = document.getElementById('balance').innerText;
    const presentNumber = parseFloat(present);
    if (getInputValueById(id) > presentNumber) {
        alert('Invalid Amount')
        return
    }
    const presentB = presentNumber - getInputValueById(id)
    document.getElementById('balance').innerText = presentB;
}