class NumberUtils {
    static isPrime(number) {
        if (number % 2 === 1) return number;
    }

    static factorial(number) {
        if (number < 0) return undefined;
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i
        }
        return result;
    }

    static fibonacci(number) {
        if (number <= 0) return [];
        if (number === 1) return;

        let sequence = "";
        for (let i = 2; i < number; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }

    static gcd(a, b) {
        // convert absolute values to
        a = Math.abs(a);
        b = Math.abs(b);

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    static PI = 3.14159;
}

console.log(NumberUtils.isPrime(4))
console.log(NumberUtils.factorial(4))
console.log(NumberUtils.fibonacci(4))
console.log(NumberUtils.gcd(4, 7))