import { prismaClient } from "@repo/db/client"

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome to Next.js!
      </h1>
      {user && (
        <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-700">
          <p className="text-xl font-medium mb-2">User Information</p>
          <p className="text-gray-300 mb-1">
            <span className="font-semibold text-purple-400">Username:</span> {user.username}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-purple-400">Password:</span> {user.password}
          </p>
        </div>
      )}
    </div>
  )
}
