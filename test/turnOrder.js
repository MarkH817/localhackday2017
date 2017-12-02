import {expect} from 'chai'
import {store} from '../src/State/stores'
import {turnOrder} from '../src/State/actions'

describe('Store', () => {
  it('clears turn order', () => {
    store.dispatch(turnOrder.clear())
    let result = store.getState().turnOrder

    expect(result).to.have.lengthOf(0)
  })

  it('adds a player', () => {
    let actions = [
      turnOrder.clear(),
      turnOrder.addEntity('hi')
    ]

    actions.map(act => store.dispatch(act))

    let result = store.getState().turnOrder

    expect(result).to.have.lengthOf(1)
  })

  it('adds 3 players, then removes 1', () => {
    let actions = [
      turnOrder.clear(),
      turnOrder.addEntity('hi', 1),
      turnOrder.addEntity('hello', 2),
      turnOrder.addEntity('greetings', 3),
      turnOrder.removeEntity(1)
    ]

    actions.map(act => store.dispatch(act))

    let result = store.getState().turnOrder

    expect(result).to.have.lengthOf(2)
  })

  it('moves to the next turn', () => {
    let actions = [
      turnOrder.clear(),
      turnOrder.addEntity('hi', 1),
      turnOrder.addEntity('hello', 2),
      turnOrder.addEntity('greetings', 3),
      turnOrder.nextTurn()
    ]

    actions.map(act => store.dispatch(act))

    let result = store.getState().turnOrder

    expect(result[0].id).to.equal(2)
  })
})
