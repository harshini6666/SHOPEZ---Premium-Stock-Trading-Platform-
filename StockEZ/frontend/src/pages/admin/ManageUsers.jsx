import { useState } from "react";

function ManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "user@gmail.com",
      role: "user",
      status: "Active",
    },
    {
      id: 2,
      name: "System Admin",
      email: "admin@admin.com",
      role: "admin",
      status: "Active",
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice@gmail.com",
      role: "user",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-6">
          Manage Users
        </h1>


        {/* Search */}
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border p-3 rounded-lg mb-6"
        />


        {/* Users Table */}
        <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left py-3">
                  Name
                </th>

                <th className="text-left py-3">
                  Email
                </th>

                <th className="text-left py-3">
                  Role
                </th>

                <th className="text-left py-3">
                  Status
                </th>

                <th className="text-left py-3">
                  Actions
                </th>

              </tr>
            </thead>


            <tbody>

              {filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b"
                >

                  <td className="py-4">
                    {user.name}
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td>
                    <span
                      className={
                        user.role === "admin"
                          ? "text-purple-600 font-bold"
                          : "text-blue-600"
                      }
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "text-green-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {user.status}
                    </span>
                  </td>


                  <td className="space-x-2">

                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Toggle Status
                    </button>


                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default ManageUsers;