class Formatter {
  //add static methods here
  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
  }
  
  static sanitize(word){
    return word.replace(/[^A-Za-z-'\s]+/g, '');
  }
  
  static titleize(string){
    const lowcaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const splitString = string.split(" ");
    return splitString.map(w => {
      (lowcaseWords.some(e => e === w)) ? w.toLowerCase() : this.capitalize(w);
    }).join(" ")
  }
}