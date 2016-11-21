export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    case 'REMOVE_INGREDIENT':
      let foo =  [...state]
      foo.splice(action.payload, 1)
      return foo
    default:
      return state
  }
}
