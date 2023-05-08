export const actionCreator = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: increment,
})

export const clicksCount = (increment = 1) => ({
  type: 'INCREMENT_CLICK'
})