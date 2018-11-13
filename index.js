import Senators from './data/senators'

/*
const expression = (senator) => senator.party === 'Democrat'

console.log(expression)({ party: 'Libertarian'})

const results = Senators.filter((senator) => senator.party === 'Democrat')
console.log(results)

democrats.map(senator => ({
 name: senator.person.firstname + '' + senator.person.lastname,
  party: senator.party, 
  state: senator.state
}))
*/


export const republicans = () => {
  return Senators.filter((senator) => senator.party === 'Republican') 
}


export const democrats = () => {
  return Senators.filter((senator) => senator.party === 'Democrat')
}


export const independents = () => {
  return Senators.filter((senator) => senator.party === 'Independent')
}

export const males = () => {
  return Senators.filter((senator) => senator.person.gender === 'male')
}

export const females = () => {
  return Senators.filter((senator) => senator.person.gender === 'female')
}

export const byState = (state = 'UT') => {
  return Senators.filter((senator) => senator.state === 'UT')
}

export const mapping = () => {
  return Senators.map( (senator) => ({ /* senator is the current value/object we pass through */
      firstName: senator.person.firstname,
      lastName: senator.person.lastname,
      party: senator.party,
      gender: senator.person.gender 
    }))
}

export const birthplaceSeniorSenator = () => {
  return Senators.filter((senator) => senator.state === 'AK' && senator.senator_rank_label === 'Senior').reduce((prev,curr) => current)
}


const REPLACE_ME_WITH_CODE = false
