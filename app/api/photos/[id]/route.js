import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id: photoId } = await params;

    const data = getPhotoById(photoId);

    // if (!data) {
    //     return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    // }

    return NextResponse.json(data);
}