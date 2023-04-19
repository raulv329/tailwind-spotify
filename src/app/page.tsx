import { Footer } from "@/components/Footer"
import { ForYou } from "@/components/ForYou"
import { Nextpage } from "@/components/Nextpage"
import { Playlist } from "@/components/Playlist"
import { Sidebar } from "@/components/sidebar"
import { Play } from "lucide-react"
import Image from "next/image"


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />
        
        <main className="flex-1 p-6">

          <Nextpage />
       
          <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>

          <Playlist />          

          <h2 className="font-semibold text-2xl mt-10">Made for Raul Vinicius</h2>

          <ForYou />
                        
        </main>
      </div>

      <Footer />

    </div>
  )
}
