
const now = new Date();

const time = now.toUTCString()

document.getElementById('btn-donate1')
    .addEventListener('click', function (event) {
        event.preventDefault;
        const floodNoakhali = getInputValueById('flood-noakhali-input');
        const currentAmount = getBalance('flood-noakhali-balance');
        // const title = document.getElementById('noakhali-title').innerText;
        if (isNaN(floodNoakhali) || floodNoakhali < 0) {
            document.getElementById('congrats').innerText = 'Sorry!';
            document.getElementById('donated').innerText = 'Donation Failed';
            document.getElementById('success').innerText = 'Unsuccessful';
            alert('Invalid Amount');
            return;
        }
        else {
            const newBalance = floodNoakhali + currentAmount;
            document.getElementById('flood-noakhali-balance').innerText = newBalance;
            presentBalance('flood-noakhali-input');

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'p-8', 'w-full', 'mx-auto')
            div.innerText = `${floodNoakhali} taka is Donated for Flood at Noakhali,Bangladesh
            ${time}
            `;
            // console.log(p)
            document.getElementById('history-container').appendChild(div);
        }
    })
document.getElementById('btn-donate2')
    .addEventListener('click', function (event) {
        event.preventDefault;
        const floodFeni = getInputValueById('flood-feni-input');
        const currentAmount = getBalance('flood-feni-balance');
        if (isNaN(floodFeni) || floodFeni < 0) {
            document.getElementById('congrats').innerText = 'Sorry!';
            document.getElementById('donated').innerText = 'Donation Failed';
            document.getElementById('success').innerText = 'Unsuccessful';
            alert('Invalid Amount');
            return;
        }
        else {
            const newBalance = floodFeni + currentAmount;
            document.getElementById('flood-feni-balance').innerText = newBalance;
            presentBalance('flood-feni-input');

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'p-8', 'w-full', 'mx-auto')
            div.innerText = `${floodFeni} taka is Donated for Flood Relief in Feni,Bangladesh.
            ${time}
            `;
            // console.log(p)
            document.getElementById('history-container').appendChild(div);
        }
    })
document.getElementById('btn-donate3')
    .addEventListener('click', function (event) {
        event.preventDefault;
        const quotaInput = getInputValueById('quota-input');
        const currentAmount = getBalance('quota-balance');
        if (isNaN(quotaInput) || quotaInput < 0) {
            document.getElementById('congrats').innerText = 'Sorry!';
            document.getElementById('donated').innerText = 'Donation Failed';
            document.getElementById('success').innerText = 'Unsuccessful';
            alert('Invalid Amount');
            return;
        }
        else {
            const newBalance = quotaInput + currentAmount;
            document.getElementById('quota-balance').innerText = newBalance;

            presentBalance('quota-input');

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'p-8', 'w-full', 'mx-auto')
            div.innerText = `${quotaInput} taka is Donated for Aid for Injured in the Quota Movement,Bangladesh .
            ${time}
            `;
            // console.log(p)
            document.getElementById('history-container').appendChild(div);

        }
    })