const prompt = require("prompt-sync")();

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }

    return shuffledArray;
}

function assignSecretSantas(participants) {
    const shuffledParticipants = shuffleArray(participants);
    const assignments = {};

    for (let i = 0; i < shuffledParticipants.length; i++) {
        const currentParticipant = shuffledParticipants[i];
        const nextParticipant = 
            shuffledParticipants[(i + 1) % shuffledParticipants.length];
        assignments[currentParticipant] = nextParticipant;
    }

    return assignments;
}

const numParticipants = parseInt(prompt("Enter the number of participants: "), 10);
const participants = [];

for (let i = 0; i < numParticipants; i++) {
    participants.push(prompt(`Enter the name of participant ${i + 1}: `));
}

const secretSantaAssignments = assignSecretSantas(participants);

console.log("\nSecret Santa Assignments:\n");

participants.forEach((participant) => {
    const assignedSanta  = secretSantaAssignments[participant];
    console.log(`${participant} -> ${assignedSanta}`);
});