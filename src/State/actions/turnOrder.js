export function nextTurn () {
  return {
    type: 'NEXT_TURN'
  }
}

export function removeEntity (id) {
  return {
    type: 'REMOVE_ENTITY',
    id
  }
}

export function addEntity (tag, id) {
  return {
    type: 'ADD_ENTITY',
    tag,
    id
  }
}

export function clear () {
  return {
    type: 'CLEAR_TURNS'
  }
}
