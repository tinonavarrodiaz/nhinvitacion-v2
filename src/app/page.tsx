import SignIn from "./components/auth/sign-in";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1>Hello World</h1>
      <SignIn />
    </main>
  );
}
