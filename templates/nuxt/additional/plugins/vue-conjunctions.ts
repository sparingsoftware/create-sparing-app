import Vue from 'vue'

function removeHangingConjunctions(inputText: string) {
  if (!inputText) return ''
  const hardSpace = '&nbsp;'
  const softSpace = ' '
  const constantNbsp = [
    'lub',
    'ale',
    'czy',
    'nad',
    'pod',
    'bez',
    'nie',
    'tak',
    'albo',
    'więc',
    'lecz',
    'przez',
    'niech',
    'tylko'
  ]

  return inputText
    .replace(/(\r\n|\n|\r)/gm, '')
    .split(' ')
    .reduce((acc, word) => {
      if (
        (word.length <= 2 && word.length > 0 && !word.includes('<')) ||
        constantNbsp.includes(word) ||
        /^&.+;$/.test(word)
      ) {
        return acc + word + hardSpace
      } else if (word.length === 0) {
        // For double softSpace after replace newlines
        return acc
      } else {
        return acc + word + softSpace
      }
    }, '')
}

Vue.directive('conjunctions', (el, binding) => {
  el.innerHTML = removeHangingConjunctions(binding.value || el.innerHTML.trim())
})
