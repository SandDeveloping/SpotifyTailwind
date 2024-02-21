import {Home as HomeIcon, Search, Library, Plus, MoveRight, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Maximize2, Volume2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-[450px]  bg-zinc-950 p-2 ">
          <nav>
            <a href="" className='flex items-center gap-4 bg-zinc-900 text-zinc-400 font-bold p-5 rounded-t-lg hover:text-white'>
              <HomeIcon/>
              <h1>Inicío</h1>
            </a>
            <a href="" className='flex items-center gap-4 bg-zinc-900 text-zinc-400 font-bold p-5 rounded-b-lg hover:text-white'>
              <Search/>
              <h1>Buscar</h1>
            </a>
          </nav>
          <div className='w-92 h-[750px] bg-zinc-900 mt-2 rounded-lg'>
            <div className="flex justify-between">
            <a href="" className='flex items-center gap-4 text-zinc-400 font-bold p-5 hover:text-white'>
              <Library/>
              <h1>Sua Biblioteca</h1>
            </a>
              <div className='flex items-center gap-4 text-zinc-400 px-4 '>
                  <Plus/>
                  <MoveRight />
              </div>
            </div>
            <div className="mx-2 h-38 p-4 bg-zinc-800 rounded-lg ">
              <h1 className='font-bold'>Crie sua primeira playlist</h1>
              <h1 className='font-normal text-[13px] mt-2'>É facil, vamos te ajudar.</h1>
              <div className='grid justify-items-start mt-8'>  
                <button className='px-4 py-2 text-sm bg-white rounded-full font-bold text-zinc-800'> Criar Playlist</button>
              </div>
            </div>
            <div className="mt-4 mx-2 h-38 p-4 bg-zinc-800 rounded-lg ">
              <h1 className='font-bold'>Que tal seguir um podcast novo?</h1>
              <h1 className='font-normal text-[13px] mt-2'>Avisaremos você sobre novos episódios.</h1>
              <div className='grid justify-items-start mt-8'>  
                <button className='px-4 py-2 text-sm bg-white rounded-full font-bold text-zinc-800'> Explore Podcast</button>
              </div>
            </div>
          </div>
        </aside>
        <main className="bg-gradient-to-t from-zinc-900 via-zinc-900 to-[#222222] m-[7px] rounded-xl flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-zinc-800 text-zinc-400 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-zinc-800 text-zinc-400 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-bold text-2xl mt-5'>Experimente algo diferente.</h1>
          <div className="flex space-x-5">
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48' />
              </div>
                  <h1 className='font-bold'>Top Brasil</h1>
                  <p className='font-medium text-sm text-zinc-200'>Yunk vino destruiu esse ano, <br /> e esse ano ficou top 1 do Brasil.</p>
            </div>
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album2.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48'/>
              </div>
                  <h1 className='font-bold'>Trap Hits</h1>
                  <p className='font-medium text-sm text-zinc-200'>Esse ano Yunk vino lançou, vários Hits deixando vários para trás.</p>
            </div>
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album3.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48'/>
              </div>
                  <h1 className='font-bold'>Top Brasil</h1>
                  <p className='font-medium text-sm text-zinc-200'>Yunk vino destruiu esse ano, <br /> e esse ano ficou top 1 do Brasil.</p>
            </div>
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album4.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48'/>
              </div>
                  <h1 className='font-bold'>Funk Hits</h1>
                  <p className='font-medium text-sm text-zinc-200'>Mc ig se tornou o top 1 do funk lançando hits como lets 4, FEFA, ninguém está puro e 3 dias virado.</p>
            </div>
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album5.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48'/>
              </div>
                  <h1 className='font-bold'>Talvez você goste</h1>
                  <p className='font-medium text-sm text-zinc-200'>Mc Ph um dos melhores Mcs/Trappers em 2024 e você vai gostar.</p>
            </div>
          </div>
          <h1 className='font-bold text-2xl mt-5'>100% para você.</h1>
          <div className="flex space-x-5">
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album4.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48'/>
              </div>
                  <h1 className='pt-2 font-bold'>Meu nome não é Igor.</h1>
            </div>
            <div className="text-center p-5 mt-4 w-60 bg-[#141414] rounded-lg hover:bg-zinc-800">
              <div className="flex justify-center">
                  <img src="/album5.jpg" alt="Capa do album Vino" className='rounded-lg w-48 h-48'/>
              </div>
                  <h1 className='pt-2 font-bold'>O cara do momento.</h1>
            </div>
          </div>
        </main>
      </div>
      <footer className="fixed left-0 bottom-0 w-full bg-zinc-800 border-t border-zinc-700 p-6 flex justify-between">
        <div className='flex items-center gap-3'>
            <img src="/album.jpg" width={56} height={56} alt="Capa do album Vino" className='rounded-lg'/>
            <div className="flex flex-col gap-1">
              <h1 className=' font-medium'>237</ h1>
              <span className='text-zinc-400'>Yunk vino</span>
            </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-3'>
            <Shuffle className='text-zinc-600'/>
            <SkipBack className='text-zinc-300 hover:text-white'/>

            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-zinc-950'>
                <Play/>
            </button>

            <SkipForward className='text-zinc-300 hover:text-white'/>
            <Repeat className='text-zinc-600'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='w-96 h-1 rounded-full bg-zinc-600'>
                <div className='w-40 h-1 rounded-full bg-white hover:bg-[#1ED760]'></div>
            </div>
            <span className='text-xs text-zinc-400'>3:14</span>
          </div>
        </div>      
        <div className='flex items-center gap-2'>
           <Mic2 size={20}/>
           <LayoutList size={20} />
           <Laptop2 size={20} />
           <div className='flex items-center gap-2'>
            <Volume2 size={20} />
            <div className='w-24 h-1 rounded-full bg-zinc-600'>
                <div className='w-10 h-1 rounded-full bg-white hover:bg-[#1ED760]'></div>
            </div>
           </div>
           <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
