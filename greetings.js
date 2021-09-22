//Utilize node greetings --name "seuNome" --greeting "Saudação" para ver o resultado
const getFlagValue = require('./flags')
console.log(`Hello ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)