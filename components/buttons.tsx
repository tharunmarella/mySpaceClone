'use client';

import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function SignInButton() {
    const {data:session,status} = useSession();

    if (status === 'loading') {
        return (<>......</>);
    }

    if (status === 'authenticated') {
        return (
            <Link href={'/dashboard'}>
                <Image src={session.user?.image?? 'mememan.webp'} alt="your name" width={32} height={32} />
            </Link>
        )
    }

    return <button onClick={()=>signIn()}>SignIn</button>
}

export function SignOutButton() {
    return <button onClick={()=>signOut()}>SignOut</button>
}