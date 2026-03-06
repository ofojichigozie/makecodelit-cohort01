function addSync(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function addAsync(num1, num2) {
  const sum = num1 + num2;

  return new Promise((resolve, reject) => {
    setTimeout(resolve(sum), 5000);
  });
}

// const sum3 = addSync(20, 15);
// console.log("The sum3 is", sum3);

addAsync(25, 70).then(function (sum2) {
  console.log("The sum2 is", sum2);
}).catch(function(error){
  console.log("There is an error", error);
});

// const sum1 = addSync(10, 20);
// console.log("The sum1 is", sum1);

async function callingAddMethods() {
  const sum3 = addSync(20, 15);
  console.log("The sum3 is", sum3);

  try {
    const sum2 = await addAsync(20, 60);
    console.log("The sum2 is", sum2)
  } catch (error) {
    console.log("An error was thrown", error);
  }

  const sum1 = addSync(10, 20);
  console.log("The sum1 is", sum1);
}

callingAddMethods();


