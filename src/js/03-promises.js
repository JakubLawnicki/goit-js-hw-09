function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

const inputDelay = document.querySelector("input[name='delay']");
const inputStep = document.querySelector("input[name='step']");
const inputAmount = document.querySelector("input[name='amount']");
const button = document.querySelector('button');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  setTimeout(() => {
    createPromise(1, inputDelay.value);
  }, inputDelay.value);
  const interval = setInterval(() => {
    for (let i = 2; i <= inputAmount.value; i++) {
      createPromise(i, inputStep.value);
    }
    clearInterval(interval);
  }, inputStep.value);
});
