import {prisma} from "@/lib/prisma";

interface Props{
    params:{
        id:string;
    };
}

////////4
export default async function UserProfile({params}:Props){
    const user = await prisma.user.findUnique({where: {id: params.id}});
    const { name, bio, image, id } = user ?? {};

    return (
        <div>
            <h1>{name}</h1>

            <img
                width={300}
                src={image ?? '/mememan.webp'}
                alt={`${name}'s profile`}
            />

            <h3>Bio</h3>
            <p>{bio}</p>
        </div>
    );
}