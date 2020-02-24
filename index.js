class Formatter {
  //add static methods here
  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
  }
  
  static sanitize(word){
    return word.replace(/[^A-Za-z-'\s]+/g, '');
  }
  
  static titleize(string){
    titleizedString = ''
    lowcaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    string.map(w => {
      (w.any)
    }).join(" ")
  }
}