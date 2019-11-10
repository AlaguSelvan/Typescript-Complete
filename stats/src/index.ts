import { MatchReader } from './inheritance/MatchReader';
import { MatchResult } from './MatchResult';

let manUnitedWins = 0;
const reader = new MatchReader('football.csv')
reader.read();
for( let match of reader.data ) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  } 
}

console.log(`Man United won ${manUnitedWins} games`)