import { client } from "@repo/db/client"

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <h1>How are you!</h1>
      <p className="text-lg">Welcome to the Next.js app!</p>
      {user?.username}
      {user?.password}
    </main>
  );
}
