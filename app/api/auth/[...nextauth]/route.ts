import NextAuth, {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";


export const authOptions : NextAuthOptions ={
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
};

export default authOptions;

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};