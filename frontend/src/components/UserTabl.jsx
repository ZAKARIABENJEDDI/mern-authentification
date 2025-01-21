export default function UserTabl({ users }) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Id
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Nom
          </th>
          <th scope="col" className="px-6 py-3">
            Prenom
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">
              {index + 1}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {user.email}
            </th>
            <td className="px-6 py-4">
              {user.nom}
            </td>
            <td className="px-6 py-4">
              {user.prenom}
            </td>
            <td className="px-6 py-4">
              {user.phone}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}