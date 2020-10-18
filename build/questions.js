module.exports = {
    insertQuestions: (questions) => {
        let template = ``;
        questions.forEach((q, i) => {
            template += `
<div class="question-block" id="q-block${i}">
<p class="question" id="q${i}">${q.question}</p>`;
            q.answers.forEach((a, j) => {
                template += `
<div class="answer-block" id="a-block${j}" data-correct="${a.correct}">
<p class="answer" id="a${j}">${a.answer}</p>
<p class="feedback hidden">${a.feedback}</p>
</div>
                `;
            });
            template += `
</div>
`;
        });
        return template;
    }
}