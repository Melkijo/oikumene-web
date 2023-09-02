import { createClient } from "@supabase/supabase-js/dist/module";
import { NextRequest,NextResponse } from "next/server"

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: Request, {params}: {params: {id: string}}) {
    const {data} = await supabase.from('kegiatan').select('*').eq('id', params.id);
    return NextResponse.json( {data} );
}

export async function PUT (request: NextRequest, {params}: {params: {id: string}}) {
    const body =await request.json();
    const {error} = await supabase.from('kegiatan').update(body.data).eq('id', params.id);
    return NextResponse.json( {message:"this worked", success: true} );
}