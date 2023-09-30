import React, { useState} from "react"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
import { AuthForm } from "../../components/forms/AuthForm"

export const Resgister = () => {
  const [email, setEmail] = useState<string>("correo@gmail.com")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: import.meta.env.VITE_CONFIRMATION_EMAIL_REDIRECT,
      handleCodeInApp: true,
    };
    const result = await auth.sendSignInLinkToEmail(email, config);
    console.log(result);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    window.localStorage.setItem("emailForRegistration", email);
    setEmail("");
    setLoading(false);
  };

  return (
    <div>
      {
        loading ? <h4 className="text-danger">Loading...</h4> : <h4 className="form-title">Register</h4>
      }
      <AuthForm
        email={email}
        loading={loading}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        showPasswordInput={true}
      />
    </div>
  )
}
