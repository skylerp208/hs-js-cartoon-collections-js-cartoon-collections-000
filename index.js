var dwarves = ['Dwalin', 'Balin', 'Fili', 'Kili']
function dwarfRollCall(dwarves) {
  var newArray = []
  for( let i = 0; i < dwarves.length; i++) {
    newArray.push( i+1 + '. ' + dwarves[i] + ' ' )
  }
  return newArray.join('')
}

var planeteerCalls = ['earth', 'wind', 'fire']
function summonCaptainPlanet(planeteerCalls){
  var newArray = []
  for(let i =0; i <planeteerCalls.length; i++) {
    newArray.push(planeteerCalls[i].toUpperCase() + '!')
  }
  return newArray
}

var words = ['earth' , 'fire']
function longPlaneteerCalls(words) {
  for (let i =0; i<words.length ; i++) {
    if (words[i].length<5) {
      return false
    } else {
      return true
    }
  }
}

var foods = ['pasta' , 'cheddar', 'acorns']
function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar') {
      return 'cheddar'
    } else  if (foods[i] === 'gouda') { 
      return 'gouda'
  } else if (foods[i] === 'camembert') {
    return 'camembert'
  } else {
  }
  }
  return 'no cheese!'
}
