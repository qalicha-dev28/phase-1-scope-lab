var customerName = 'bob';
const leastFavoriteCustomer = 'bad bob';

function appendOutput(message) {
    console.log(message);
}

appendOutput('Initial customerName: ' + customerName);
appendOutput('Initial leastFavoriteCustomer: ' + leastFavoriteCustomer);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    appendOutput('After upperCaseCustomerName(): ' + customerName);
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    appendOutput('Inside setBestCustomer(): bestCustomer set to ' + bestCustomer);
    appendOutput('Global bestCustomer (after function call): ' + (typeof window !== 'undefined' && typeof window.bestCustomer !== 'undefined' ? window.bestCustomer : (typeof bestCustomer !== 'undefined' ? bestCustomer : 'undefined')));
}

function overwriteBestCustomer() {
    if (typeof bestCustomer !== 'undefined') {
        bestCustomer = 'maybe bob';
        appendOutput('After overwriteBestCustomer(): bestCustomer changed to ' + bestCustomer);
    } else {
        appendOutput('bestCustomer is not yet defined globally. Call setBestCustomer first.');
    }
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new bad bob';
    appendOutput('Attempted to change leastFavoriteCustomer. Result: ' + leastFavoriteCustomer);
}

appendOutput('\n--- Call functions directly in your console to see changes ---');