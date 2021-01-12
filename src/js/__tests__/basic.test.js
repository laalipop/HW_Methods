import Character, {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../basic';

test('name not string', () => {
  const t = () => {
    throw new Character(12, 'Bowerman');
  };
  expect(t).toThrow(Error);
});

test('name short', () => {
  try {
    const q = new Character('a', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Ошибка в количестве символов');
  }
});

test('name long', () => {
  try {
    const q = new Character('adddsfasdfadsfadf', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Ошибка в количестве символов');
  }
});

test('name correct', () => {
  try {
    const q = new Character('ddddd', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Ошибка в количестве символов');
  }
});

test('get name', () => {
  const q = new Character('Boma', 'Bowerman');
  expect(q.name).toBe('Boma');
});

test('type not string', () => {
  const t = () => {
    throw new Character('Kolo', 45632);
  };
  expect(t).toThrow(Error);
});

test('type exist', () => {
  try {
    const q = new Character('Mona', 'owerman');
  } catch (e) {
    expect(e.message).toBe('Тип отсутствует');
  }
});

test('get type', () => {
  const a = new Character('Boma', 'Swordsman');
  expect(a.type).toBe('Swordsman');
});

test('leveUp with health = 0', () => {
  try {
    const q = new Character('Popl', 'Bowerman');
    q.health = 0;
    q.leveUp();
  } catch (e) {
    expect(e.message).toBe('Нельзя повысить левел умершего');
  }
});

test('leveUp with health > 0', () => {
  const q = new Character('Popl', 'Bowerman');
  q.leveUp();
  expect(q.level).toBe(2);
});

test('method damage(points); health >= 0', () => {
  const q = new Character('Popl', 'Bowerman');
  q.damage(2);
  expect(q.health).toBe(98);
});

test('method damage(points); health < 0', () => {
  const q = new Character('Popl', 'Bowerman');
  q.health = -10;
  q.damage(2);
  expect(q.health).toBe(-10);
});

test('create Bowerman', () => {
  const a = new Bowerman('Boma', 'Bowerman');
  expect(a.attack).toBe(25);
});

test('create Swordsman ', () => {
  const a = new Swordsman('Boma', 'Swordsman');
  expect(a.attack).toBe(40);
});

test('create Magician', () => {
  const a = new Magician('Boma', 'Magician');
  expect(a.attack).toBe(10);
});

test('create Daemon', () => {
  const a = new Daemon('Boma', 'Daemon');
  expect(a.attack).toBe(10);
});

test('create Undead', () => {
  const a = new Undead('Boma', 'Undead');
  expect(a.attack).toBe(25);
});

test('create Zombie', () => {
  const a = new Zombie('Boma', 'Zombie');
  expect(a.attack).toBe(40);
});
