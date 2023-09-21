import { NextRequest,NextResponse } from "next/server"
import { supabase } from "@/lib";


export async function GET(request: Request) {
    const {data} = await supabase.from('kegiatan').select('*');
    return NextResponse.json( {data} );
}

export async function POST(request: NextRequest) {
    const body =await request.json();
    await supabase.from('kegiatan').insert(body.data);
    //redirect to admin/kegiatan
    return NextResponse.json( {message:"this worked", success: true} );

    
}

export async function DELETE(request: NextRequest) {
    const body =await request.json();
    console.log(body.id);
    await supabase.from('kegiatan').delete().eq('id', body.id);
    return NextResponse.json( {message:"this worked", success: true} );
}