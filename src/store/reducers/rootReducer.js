const initState = {
  message:'New Message'
}

const rootReducer = (state = initState, action) => {
  
  switch (action.type) {
    case 'CHANGE_STATE':
      console.log('CHANGE_STATE', action.message)
      //
      return {
        ...state,
        message: action.message
      }
   
   default:
      return state;
  }
}

export default rootReducer