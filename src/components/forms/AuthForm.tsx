interface AuthFormProps {
  email: string;
  password?: string;
  setPassword?: (password: string) => void;
  loading: boolean;
  setEmail: (email: string) => void;
  handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
  showPasswordInput: boolean;
  hideEmailInput: boolean;
}

export const AuthForm:React.FC<AuthFormProps> = ({
  email = '',
  password = '',
  loading,
  setEmail = (f:string) =>(f),
  setPassword,
  handleSubmit,
  showPasswordInput = false,
  hideEmailInput = false,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
          disabled={loading}
        />
        <input 
          type="password"
          className="form-control"
          placeholder="Password"
          disabled={loading}
          required
        />
      <button className="btn btn-raised btn-primary" disabled={loading}>
        Submit
      </button>
    </form>
  )
}
