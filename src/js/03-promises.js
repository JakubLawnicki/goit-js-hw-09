import Notiflix from 'notiflix';
Notiflix.Notify.init({});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const inputDelay = document.querySelector("input[name='delay']");
const inputStep = document.querySelector("input[name='step']");
const inputAmount = document.querySelector("input[name='amount']");
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  createPromise(1, inputDelay.value)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  for (let i = 2; i <= inputAmount.value; i++) {
    createPromise(i, inputStep.value)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
