// Sélectionne les éléments HTML nécessaires
const submitButton = document.getElementById('submitbut');
const fullNameInput = document.getElementById('nomprenom');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('text');

// Fonction pour gérer la validation lors de l'appui sur Envoyer
function handleSubmit(event) {
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Vérifie les champs un par un et ajoute un cadre rouge si vide
    if (!fullNameInput.value.trim()) {
        fullNameInput.focus(); // Place le focus sur ce champ
        return; // Arrête l'exécution ici
    }

    if (!emailInput.value.trim()) {
        emailInput.focus(); // Place le focus sur ce champ
        return; // Arrête l'exécution ici
    }

    if (!messageInput.value.trim()) {
        messageInput.focus(); // Place le focus sur ce champ
        return; // Arrête l'exécution ici
    }


    // Si tous les champs sont remplis, affiche un message de confirmation
    alert(`Merci ${fullName}, nous avons reçu votre message : "${message}". Nous vous répondrons à ${email}.`);
}

// Ajoute un gestionnaire d'événement au bouton Envoyer
submitButton.addEventListener('click', handleSubmit);



    function checkAnswers() {
        const correctAnswers = {
            q1: 'option2',
            q2: 'option3',
            q3: 'option2',
            q4: 'option2',
            q5: 'option2',
            q6: 'option1',
            q7: 'option2',
            q8: 'option2',
            q9: 'option3',
            q10: 'option3'
        };

        let incorrectAnswers = [];
        let score = 0;
        let allAnswered = true;

        for (let question in correctAnswers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            const options = document.querySelectorAll(`input[name="${question}"]`);
            if (selectedOption) {
                // Si la réponse est correcte
                if (selectedOption.value === correctAnswers[question]) {
                    score++;
                    // Marquer la bonne réponse en vert
                    document.querySelector(`label[for="${question}_${correctAnswers[question]}"]`).classList.add('correct');
                } else {
                    // Si la réponse est incorrecte, la rendre rouge et afficher la bonne réponse en vert
                    document.querySelector(`label[for="${question}_${selectedOption.value}"]`).classList.add('incorrect');
                    // Ajouter la bonne réponse dans les erreurs
                    document.querySelector(`label[for="${question}_${correctAnswers[question]}"]`).classList.add('correct');
                }
            } else {
                allAnswered = false;
                incorrectAnswers.push(`Aucune réponse choisie pour ${question}.`);
            }
        }

        if (allAnswered) {
            // Mise à jour du score avec style
            document.getElementById('score').innerText = `Votre score : ${score} sur ${Object.keys(correctAnswers).length}`;
            document.getElementById('score').style.color = score === Object.keys(correctAnswers).length ? '#4CAF50' : '#FF6347'; // Change la couleur du score en fonction du résultat

            // Mise à jour des réponses incorrectes avec style
        } else {
            alert("Veuillez répondre à toutes les questions avant de soumettre.");
        }
    }