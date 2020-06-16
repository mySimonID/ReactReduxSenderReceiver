

export const updateMessage = (message) => {

  return (dispatch, getState) => {
    dispatch({type: 'CHANGE_STATE', message})
  }
}

export default updateMessage
