// for taking user input from investment.
const monthlyInv = document.querySelector("#monthly-investment");
const monthlyInvRange = document.querySelector("#monthly-investment-range");

const lumpsumBtn = document.querySelector(".lumpsum-btn");
let calc_lupsum = false;

const sipbtn = document.querySelector(".sip-btn");
sipbtn.classList.add('selected');

lumpsumBtn.addEventListener("click", () => {
    calc_lupsum = !calc_lupsum;

    if (calc_lupsum)
    {
        document.querySelector(".sip-btn").innerText = 'SIP ✗';
        lumpsumBtn.innerText = 'Lumpsum ✔ ';
    }
    else
    {
        document.querySelector(".sip-btn").innerText = 'SIP ✔';
        lumpsumBtn.innerText = 'Lumpsum ✗ ';
    }
    lumpsumBtn.classList.toggle("selected");
    document.querySelector(".sip-btn").classList.toggle('selected');
})

sipbtn.addEventListener("click", () => {
    calc_lupsum = !calc_lupsum;

    if (calc_lupsum)
    {
        document.querySelector(".sip-btn").innerText = 'SIP ✗';
        lumpsumBtn.innerText = 'Lumpsum ✔ ';
    }
    else
    {
        document.querySelector(".sip-btn").innerText = 'SIP ✔';
        lumpsumBtn.innerText = 'Lumpsum ✗ ';
    }
    lumpsumBtn.classList.toggle("selected");
    document.querySelector(".sip-btn").classList.toggle('selected');
})

monthlyInvRange.addEventListener("change", () => {
    monthlyInv.value = monthlyInvRange.value;
})

// for taking user input from percentage.
const percentReturn = document.querySelector("#percent-return");
const percentReturnRange = document.querySelector("#percent-return-range");

percentReturnRange.addEventListener("change", () => {
    percentReturn.value = percentReturnRange.value;
})

// for taking user input from time period.
const timePeriod = document.querySelector("#time-period");
const timePeriodRange = document.querySelector("#time-period-range");

timePeriodRange.addEventListener("change", () => {
    timePeriod.value = timePeriodRange.value;
})

setInterval(() => {
    monthlyInvRange.value = monthlyInv.value;
    percentReturnRange.value = percentReturn.value;
    timePeriodRange.value = timePeriod.value;
}, 2000);

setInterval(() => {
    const I = (percentReturn.value) / 1200;
    const M = (monthlyInv.value);
    const T = (timePeriod.value);

    let N = T;
    if (!calc_lupsum)
    {
        N = T * 12;
    }

    const inv = parseInt(M * (12) * T);
    const total = parseInt(M * (Math.pow(I + 1, N) - 1) * (I + 1) / (I));
    const est = total - inv;


    if (est >= 0 && total >= 0) {
        document.querySelector("#investment-am-result").innerHTML = `Invested amount: ${inv}`;
        document.querySelector("#est-ret-result").innerHTML = `Est. returns: ${est}`;
        document.querySelector("#total-val-result").innerHTML = `Total value: ${total}`;
    }

}, 200)
