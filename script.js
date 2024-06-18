document.addEventListener('DOMContentLoaded', function() {
    const donationAmountInput = document.getElementById('donation-amount');
    const totalCashElement = document.getElementById('total-cash');
    const directSupportElement = document.getElementById('direct-support');
    const operationalCostElement = document.getElementById('operational-cost');
    const paymentExpensesElement = document.getElementById('payment-expenses');
    const fundraisingAdvertsElement = document.getElementById('fundraising-adverts');

    let totalCash = 0;
    let directSupport = 0;
    let operationalCost = 0;
    let paymentExpenses = 0;
    let fundraisingAdverts = 0;

    const ctx = document.getElementById('donation-chart').getContext('2d');
    const donationChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Direct Support', 'Operational Cost', 'Payment Expenses', 'Fundraising Adverts'],
            datasets: [{
                label: 'Fund Allocation',
                data: [directSupport, operationalCost, paymentExpenses, fundraisingAdverts],
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
                borderWidth: 1
            }]
        }
    });

    donationAmountInput.addEventListener('input', function() {
        const donationAmount = parseFloat(donationAmountInput.value) || 0;
        directSupport = donationAmount * 0.4;
        operationalCost = donationAmount * 0.3;
        paymentExpenses = donationAmount * 0.2;
        fundraisingAdverts = donationAmount * 0.1;

        totalCash = directSupport + operationalCost + paymentExpenses + fundraisingAdverts;

        totalCashElement.textContent = totalCash.toFixed(2);
        directSupportElement.textContent = directSupport.toFixed(2);
        operationalCostElement.textContent = operationalCost.toFixed(2);
        paymentExpensesElement.textContent = paymentExpenses.toFixed(2);
        fundraisingAdvertsElement.textContent = fundraisingAdverts.toFixed(2);

        donationChart.data.datasets[0].data = [directSupport, operationalCost, paymentExpenses, fundraisingAdverts];
        donationChart.update();
    });
});