import axios from "axios"
import { useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from 'react-loader-spinner';
export default function Login() {
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const [loading, setloading] = useState(false)
  const handelLogin = (event) => {
    event.preventDefault()
    const emailValue = emailRef.current.value.trim()
    const passwordValue = passwordRef.current.value.trim()

    if (!emailValue && !passwordValue) {
      return
    }
    const UserInfo = {
      email: emailValue,
      password: passwordValue
    }
    setloading(true);
    axios.post("http://localhost:3000/getUser", UserInfo)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setloading(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Login failed! Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setloading(false)
      })
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handelLogin}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-sky-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-950 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-950 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-950 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950"
              >
                {loading ? (
                  // Afficher un loader pendant le chargement
                  <Oval
                    height={20}
                    width={20}
                    color="white"
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="white"
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm/6 text-gray-500">
            Alredy have account ?
            <a href="login" className="mx-4 font-semibold text-sky-950 hover:text-sky-800">
              Login
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
