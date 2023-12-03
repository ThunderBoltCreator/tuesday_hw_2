const initState: { themeId: number } = {
  themeId: 1
}

export const themeReducer = (state = initState, action: ChangeThemeId): { themeId: number } => { // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID':
      return {themeId: action.id}
    default:
      return state
  }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any
type ChangeThemeId = ReturnType<typeof changeThemeId>
