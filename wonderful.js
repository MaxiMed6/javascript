const data = {
    words: ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]
  };
  
  const regex = /\b[^Aa\s]{6,}\b/g;
  
  data.words.forEach(word => {
    if (word.match(regex)) {
      console.log(`Найдено: ${word}`);
    }
  });
  