export class Stats {
  constructor (maxHP = 10, maxEnergy = 5) {
    this.maxHP = maxHP
    this.currentHP = maxHP

    this.maxEnergy = maxEnergy
    this.currentEnergy = maxEnergy
  }

  isAlive () {
    return this.currentHP > 0
  }
}
