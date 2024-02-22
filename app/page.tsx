import ServerComponent from './components/ServerComponent'
import Controls from './components/Controls'
import Output from './components/Output'
import BgColourProvider from './store/BgColourContext'
import { inconsolata }  from './fonts'

export default function Home() {
  return ( 
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-400">
      <div className="absolute top-4 w-11/12 lg:w-[50rem]">
        <h1 className="text-3xl md:text-6xl font-bold text-center">Jotai Example</h1>
        <p className={`text-center mt-2 ${inconsolata.className}`}>I used Jotai and Next.js to create this very simple example. It renders two client components from within a server component, and uses Jotai to give both client components access to a shared state, i.e. the background colour.</p>
      </div>
      <BgColourProvider>
        <ServerComponent>
          <Controls />
          <Output />
        </ServerComponent>
      </BgColourProvider>
      <div className="absolute bottom-12 sm:left-1/2 md:bottom-1 sm:-translate-x-1/2 text-center text-sm">
        <p>View the source code <a href="https://github.com/ollie-cook/jotai-example" target="_blank" className="underline">here</a>.</p>
        <p>I used the <a href="https://jotai.org/" target="_blank" className="underline">docs</a> and <a href="https://www.pronextjs.dev/tutorials/state-management" target="_blank" className="underline">this</a> tutorial by Jack Herrington.</p>
      </div>  
    </main>
  );
}
