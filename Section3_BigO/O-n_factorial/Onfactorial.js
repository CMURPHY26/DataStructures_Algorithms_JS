//adding a loop for every element you are iterating over.
const factorial = n => {
    let num = n;
  
    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
      num = n * factorial(n - 1);
    };
  
    return num;
  };

  factorial(1); // 2 Milliseconds
factorial(5); // 3 Milliseconds
factorial(10); // 85 Milliseconds
factorial(12); //  11,942 Milliseconds