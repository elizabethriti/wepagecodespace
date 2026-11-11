import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function Sparkle({ style, size = 'text-lg' }) {
  return (
    <span className={`absolute animate-pulse ${size}`} style={style}>✨</span>
  )
}

function FloatingHeart({ style, delay = '0s' }) {
  return (
    <span
      className="absolute animate-[bounce_1s_infinite]"
      style={{ ...style, animationDelay: delay, animationDuration: '1.2s' }}
    >
      ❤️
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center gap-8 bg-pink-50 text-pink-900 dark:bg-pink-950 dark:text-pink-100 p-6 overflow-hidden">
      {/* Floating sparkles */}
      <Sparkle style={{ top: '5%', left: '10%' }} />
      <Sparkle style={{ top: '15%', right: '15%' }} size="text-2xl" />
      <Sparkle style={{ top: '30%', left: '5%' }} />
      <Sparkle style={{ bottom: '20%', right: '10%' }} size="text-xl" />
      <Sparkle style={{ bottom: '10%', left: '20%' }} />

      {/* Floating hearts */}
      <FloatingHeart style={{ top: '8%', right: '25%' }} delay="0s" />
      <FloatingHeart style={{ top: '20%', left: '30%' }} delay="0.3s" />
      <FloatingHeart style={{ bottom: '15%', right: '20%' }} delay="0.6s" />
      <FloatingHeart style={{ bottom: '25%', left: '15%' }} delay="0.9s" />

      {/* Unicorn & Dog logos */}
      <div className="flex items-center gap-6">
        <span className="text-6xl animate-[spin_20s_linear_infinite] inline-block">🦄</span>
        <span className="text-6xl">🐕</span>
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-pink-600">
        🌸 Unicorns, Dogs & Hearts! 🌸
      </h1>

      <button
        onClick={() => setCount((c) => c + 2)}
        className="rounded-lg bg-pink-500 px-5 py-2.5 font-medium text-white shadow hover:bg-pink-400 active:scale-95 transition"
      >
        🎀 Count is {count} 🎀
      </button>

      <p className="text-pink-400 dark:text-pink-300">
        ✨ Made with love, sparkles, and puppy energy ✨
      </p>

      <div className="flex gap-4 text-3xl">
        <span className="hover:scale-125 transition-transform cursor-default">🦄</span>
        <span className="hover:scale-125 transition-transform cursor-default">🐕</span>
        <span className="hover:scale-125 transition-transform cursor-default">❤️</span>
        <span className="hover:scale-125 transition-transform cursor-default">✨</span>
        <span className="hover:scale-125 transition-transform cursor-default">🌸</span>
      </div>
    </main>
  )
}

export default App