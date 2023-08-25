// for taking user input from investment.
const monthlyInv = document.querySelector("#monthly-investment");
const monthlyInvRange = document.querySelector("#monthly-investment-range");

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

    const I = percentReturn.value / 1200;
    const M = monthlyInv.value;
    const T = timePeriod.value;

    const inv = M * (12) * T;
    const est = M * (Math.pow(1 + I, T - 1) / (I)) * (I + 1);
    const total = inv + est;

    document.querySelector("#investment-am-result").innerHTML = `Invested amount: ${parseInt(inv)}`;
    document.querySelector("#est-ret-result").innerHTML = `Est. returns: ${parseInt(est)}`;
    document.querySelector("#total-val-result").innerHTML = `Total value: ${parseInt(total)}`;

}, 200)
