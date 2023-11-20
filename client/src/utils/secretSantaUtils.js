// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to assign Secret Santas
export function assignSecretSantas(participants) {
    const shuffledParticipants = [...participants];
    shuffleArray(shuffledParticipants);

    const assignments = {};
    for (let i = 0; i < shuffledParticipants.length; i++) {
        const currentParticipant = shuffledParticipants[i];
        const nextParticipant = shuffledParticipants[(i + 1) % shuffledParticipants.length];
        assignments[currentParticipant.name] = nextParticipant.name;
    }
    return assignments;
}