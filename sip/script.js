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
    document.querySelector("#investment-am-result").value = monthlyInv.value * ((1 + percentReturn/10));
    document.querySelector("#est-ret-result").value = "";
    document.querySelector("#total-val-result").value = "";
}, 200)
