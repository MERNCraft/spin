function shuffle(array) {
  var current = array.length
    , swap
    , random

  while (current) {
    random = Math.floor(Math.random() * current--)
    swap = array[current];
    array[current] = array[random];
    array[random] = swap;
  }

  return array
}

const fruit = `"🍇" "🍈" "🍉" "🍊" "🍋" "🍋‍🟩" "🍌" "🍍" "🥭" "🍎" "🍏" "🍐" "🍑" "🍒" "🍓" "🫐" "🥝" "🍅" "🫒" "🥥"`.split(" ")
console.log("shuffle(fruit).join(' '):", shuffle(fruit).join(' '));
