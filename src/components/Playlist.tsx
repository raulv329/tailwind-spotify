import Image from "next/image"
import { Play } from "lucide-react"

export function Playlist () {
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/album.jpg" alt="Imagem" width={110} height={110} />
              <strong>Contradições</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Imagem" width={110} height={110} />
              <strong>Contradições</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Imagem" width={110} height={110} />
              <strong>Contradições</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Imagem" width={110} height={110} />
              <strong>Contradições</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Imagem" width={110} height={110} />
              <strong>Contradições</strong>

              <button className="w-12 h-12 flex items-center group justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Imagem" width={110} height={110} />
              <strong>Contradições</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
    ) 
}