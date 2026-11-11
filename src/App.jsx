import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-pink-50 text-pink-900 dark:bg-pink-950 dark:text-pink-100 p-6">
      <div className="flex items-center gap-6">
        <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        <img src={reactLogo} className="h-16 w-16 animate-[spin_20s_linear_infinite]" alt="React logo" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-pink-600">Vite + React + Tailwind</h1>
      <button
        onClick={() => setCount((c) => c + 2)}
        className="rounded-lg bg-pink-500 px-5 py-2.5 font-medium text-white shadow hover:bg-pink-400 active:scale-95 transition"
      >
        Count is {count}
      </button>
      <p className="text-pink-400 dark:text-pink-300">
        Edit <code className="font-mono text-sm">src/App.jsx</code> and save to test HMR.
      </p>
    </main>
  )
}

export default App
