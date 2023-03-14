(function countdownTimer() {
  const seconds = process.argv.slice(2).map(Number);
  for (let i = 0; i < seconds.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds[i] * 1000);
  }
}());