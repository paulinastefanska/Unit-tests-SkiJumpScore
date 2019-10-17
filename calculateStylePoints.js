const calculateStylePoints = (styleNotes) => {
    const minNote = Math.min(...styleNotes);
    const maxNote = Math.max(...styleNotes);
    let sumStyleNotes = 0;

    for (let i = 0; i < styleNotes.length; i++) {
        sumStyleNotes = sumStyleNotes + styleNotes[i];
    }
    return sumStyleNotes - (maxNote + minNote);
  };
  
  module.exports = calculateStylePoints;