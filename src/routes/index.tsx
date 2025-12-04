import { createFileRoute } from '@tanstack/react-router'
import { Sparkles, Snowflake, Star } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900 flex flex-col items-center justify-center relative overflow-hidden text-white font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Snowflakes */}
        <div className="absolute top-10 left-10 animate-pulse opacity-50">
          <Snowflake className="w-12 h-12 text-white" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce opacity-40 delay-700">
          <Snowflake className="w-8 h-8 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse opacity-30 delay-300">
          <Snowflake className="w-16 h-16 text-white" />
        </div>
        
        {/* Stars */}
        <div className="absolute top-1/4 right-1/3 animate-ping opacity-60">
          <Star className="w-4 h-4 text-yellow-200" />
        </div>
        <div className="absolute bottom-1/3 left-10 animate-pulse opacity-50">
          <Star className="w-6 h-6 text-yellow-100" />
        </div>
      </div>

      {/* Hanging Ornaments (CSS + SVG) */}
      <div className="absolute top-0 w-full flex justify-center gap-16 md:gap-32 pointer-events-none">
        {/* Ornament 1 */}
        <div className="flex flex-col items-center animate-[swing_3s_ease-in-out_infinite] origin-top">
          <div className="w-0.5 h-24 bg-yellow-200/50"></div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center border-2 border-yellow-200">
            <Sparkles className="w-8 h-8 text-yellow-100" />
          </div>
        </div>
        {/* Ornament 2 */}
        <div className="flex flex-col items-center animate-[swing_4s_ease-in-out_infinite_reverse] origin-top mt-[-20px]">
          <div className="w-0.5 h-32 bg-white/50"></div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg flex items-center justify-center border-2 border-green-300">
             <Snowflake className="w-10 h-10 text-green-100" />
          </div>
        </div>
         {/* Ornament 3 */}
        <div className="flex flex-col items-center animate-[swing_3.5s_ease-in-out_infinite] origin-top">
          <div className="w-0.5 h-20 bg-red-200/50"></div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center border-2 border-red-300">
            <Star className="w-6 h-6 text-red-100" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center p-8 backdrop-blur-sm bg-black/10 rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-4">
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Kalavishkar
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8 opacity-80"></div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-md font-serif tracking-wide">
          Coming Soon
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto leading-relaxed">
          We are crafting something spectacular.
          <br />
          Stay tuned for a celebration of art and culture!
        </p>

        
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      
      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
        }
      `}</style>
    </div>
  )
}
