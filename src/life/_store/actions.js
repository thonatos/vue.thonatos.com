export const nextPage = ({dispatch}) => {
  dispatch('POSTS_NEXT', 1)
}

export const prevPage = ({dispatch}) => {
  dispatch('POSTS_PREV', 1)
}
