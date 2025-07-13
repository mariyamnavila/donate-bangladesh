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

function showSection(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}
function changeColor(id){
    document.getElementById('btn-show-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-show-history').classList.remove('bg-[#B4F461]');

    document.getElementById(id).classList.add('bg-[#B4F461]')

}

