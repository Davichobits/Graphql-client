import React, { useState} from "react"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
import { AuthForm } from "../../components/forms/AuthForm"

export const Resgister = () => {
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  
  return (
    <div>Resgister</div>
  )
}
