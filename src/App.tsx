import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"



function App() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [passwoed, setPasswoed] = useState('');
  const [ data, setData] = useState({
    username: '',
    email: '',
    address: '',
    password: '',
  })

 const submitForm = (e) => {
  e.preventDefault();
  console.log("Form submitted!");
  console.log("Submitted Data:", data);
}

 const formHandler =(e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value
  })


 }

  return (
   <div>
    <form onSubmit={submitForm} className="max-w-sm mx-auto p-8 mt-8">
      <Input value={data.username} onChange={formHandler} name="username" className="mb-2" type="name" placeholder="your name"/>
      <Input value={data.email} onChange={formHandler} name="email" className="mb-2" type="email" placeholder="your email"/>
      <Input value={data.address} onChange={formHandler} name="address" className="mb-2" type="address" placeholder="your address"/>
      <Input value={data.password} onChange={formHandler} name="password" className="mb-2" type="password" placeholder="your passwoed"/>
       <Button className="w-full">Sign up </Button>
    </form>
   </div>
  )
}

export default App
