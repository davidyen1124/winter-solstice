import { useState, useEffect } from 'react'
import BinarySearchVisualization from './components/BinarySearchVisualization'
import SolarSystem from './components/SolarSystem'
import { calculateWinterSolstice } from './utils/astronomyCalculations'

function App() {
  const currentYear = new Date().getFullYear()
  const [solsticeData, setSolsticeData] = useState(null)
  const [searchProgress, setSearchProgress] = useState({
    left: 0,
    right: 1,
    current: 0.5
  })

  useEffect(() => {
    const calculate = async () => {
      const result = await calculateWinterSolstice(currentYear, (progress) =>
        setSearchProgress(progress)
      )
      setSolsticeData(result)
    }
    calculate()
  }, [])

  return (
    <div className='min-h-screen bg-gradient-radial from-[#0a192f] to-black relative overflow-hidden'>
      <div className='container mx-auto max-w-4xl'>
        <div className='min-h-screen flex flex-col items-center pt-8 relative z-10'>
          <div>
            <h1 className='text-5xl font-semibold text-center mb-4 bg-gradient-to-r from-[#90caf9] to-[#64b5f6] bg-clip-text text-transparent font-space-grotesk'>
              Winter Solstice {currentYear}
            </h1>
          </div>

          <div className='w-full h-[400px] relative mb-6 bg-[rgba(10,25,47,0.7)] backdrop-blur-lg border border-[rgba(144,202,249,0.2)] rounded-2xl overflow-hidden shadow-2xl'>
            <SolarSystem />
          </div>

          <div className='w-full mb-6 bg-[rgba(10,25,47,0.7)] backdrop-blur-lg border border-[rgba(144,202,249,0.2)] rounded-2xl p-6 shadow-2xl'>
            <h3 className='text-[#90caf9] text-xl mb-4 font-space-grotesk'>
              Binary Search Progress
            </h3>
            <BinarySearchVisualization progress={searchProgress} />
          </div>

          {solsticeData && (
            <div className='w-full animate-slideUp'>
              <div className='p-8 bg-[rgba(10,25,47,0.7)] backdrop-blur-lg border border-[rgba(144,202,249,0.2)] rounded-2xl shadow-2xl'>
                <h4 className='text-[#90caf9] text-2xl text-center font-space-mono tracking-wider'>
                  Solstice Time: {solsticeData.utcTime}
                </h4>
                <h5 className='text-[#90caf9] text-xl text-center mt-4 opacity-80 font-space-mono tracking-wider'>
                  Local Time: {solsticeData.localTime}
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
