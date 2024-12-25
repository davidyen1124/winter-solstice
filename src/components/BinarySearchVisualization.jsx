import { motion } from 'framer-motion'

const BinarySearchVisualization = ({ progress }) => {
  const { left, right, current } = progress

  return (
    <div className='p-4 bg-[rgba(18,18,18,0.8)] backdrop-blur-lg rounded-lg shadow-lg'>
      <div className='w-full h-[60px] relative bg-gradient-to-r from-[#1a237e] to-[#0d47a1] rounded overflow-hidden'>
        <motion.div
          initial={false}
          animate={{
            left: `${left * 100}%`,
            right: `${(1 - right) * 100}%`
          }}
          className='absolute top-0 bottom-0 bg-[rgba(144,202,249,0.2)]'
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial={false}
          animate={{
            left: `${current * 100}%`
          }}
          className='absolute w-1 h-full bg-[#90caf9] shadow-[0_0_10px_#90caf9]'
          transition={{ duration: 0.3 }}
        />

        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)] opacity-50' />
      </div>
    </div>
  )
}

export default BinarySearchVisualization
