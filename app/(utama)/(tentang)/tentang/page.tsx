import Image from "next/image";
import tentangImg from "/assets/tentang-img.png";
import { ImageCard, PedomanCard } from "@/components/Card";
import { ChatBubbleIcon, HeartIcon, SunIcon } from "@/components/Icons";

export default function Index() {
  return (
    <>
      <h1 className="text-[3rem] text-center py-10">Yuk Kenalan!!</h1>
      <div className="flex justify-center">
        <div className="flex   px-6 flex-col mb-16 items-center max-w-[1440px]">
          <Image
            src={tentangImg}
            width={500}
            height={100}
            alt={""}
            className="w-full neu-box rounded-xl border-black  border-3 "
          />
          <div className="max-w-[1440px] mx-auto  my-10">
            <div className="flex flex-col gap-10 lg:items-stretch sm:items-center items-stretch ">
              <div className="  flex flex-col lg:flex-row gap-10 ">
                <PedomanCard
                  color="#63E296"
                  title="Wadah Ibadah Bersama"
                  desc="menjadi tempat di mana mahasiswa dan mahasiswi Kristen Katolik dapat berkumpul untuk beribadah bersama"
                />
                <PedomanCard
                  color="#323643"
                  icon={SunIcon}
                  title="Pengembangan Rohani"
                  desc="membantu anggotanya memperdalam iman mereka, melalui katekese, diskusi keagamaan, dan kegiatan rohani lainnya."
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-10  ">
                <PedomanCard
                  color="#FA5656"
                  icon={ChatBubbleIcon}
                  title="Pelayanan dan Kepedulian Sosial"
                  desc=" tidak hanya berfokus pada aspek spiritual, tetapi juga aktif dalam kegiatan pelayanan sosial dan amal. "
                />
                <PedomanCard
                  color="#0293E0"
                  icon={HeartIcon}
                  title="Kebersamaan dan Persaudaraan"
                  desc="Ukm Oikumene mengedepankan nilai-nilai persaudaraan, kebersamaan, dan toleransi."
                />
              </div>
            </div>
          </div>
          <div className="flex pt-10 items-center gap-14">
            <div>
              <h5 className="text-[1.5rem]">Apa itu UKM Oikumene?</h5>
              <p className=" pb-10">
                Ukm Oikumene adalah sebuah organisasi keagamaan Kristen Katolik
                yang beroperasi di lingkungan Universitas Mataram. Organisasi
                ini didirikan dengan tujuan utama untuk menjadi sebuah wadah
                bagi mahasiswa dan mahasiswi Kristen Katolik di kampus tersebut,
                di mana mereka dapat bersatu dalam ibadah bersama dan memperkuat
                ikatan spiritual mereka. Ukm Oikumene adalah komunitas mahasiswa
                Kristen Katolik yang aktif di Universitas Mataram. Nama
                "Oikumene" sendiri berasal dari bahasa Yunani yang berarti
                "seluruh dunia" atau "kesatuan umat Kristen." Dengan semangat
                kesatuan ini, Ukm Oikumene bertujuan untuk menciptakan
                lingkungan yang mendukung pertumbuhan rohani, solidaritas, dan
                persaudaraan di antara anggotanya.
              </p>
            </div>

            <ImageCard width={650} height={650} />
          </div>
          <div className="flex pt-16 items-center gap-14">
            <ImageCard width={650} height={650} />
            <div>
              <h5 className="text-[1.5rem]">Apa itu UKM Oikumene?</h5>
              <p className=" pb-10">
                Ukm Oikumene adalah sebuah organisasi keagamaan Kristen Katolik
                yang beroperasi di lingkungan Universitas Mataram. Organisasi
                ini didirikan dengan tujuan utama untuk menjadi sebuah wadah
                bagi mahasiswa dan mahasiswi Kristen Katolik di kampus tersebut,
                di mana mereka dapat bersatu dalam ibadah bersama dan memperkuat
                ikatan spiritual mereka. Ukm Oikumene adalah komunitas mahasiswa
                Kristen Katolik yang aktif di Universitas Mataram. Nama
                "Oikumene" sendiri berasal dari bahasa Yunani yang berarti
                "seluruh dunia" atau "kesatuan umat Kristen." Dengan semangat
                kesatuan ini, Ukm Oikumene bertujuan untuk menciptakan
                lingkungan yang mendukung pertumbuhan rohani, solidaritas, dan
                persaudaraan di antara anggotanya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
