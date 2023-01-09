import clientPromise from "@/lib/mongodb/client";

export default async function Home() {
  const data = await getData();

  return (
    <h1 className="grid h-screen text-3xl font-bold text-center place-items-center">
      {data[0]?.message}
    </h1>
  );
}

async function getData() {
  const client = await clientPromise;
  const db = client.db("main");
  const data = await db.collection("test").find({}).toArray();
  return data;
}
