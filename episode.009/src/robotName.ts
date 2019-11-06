export default class RobotName {
  public name: string = "";
  private robots: Set<string>;

  constructor()
  { 
    this.robots = new Set();
    this.newName();
  }

  randomLetters(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (letters[Math.floor(Math.random() * letters.length)])
  }

  newName() {
    this.name = "";
    this.name += this.randomLetters();
    this.name += this.randomLetters();
    this.name += this.randomNumbers();
    this.name += this.randomNumbers();
    this.name += this.randomNumbers();
    if (this.robots.has(this.name)) {
      this.newName()
    }
    else {
      this.robots.add(this.name)
    }
  }

  regenerateName() {
    this.newName();
  }

  randomNumbers(): string {
    const numbers = "0123456789";
    return (numbers[Math.floor(Math.random() * numbers.length)])
  }
}
