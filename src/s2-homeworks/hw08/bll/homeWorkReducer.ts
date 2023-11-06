import {UserType} from '../HW8'

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number }

const initialState: UserType[] = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55}
]

export const homeWorkReducer = (state = initialState, action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      return [...state.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        if (action.payload === 'up') {
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
        }

        if (action.payload === 'down') {
          if (nameA > nameB) {
            return -1
          }
          if (nameA < nameB) {
            return 1
          }
        }

        return 0
      })]
    }
    case 'check': {
      return state.filter(el => el.age > action.payload)
    }
    default:
      return state
  }
}
