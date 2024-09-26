import PromoteToAdmin from "@/components/PromoteToAdmin";
import User from "@/libs/models/user";
import { mongoDbConnection } from "@/libs/mongoDb";
import React from "react";

const getUsers = async () => {
  await mongoDbConnection();
  // const users = await User.find({ role: 'user' })
  const users = await User.find({});
  return users ?? [];
};

const accounts = async () => {
  const users = await getUsers();
  console.log({ users });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          User Accounts
        </h2>
        <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
          {users.length ? (
            users.map((user) => (
              <div
                key={user._id}
                className="flex justify-between items-center p-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="text-lg font-medium text-gray-800">
                    {user.name}
                  </div>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div className="ml-4">
                  {user.role === "user" ? (
                    <PromoteToAdmin id={JSON.stringify(user._id)} />
                  ) : (
                    <div className="text-sm text-green-500">Admin</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default accounts;
