import Image from "next/image";
import logoUkm from "/assets/logo-ukm.png";
import tentangImg from "/assets/tentang-img.png";
import { PedomanCard } from "@/components/Card";
export default function Index() {
  return (
    <>
      <h1 className="text-[2.5rem] font-bold leading-10 text-center mt-5 mb-3">
        Tentang UKM Oikumene
      </h1>
      <div className="flex justify-center">
        <div className="flex  px-6 flex-col mb-16 items-center max-w-[1440px]">
          <Image
            src={tentangImg}
            width={500}
            height={300}
            alt={""}
            className="w-full neu-box rounded-xl border border-black  "
          />
          <p className="text-center pt-5 pb-10">
            Ukm Oikumene adalah sebuah organisasi keagamaan Kristen Katolik yang
            beroperasi di lingkungan Universitas Mataram. Organisasi ini
            didirikan dengan tujuan utama untuk menjadi sebuah wadah bagi
            mahasiswa dan mahasiswi Kristen Katolik di kampus tersebut, di mana
            mereka dapat bersatu dalam ibadah bersama dan memperkuat ikatan
            spiritual mereka. Ukm Oikumene adalah komunitas mahasiswa Kristen
            Katolik yang aktif di Universitas Mataram. Nama "Oikumene" sendiri
            berasal dari bahasa Yunani yang berarti "seluruh dunia" atau
            "kesatuan umat Kristen." Dengan semangat kesatuan ini, Ukm Oikumene
            bertujuan untuk menciptakan lingkungan yang mendukung pertumbuhan
            rohani, solidaritas, dan persaudaraan di antara anggotanya.
          </p>

          <div className="flex flex-col gap-10 lg:items-stretch sm:items-center items-stretch ">
            <div className="  flex flex-col lg:flex-row gap-10 ">
              <PedomanCard
                color="#63E296"
                title="Wadah Ibadah Bersama"
                desc="menjadi tempat di mana mahasiswa dan mahasiswi Kristen Katolik dapat berkumpul untuk beribadah bersama"
              />
              <PedomanCard
                color="#323643"
                title="Pengembangan Rohani"
                desc="membantu anggotanya memperdalam iman mereka, melalui katekese, diskusi keagamaan, dan kegiatan rohani lainnya."
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-10  ">
              <PedomanCard
                color="#FA5656"
                title="Pelayanan dan Kepedulian Sosial"
                desc=" tidak hanya berfokus pada aspek spiritual, tetapi juga aktif dalam kegiatan pelayanan sosial dan amal. "
              />
              <PedomanCard
                color="#0293E0"
                title="Kebersamaan dan Persaudaraan"
                desc="Ukm Oikumene mengedepankan nilai-nilai persaudaraan, kebersamaan, dan toleransi."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
