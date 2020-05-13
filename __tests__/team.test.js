import { Team, Character } from '../src/team';

test('Метод add добавляет игрока', () => {
  const character = new Character('Alice');
  const team = new Team();
  team.add(character);
  expect(team.toArray()).toEqual([{ health: 100, level: 1, name: 'Alice' }]);
});

test('Метод add выдает ошибку, если игрок уже есть в команде', () => {
  expect(() => {
    const character = new Character('Alice');
    const team = new Team();
    team.add(character);
    team.add(character);
  }).toThrow();
});

test('Метод addAll добавляет всех игроков', () => {
  const character = new Character('Alice');
  const person = new Character('Peter');

  const team = new Team();
  team.addAll(character, person);
  expect(team.toArray()).toEqual([{ health: 100, level: 1, name: 'Alice' }, { health: 100, level: 1, name: 'Peter' }]);
});
