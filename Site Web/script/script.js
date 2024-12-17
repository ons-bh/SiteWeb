document.getElementById('submit-button').addEventListener('click', function() {
    // Les bonnes réponses
    const correctAnswers = {
        q1: 'HyperText Markup Language',
        q2: 'balisage',
        q3: 'sql',
        q4: 'css',
        q5: 'img',
        q6: '@media',
        q7: 'absolute',
        q8: 'hover-pseudo-class',
        q9: 'gap',
        q10: 'justify-content'
    };

    // Obtenir les réponses de l'utilisateur
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    Object.keys(correctAnswers).forEach(question => {
        let options = document.getElementsByName(question);
        let selectedValue = null;

        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                selectedValue = options[i].value;
                break;
            }
        }

        if (selectedValue === correctAnswers[question]) {
            score++;
        }
    });

    // Afficher le score via une alert
    alert(`Votre score est : ${score}/${totalQuestions}`);
});
