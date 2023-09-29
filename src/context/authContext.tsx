import { useEffect, createContext, useReducer, ReactNode } from "react"

// reducer function

const firebaseReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload }
    default:
      return state
  }
};

// state

const initialState = {
  user: null,
}

// create context

const AuthContext = createContext()

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  useEffect(() => {
    
  }, []);

  const value = { state, dispatch }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
