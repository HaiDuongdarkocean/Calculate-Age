const btnEL = document.getElementById('btn');
const birthdayEL = document.getElementById('birthday');
const resultEL = document.getElementById('result');

function calculateAge() {
    const birthdayValue = birthdayEL.value;
    if (birthdayValue === null) {
        alert("Please enter correctly your birthday.");
    } else {
        const age = getAge(birthdayValue);
        const resultage = `${age} year${age > 1 ? 's' : ''} old`

        const mAge = getmAge(birthdayValue);
        const resultmAge = `${mAge} month${mAge > 1 ? 's' : ''}`;

        
        const dAge = getdAge(birthdayValue);
        const resultdAge = `${dAge} day${dAge > 1 ? 's' : ''}`;

        resultEL.innerText = `Your age is ${resultdAge} ${resultmAge} ${resultage}`;
    }
}

function getAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function getmAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        m = '';
    }
    return m;

}

function getdAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let date = today.getDate() - birthDate.getDate()
    if (date < 0 || (date === 0 && today)) {
        date = '';
    }
    return date;
}

btnEL.addEventListener('click', calculateAge);