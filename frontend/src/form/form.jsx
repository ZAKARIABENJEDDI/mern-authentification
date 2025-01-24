import { useRef, useState } from 'react';
import axios from 'axios';
import UserTabl from './../components/UserTabl';

export default function Form() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false); // État pour le chargement
  const [error, setError] = useState(''); // État pour le chargement

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const ageRef = useRef();
  const Id_searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phone: phoneRef.current.value,
      age: ageRef.current.value,
    };
    axios.post('http://localhost:3000/add', formData)
      .then((res) => {
        console.log("Response From Express Js:", JSON.stringify(res.data, null, 2));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const GetUsers = () => {
    setLoading(true); // Démarre le chargement
    axios.get('http://localhost:3000/read')
      .then((res) => {
        console.log('All Users:', JSON.stringify(res.data, null, 2));
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false); // Termine le chargement
      });
  };

  const SearchById = (e) => {
    e.preventDefault()
    if (!Id_searchRef.current.value) {
      setError("Saisir Un ID pour chercher")
    } else {
      axios.get("http://localhost:3000/find", Id_searchRef.current.value)
        .then((res) => {
          console.log(`the Specific User Of id: ${Id_searchRef.current.value} 
                      Is ${JSON.stringify(res.data, null, 2)}`);
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log(Id_searchRef.current.value);
        })
    }
  }

  const Supprimer = (id) => {
    console.log("Suppression de l'utilisateur avec l'ID:", id);
    // Ajouter ici la logique de suppression, par exemple :
    // axios.delete(`http://localhost:3000/delete/${id}`)
    //   .then((res) => {
    //     console.log("Utilisateur supprimé:", res.data);
    //     // Optionnellement, vous pouvez mettre à jour l'état pour enlever l'utilisateur de la liste.
    //   })
    //   .catch((err) => {
    //     console.error("Erreur lors de la suppression:", err);
    //   });
  }
  

  return (
    <div className="relative z-10">
      {error ? (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span> {error}
          </div>
        </div>
      ) : ''}
      <form className="max-w-md mx-auto mt-10 px-8 bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
        <div className="relative z-10 w-full mb-5 group">
          <input type="email" ref={emailRef} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Email address</label>
        </div>
        <div className="relative z-10 w-full mb-5 group">
          <input type="password" ref={passwordRef} name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Password</label>
        </div>
        <div className="relative z-10 w-full mb-5 group">
          <input type="password" ref={confirmPasswordRef} name="confirmPassword" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Confirm password</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-10 w-full mb-5 group">
            <input type="text" ref={firstNameRef} name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">First name</label>
          </div>
          <div className="relative z-10 w-full mb-5 group">
            <input type="text" ref={lastNameRef} name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Last name</label>
          </div>
        </div>
        <div className="relative z-10 w-full mb-5 group">
          <input type="tel" ref={phoneRef} name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Phone number</label>
        </div>
        <div className="relative z-10 w-full mb-5 group">
          <input type="number" ref={ageRef} name="age" id="floating_age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Age</label>
        </div>
        <div className="relative z-10 w-full mb-5 group">
          <input type="text" ref={Id_searchRef} name="id_search" id="floating_age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Enter Id</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <button type="button" onClick={GetUsers} className="ms-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Users</button>
        <button type="button" onClick={SearchById} className="ms-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search By Id</button>
      </form>
      <div className="mt-10">
        {loading ? (
          <div className="text-center">
            <span className="text-blue-600">Loading...</span>
          </div>
        ) : (
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <UserTabl users={users} action={Supprimer} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}