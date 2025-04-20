// import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import client from "./libs/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: MongoDBAdapter(client),
  providers: [Google],
})
/*
tinonav   : Username mongo atlas
tIavc5Nlcjc2Mvoh    : password mongo atlas

nhinvita_user   : Username mongo atlas
kuRUKdZQ5LNk3GF2    : password mongo atlas

mongodb+srv://nhinvita_user:kuRUKdZQ5LNk3GF2@cluster0.mh6ablh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
