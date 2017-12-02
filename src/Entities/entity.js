import {Stats} from './stats'

export class Entity {
  constructor (hp = 10, energy = 5, attack = 3) {
    this.stats = new Stats(hp, energy, attack)
  }

  getHP () {
    return this.stats.currentHP
  }

  restore () {
    this.stats.restore()
  }

  setDeathCb (cb = () => {}) {
    this.deathCb = cb
  }

  onDeath () {
    if (this.deathCb) {
      this.deathCb()
    }
  }

  hit (target) {
    this.stats.hit(target.stats)

    if (!target.stats.isAlive()) {
      target.onDeath()
    }
  }
}
