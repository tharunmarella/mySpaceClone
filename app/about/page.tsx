import {Metadata} from "next";

export const metadata:Metadata={
    title:'About',
    description:'About page',
};


export default async function page() {
    return(
        <main>
            <h1>About page</h1>
            <p>We are a social media company!</p>
        </main>
    )
}