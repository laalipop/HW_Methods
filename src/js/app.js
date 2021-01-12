// TODO: write your code here
import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from './basic';

console.log('worked');

const testName = new Character('Vasya', 'Bowerman');
console.log(testName);
testName.leveUp();
console.log(testName);

// const testNameElse = new Character('h', 'Bowerman');
// console.log(testNameElse);

// const testType = new Character('Vasya', 'Bowerman');
// console.log(testType);

const testBowerman = new Bowerman('Vic', 'Bowerman');
// testBowerman.leveUp();
testBowerman.damage(2);
console.log(testBowerman);

const testSwordsman = new Swordsman('Masa', 'Swordsman');
console.log(testSwordsman);
const testMagician = new Magician('Lol', 'Bowerman');
console.log(testMagician);
const testDaemon = new Daemon('Pol', 'Bowerman');
console.log(testDaemon);
const testUndead = new Undead('Doc', 'Bowerman');
console.log(testUndead);
const testZombie = new Zombie('Koc', 'Bowerman');
console.log(testZombie);