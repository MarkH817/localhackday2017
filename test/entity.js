import {expect} from 'chai'
import {Entity} from '../src/Entities'

describe('Entity class', () => {
  it('creates a player', () => {
    let player = new Entity(10, 5, 5)
    expect(player).to.not.equal(null)
  })

  it('lets a player kill an enemy', (done) => {
    let player = new Entity(10, 5, 5)
    let enemy = new Entity(1, 0, 0)

    enemy.setDeathCb(done)

    player.hit(enemy)
  })

  it('restores a player stats', () => {
    let player = new Entity(10, 0, 0)
    let enemy = new Entity(5, 0, 5)

    enemy.hit(player)
    player.restore()

    expect(player.getHP()).to.equal(10)
  })

  it('hits player', () => {
    let player = new Entity(10, 0, 0)
    let enemy = new Entity(5, 0, 5)

    enemy.hit(player)

    expect(player.getHP()).to.not.equal(10)
  })

  it('changes the strenth', () => {
    let player = new Entity(1, 0, 0)
    player.stats.setStrength(5)
    expect(player.stats.strength).to.equal(5)
  })
})
