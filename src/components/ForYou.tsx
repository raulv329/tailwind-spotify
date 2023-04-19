import Image from "next/image"

export function ForYou() {
    return (
        <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5  p-3 rounded-md hover:bg-white/20 flex flex-col gap-2">
                <Image src="/album.jpg" className="w-full" alt="Imagem" width={120} height={120} />
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-500">Derek, Veigh, Felipe Ret e mais</span>
            </a>
            <a href="#" className="bg-white/5  p-3 rounded-md hover:bg-white/20 flex flex-col gap-2">
                <Image src="/album.jpg" className="w-full" alt="Imagem" width={120} height={120} />
                <strong className="font-semibold">Daily mix 2</strong>
                <span className="text-sm text-zinc-500">Mc Cabelinho, Kayblack, tz</span>
            </a>
            <a href="#" className="bg-white/5  p-3 rounded-md hover:bg-white/20 flex flex-col gap-2">
                <Image src="/album.jpg" className="w-full" alt="Imagem" width={120} height={120} />
                <strong className="font-semibold">Daily mix 3</strong>
                <span className="text-sm text-zinc-500">Kayblack</span>
            </a>
            <a href="#" className="bg-white/5  p-3 rounded-md hover:bg-white/20 flex flex-col gap-2">
                <Image src="/album.jpg" className="w-full" alt="Imagem" width={120} height={120} />
                <strong className="font-semibold">Daily mix 4</strong>
                <span className="text-sm text-zinc-500">Kayblack</span>
            </a>
            <a href="#" className="bg-white/5  p-3 rounded-md hover:bg-white/20 flex flex-col gap-2">
                <Image src="/album.jpg" className="w-full" alt="Imagem" width={120} height={120} />
                <strong className="font-semibold">Daily mix 5</strong>
                <span className="text-sm text-zinc-500">Kayblack</span>
            </a>
        </div>

    )
}