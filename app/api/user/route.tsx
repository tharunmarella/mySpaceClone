import {getServerSession} from "next-auth";
import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";
import authOptions from "@/app/api/auth/[...nextauth]/route";


export async function PUT(request : Request)  {
    const session = await getServerSession(authOptions);
    const currentUser = session?.user;

    const data = await request.json();
    data.age = Number(data.age);

    const user = await prisma.user.update(
        {where:{email : currentUser?.email},data}
    );

    return NextResponse.json(user);
}