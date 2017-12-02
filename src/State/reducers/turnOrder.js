export function turnOrder (prevState = [], action) {
  switch (action.type) {
    case 'ADD_ENTITY':
      return [
        ...prevState,
        {
          id: action.id,
          tag: action.tag
        }
      ]
    case 'REMOVE_ENTITY':
      return prevState
        .filter(entity => entity.id !== action.id)
    case 'NEXT_TURN':
      if (prevState.length === 0) return prevState

      let first = prevState[0]
      let rest = prevState.filter((_, index) => index !== 0)

      return [
        ...rest,
        first
      ]
    case 'CLEAR_TURNS':
      return []
    default:
      return prevState
  }
}
