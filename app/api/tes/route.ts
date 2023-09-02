
import { createClient } from "@supabase/supabase-js/dist/module";
import { NextResponse } from "next/server"
export const revalidate = 60
export async function GET(request: Request) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!, 
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
    const {data, error} = await supabase.from('tes').select('*');
    console.log(data)
  return NextResponse.json( {data} )

}