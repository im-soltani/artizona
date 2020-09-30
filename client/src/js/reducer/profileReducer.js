import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_PROFILES,
  CREATE_PROFILE ,SET_LOADING} from '../const/actionType';
const initialState = {
  profile: null,
  profiles: [],
  loading: false
}


export default function(state = initialState, { type, payload }) {
  switch(type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      }
      case CREATE_PROFILE:
          return { ...state, isLoading: false, isAuth: true, ...payload };
      case SET_LOADING:
            return { ...state, isLoading: true };
  
    default:
      return state;
  }
}