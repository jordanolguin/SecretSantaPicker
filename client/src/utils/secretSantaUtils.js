// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to assign Secret Santas
export function assignSecretSantas(people) {
    const shuffledPeople = [...people];
    shuffleArray(shuffledPeople);

    const assignments = {};
    for (let i = 0; i < shuffledPeople.length; i++) {
        const currentPerson = shuffledPeople[i];
        const nextPerson = shuffledPeople[(i + 1) % shuffledPeople.length];
        assignments[currentPerson.name] = nextPerson.name;
    }
    return assignments;
}