import { dataKegiatan } from "@/data";

export default function Page({ params }: { params: { id: string } }) {
   const data = dataKegiatan.find((item) => item.id === params.id);
   if (!data) return <div>Not Found</div>;
   return (
      <>
         <div>My Post: {params.id}</div>
         <h1>{data.title}</h1>
         <h2>{data.desc}</h2>
      </>
   );
}
