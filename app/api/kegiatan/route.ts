
import { createClient } from "@supabase/supabase-js/dist/module";
import { NextRequest,NextResponse } from "next/server"

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: Request) {
    const {data} = await supabase.from('kegiatan').select('*');
    return NextResponse.json( {data} );
}

export async function POST(request: NextRequest) {
    const body =await request.json();
    await supabase.from('kegiatan').insert(body.data);
    return NextResponse.json( {message:"this worked", success: true} );
}

export async function DELETE(request: NextRequest) {
    const body =await request.json();
    console.log(body.id);
    const {error} = await supabase.from('kegiatan').delete().eq('id', body.id);
    return NextResponse.json( {message:"this worked", success: true} );
}