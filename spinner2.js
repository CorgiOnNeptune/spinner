const spinStr = '|/-\\|/-\\|';

const spinner = str => {
  let timeout = 100;
  
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(`\r${char} `);
    }, timeout);
    timeout += 200;
  }
};

spinner(spinStr);