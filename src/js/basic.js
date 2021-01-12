// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  set name(nameStr) {
    if (nameStr.constructor === String) {
      if (nameStr.length < 2 || nameStr.length > 10) {
        const nameError = new Error('Ошибка в количестве символов');
        throw nameError;
      } else {
        // eslint-disable-next-line no-underscore-dangle
        this._name = nameStr;
      }
    } else {
      const nameErrorType = new Error('Введеный тип не соответствует требованиям');
      throw nameErrorType;
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = nameStr;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set type(typeStr) {
    if (typeof typeStr === 'string') {
      const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (types.includes(typeStr)) {
        // eslint-disable-next-line no-underscore-dangle
        this._type = typeStr;
      } else {
        const typeError = new Error('Тип отсутствует');
        throw typeError;
      }
    } else {
      throw new Error('Ошибка в типе');

      // const nameErrorType = new Error('Ошибка в типе');
      // throw nameErrorType;
    }
    // eslint-disable-next-line no-underscore-dangle
    this._type = typeStr;
  }

  get type() {
    // eslint-disable-next-line no-underscore-dangle
    return this._type;
  }

  leveUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack * 20) / 100;
      this.defence += (this.defence * 20) / 100;
      this.health = 100;
    } else {
      const levelError = new Error('Нельзя повысить левел умершего');
      throw levelError;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
