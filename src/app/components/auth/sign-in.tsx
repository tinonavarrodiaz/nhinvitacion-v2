import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/dashboard" })
      }}
    >
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Signin with Google</button>
    </form>
  )
}
