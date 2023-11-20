// Function to shuffle an array using Fisher-Yates algorithm
export function shuffleArray(array) {
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
  
  // Function to assign Secret Santas
  export function assignSecretSantas(participants) {
    const shuffledParticipants = shuffleArray(participants);
    const assignments = {};
  
    for (let i = 0; i < shuffledParticipants.length; i++) {
      const currentParticipant = shuffledParticipants[i];
      const nextParticipant =
        shuffledParticipants[(i + 1) % shuffledParticipants.length];
      assignments[currentParticipant.name] = nextParticipant.name;
    }
  
    return assignments;
  }
  