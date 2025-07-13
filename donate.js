
const present = document.getElementById('balance').innerText;
const presentNumber = parseFloat(present);


const now = new Date();

const time = now.toUTCString()

document.getElementById('btn-donate1')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const floodNoakhali = getInputValueById('flood-noakhali-input');
        const currentAmount = getBalance('flood-noakhali-balance');
        if (isNaN(floodNoakhali) || floodNoakhali < 0 || floodNoakhali > presentNumber) {
            document.getElementById('congrats').innerText = 'Sorry!';
            document.getElementById('donated').innerText = 'Donation Failed';
            document.getElementById('success').innerText = 'Unsuccessful';
            alert('Invalid Amount');
            return;
        }
        else {

            document.getElementById('congrats').innerText = 'Congrats!';
            document.getElementById('donated').innerText = 'You Have Donated for Humankind';
            document.getElementById('success').innerText = 'Successfully';

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
        event.preventDefault();
        const floodFeni = getInputValueById('flood-feni-input');
        const currentAmount = getBalance('flood-feni-balance');
        if (isNaN(floodFeni) || floodFeni < 0 || floodFeni > presentNumber) {
            document.getElementById('congrats1').innerText = 'Sorry!';
            document.getElementById('donated1').innerText = 'Donation Failed';
            document.getElementById('success1').innerText = 'Unsuccessful';
            alert('Invalid Amount');
            return;
        }
        else {

            document.getElementById('congrats1').innerText = 'Congrats!';
            document.getElementById('donated1').innerText = 'You Have Donated for Humankind';
            document.getElementById('success1').innerText = 'Successfully';

            const newBalance = floodFeni + currentAmount;
            document.getElementById('flood-feni-balance').innerText = newBalance;
            presentBalance('flood-feni-input');

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'p-8', 'w-full', 'mx-auto')
            div.innerText = `${floodFeni} taka is Donated for Flood Relief in Feni,Bangladesh.
            ${time}
            `;
            document.getElementById('history-container').appendChild(div);
        }
    })
document.getElementById('btn-donate3')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const quotaInput = getInputValueById('quota-input');
        const currentAmount = getBalance('quota-balance');
        if (isNaN(quotaInput) || quotaInput < 0 || quotaInput > presentNumber) {
            document.getElementById('congrats2').innerText = 'Sorry!';
            document.getElementById('donated2').innerText = 'Donation Failed';
            document.getElementById('success2').innerText = 'Unsuccessful';
            alert('Invalid Amount');
            return;
        }
        else {

            document.getElementById('congrats2').innerText = 'Congrats!';
            document.getElementById('donated2').innerText = 'You Have Donated for Humankind';
            document.getElementById('success2').innerText = 'Successfully';

            const newBalance = quotaInput + currentAmount;
            document.getElementById('quota-balance').innerText = newBalance;

            presentBalance('quota-input');

            const div = document.createElement('div');
            div.classList.add('border', 'rounded-lg', 'p-8', 'w-full', 'mx-auto')
            div.innerText = `${quotaInput} taka is Donated for Aid for Injured in the Quota Movement,Bangladesh .
            ${time}
            `;
            document.getElementById('history-container').appendChild(div);

        }
    })