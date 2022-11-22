const spinStr = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| '];

const spinner = str => {
  let timeout = 100;
  
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeout);
    timeout += 200;
  }
};

spinner(spinStr);