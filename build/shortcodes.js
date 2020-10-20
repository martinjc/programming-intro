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
    },

    insertPanopto: (panoptoID) => {
        return `
<iframe src="https://cardiff.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=${panoptoID}&v=1" width="720" height="405" style="padding: 0px; border: 1px solid #464646;" frameborder="0" allowfullscreen allow="autoplay"></iframe>
<p><small>If the embed above does not work here is a <a href="https://cardiff.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=${panoptoID}" target="blank">link to the full version of the video</a></small></p>`
    }
}