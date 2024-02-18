const correctAns = ['A', 'B', 'C', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.que');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    const userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    userAns.forEach((answer, index) => {
        if (answer === correctAns[index]) { 
            score += 1;
            questions[index].classList.add('correct');
        } else {
            questions[index].classList.add('wrong');
        }
    });
    scrollTo(0, 0);
    result.classList.remove('hide');
    result.querySelector('p').textContent = `You Scored ${score}/5`;
});