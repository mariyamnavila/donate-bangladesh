document.getElementById('btn-donate1')
    .addEventListener('click', function (event) {
        event.preventDefault;
        const floodNoakhali = getInputValueById('flood-noakhali-input');
        const currentAmount = getBalance('flood-noakhali-balance');
        // console.log(currentAmount)
        if (isNaN(floodNoakhali) || floodNoakhali < 0) {
            alert('Invalid Amount');
            return;
        }
        else {
            const newBalance = floodNoakhali + currentAmount;
            document.getElementById('flood-noakhali-balance').innerText = newBalance;
            presentBalance('flood-noakhali-input');
        }
    })
document.getElementById('btn-donate2')
    .addEventListener('click', function (event) {
        event.preventDefault;
        const floodFeni = getInputValueById('flood-feni-input');
        const currentAmount = getBalance('flood-feni-balance');
        // console.log(currentAmount)
        if (isNaN(floodFeni) || floodFeni < 0) {
            alert('Invalid Amount');
            return;
        }
        else {
            const newBalance = floodFeni + currentAmount;
            document.getElementById('flood-feni-balance').innerText = newBalance;
            presentBalance('flood-feni-input');
        }
    })
document.getElementById('btn-donate3')
    .addEventListener('click', function (event) {
        event.preventDefault;
        const quotaInput = getInputValueById('quota-input');
        const currentAmount = getBalance('quota-balance');
        // console.log(currentAmount)
        if (isNaN(quotaInput) || quotaInput < 0) {
            alert('Invalid Amount');
            return;
        }
        else {
            const newBalance = quotaInput + currentAmount;
            document.getElementById('quota-balance').innerText = newBalance;
            
            presentBalance('quota-input');

        }
    })