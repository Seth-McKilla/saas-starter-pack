import Link from "next/link";

import Button from "@/components/Button";

export default async function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <div>
        <h1 className="mb-8 text-3xl font-bold text-center">
          Welcome to the SaaS Starter Pack
        </h1>
        <div className="flex justify-center">
          <div className="w-40">
            <Link href="/sign-in">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
