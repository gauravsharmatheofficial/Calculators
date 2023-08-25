const monthlyInv = document.querySelector("#monthly-investment");
const monthlyInvRange = document.querySelector("#monthly-investment-range");

monthlyInvRange.addEventListener("change", () => {
    monthlyInv.value = `${monthlyInvRange.value}`;
})

setInterval(() => {
    monthlyInvRange.value = monthlyInv.value;
}, 2000);
