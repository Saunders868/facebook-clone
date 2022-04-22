import Image from "next/image"
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className="grid place-items-center">
        <div className="flex">
          <Image
              src='https://links.papareact.com/t4i'
              height={400}
              width={400}
              objectFit='contain'
              alt="Facebook Logo"
          />
          <Image
              src='https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
              height={300}
              width={300}
              objectFit='contain'
              alt="Facebook Logo"
          />
        </div>

        <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login</h1>
    </div>
  )
}

export default Login