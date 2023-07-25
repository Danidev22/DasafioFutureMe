import * as readline from "readline";

function fibonacciWithEmojis(n: number): string {
  const emojis = ['🚀', '☘️', '🧑🏼‍🚀', '🤘🏼', '🇧🇷'];

  function fibonacci(num: number): number {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  function getEmoji(num: number): string {
  
    if (num % 2 === 0) {
        return `${emojis[num % emojis.length ]}`;
    }
    return num.toString();
  }

  const fibonacciSequence = [];
  for (let i = 0; i < n; i++) {
    fibonacciSequence.push(fibonacci(i));
  }

  return fibonacciSequence.map(getEmoji).join(",");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrada:", (input: string) => {
  const n = parseInt(input, 10);
  if (isNaN(n) || n < 1) {
    console.log("Por favor, insira um número válido maior ou igual a 1.");
  } else {
    const result = fibonacciWithEmojis(n);
    console.log("Saída:", result);
  }
  rl.close();
});
