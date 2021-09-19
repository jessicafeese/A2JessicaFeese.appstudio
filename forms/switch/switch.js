let firstName = prompt('What is your first name?')
console.log(firstName)

let state = prompt('What state do you live in? (NE,CO,etc.)')
console.log(state)

let temp = prompt('What is the current tempature outside? (degrees fahrenheit)')
console.log(temp)

//Create an array to hold the various messages with what to wear

let messages = [`${firstName}, wear a warm coat, hat, scarf and gloves.`,`${firstName}, wear a warm coat but you won't need a hat, scarf or gloves.`,`${firstName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`,`${firstName}, wear a warm coat, hat and gloves. Maybe a scarf too.`]
console.log(messages)

//Using a switch keyword that takes into account the user's responses and gives them a certain response that is stored in the messages array

switch (true) {
  case (temp < 32 && state == 'NE'):
    console.log(messages[0])
    break;
  case (temp >= 32 && temp <= 50 && state == 'NE'):
    console.log(messages[1])
    break;
  case (temp >= 32 && temp <= 50 && state == 'FL'):
    console.log(messages[2])
    break;
  case (temp > 50 && temp <= 70 && state == 'FL'):
    console.log(messages[3])
    break;
  default: console.log('Don\'t currently have a recommendation.')
    break;
}