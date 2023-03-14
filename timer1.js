const countdownTimer = function() {
  const seconds = process.argv.slice(2).map(Number);
  for (const second of seconds) {
    if (second < 0 && isNaN(second)) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, second * 1000);
  }
};

countdownTimer();