import SignInForm from "./SignInForm";
import Logo from "@/components/Logo";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col justify-center text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            {
              "No account? No problem. Enter your email and we'll create an account for you and send you a link to sign in."
            }
          </p>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
