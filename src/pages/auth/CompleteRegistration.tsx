import {useState, useEffect, useContext} from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { AuthForm } from '../../components/forms/AuthForm'

export const CompleteRegistration = () => {
  const { dispatch } = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const history = useHistory()

  useEffect(()=>{
    setEmail(window.localStorage.getItem('emailForRegistration') || '')
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if(!email || !password){
      toast.error('Email and password is required')
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if(result.user.emailVerified){
        window.localStorage.removeItem('emailForRegistration')
        let user = auth.currentUser
        await user?.updatePassword(password)
        const idTokenResult = await user?.getIdTokenResult()
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user?.email,
            token: idTokenResult?.token,
          }
        })
        history.push('/')
      }
    } catch (error) {
      
    }
  };

  return (
    <div>
      {
        loading ? <h4 className="text-danger">Loading...</h4> : <h4>Complete Your Registration</h4>
      }
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleSubmit}
        showPasswordInput={true}
      />
    </div>
  )
}
