/* eslint-disable max-classes-per-file */
class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Этот персонаж есть в команде');
    }
    this.members.add(member);
  }

  addAll(...rest) {
    rest.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }
}

export { Team, Character };
