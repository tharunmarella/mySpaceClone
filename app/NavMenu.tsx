import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import {SignInButton, SignOutButton} from "@/components/buttons";

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
            <Image src={"/logo.svg"} alt={"mySpace"}
                   width={216}
                   height={30}/>
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    );
}