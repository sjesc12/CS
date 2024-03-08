// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to check prime number and display result
function checkPrime() {
    const primeInput = document.getElementById('primeInput').value;
    const primeResult = document.getElementById('primeResult');

    if (isPrime(primeInput)) {
        primeResult.textContent = `${primeInput} is a prime number.`;
    } else {
        primeResult.textContent = `${primeInput} is not a prime number.`;
    }
}

// Function to calculate GCD of two numbers
function calculateGCD() {
    const gcdInput1 = document.getElementById('gcdInput1').value;
    const gcdInput2 = document.getElementById('gcdInput2').value;
    const gcdResult = document.getElementById('gcdResult');

    const num1 = parseInt(gcdInput1);
    const num2 = parseInt(gcdInput2);

    if (isNaN(num1) || isNaN(num2)) {
        gcdResult.textContent = 'Please enter valid numbers.';
    } else {
        gcdResult.textContent = `GCD of ${num1} and ${num2} is ${calculateGCDHelper(num1, num2)}.`;
    }
}

// Helper function to calculate GCD using Euclidean algorithm
function calculateGCDHelper(a, b) {
    return b === 0 ? a : calculateGCDHelper(b, a % b);
}
