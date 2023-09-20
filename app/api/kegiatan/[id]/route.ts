import { NextRequest,NextResponse } from "next/server"
import { supabase } from "@/lib";


export async function GET(request: Request, {params}: {params: {id: string}}) {
    const {data} = await supabase.from('kegiatan').select('*').eq('id', params.id);
    return NextResponse.json( {data} );
}

export async function PUT (request: NextRequest, {params}: {params: {id: string}}) {
    const body =await request.json();
    await supabase.from('kegiatan').update(body.data).eq('id', params.id);
    return NextResponse.json( {message:"this worked", success: true} );
}