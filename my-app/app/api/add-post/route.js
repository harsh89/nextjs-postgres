import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {

    const {title, content, authorName} = await request.json();
    const result = await prisma.post.create({
        data:{
            title,
            content,
            author:{create: {name: authorName} },
            published: true
        }
    })
    console.log("Received data:", result);
    return NextResponse.json({result});
}