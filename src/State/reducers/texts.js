const defaultTexts = [
  'Welcome!',
  'Get ready to rumble'
]

export function texts (prevState = defaultTexts, action) {
  switch (action.type) {
    case 'ADD_TEXT':
      return [
        ...prevState,
        action.text
      ]
    default:
      return prevState
  }
}
