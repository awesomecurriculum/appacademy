const countVowels = string => {
  let numVowels = 0;
  const vowels = 'aeiou';

  string.split('').forEach(c => (vowels.includes(c) ? numVowels++ : numVowels));
};

module.exports = countVowels;
