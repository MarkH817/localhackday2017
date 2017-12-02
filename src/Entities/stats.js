export class Stats {
  constructor (maxHP = 10, maxEnergy = 5, strength = 2) {
    this.maxHP = maxHP
    this.currentHP = maxHP

    this.maxEnergy = maxEnergy
    this.currentEnergy = maxEnergy

    this.strength = strength
  }

  restore () {
    this.currentHP = this.maxHP
    this.currentEnergy = this.maxEnergy
  }

  setStrength (strength) {
    this.strength = strength
  }

  takeDamage (attack = 0, stability = 0.5) {
    let base = attack * stability
    let variance = attack * (1 - stability)
    let dmg = Math.round(Math.random() * variance + base)

    this.currentHP -= dmg
  }

  hit (target) {
    target.takeDamage(this.strength)
  }

  isAlive () {
    return this.currentHP > 0
  }
}
