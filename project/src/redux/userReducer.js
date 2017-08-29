const authorization = 'authorization';
const userState = {
   authorization: localStorage.getItem(authorization)
};

const userReducer = (state = userState, action) => {
   switch (action.type) {
      case 'authorization':
         state = {
            ...state,
            authorization: action.payload.Token
         };
         localStorage.setItem(authorization, action.payload.Token);
         break;
      case 'registeration':
         state = {
            ...state,
            authorization: action.payload.Token
         };
         localStorage.setItem(authorization, action.payload.Token);
         break;
      case 'logout':
         state = {
            ...state,
            authorization: null
         };
         localStorage.removeItem(authorization);
         break;
      default:
   }
   return state;
};

export default userReducer;
