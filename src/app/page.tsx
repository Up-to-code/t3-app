import Image from "next/image";

const Glrey = [
  "https://utfs.io/f/693f7f7a-0127-4feb-98bb-7a78accf6ddd-2dxv1y.jpg",
  "https://utfs.io/f/53cefbc1-26c0-45eb-a3af-b5c0d9e745b6-ws2jhm.jpg",
  "https://utfs.io/f/ba111a6c-0246-451a-a570-82264ebed7e8-lnpi92.jpg",
]

const OG = Glrey.map((URL, index) => (({
  id: index,
  URL,
})))
export default function HomePage() {
  return (
    <main className=" bg-black text-white">
      <div className="flex flex-wrap p-4 gap-5 justify-center">
        {
          [...OG, ...OG, ...OG].map((e) => (
            <div key={e.id}>
              <Image src={e.URL} alt={""} width={200} height={200} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
