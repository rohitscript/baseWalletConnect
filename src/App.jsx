import { useState } from 'react'
import './App.css'
import ConnectButton from './components/ConnectButton'
import { useSignMessage ,useAccount } from 'wagmi'
function App() {
  const [count, setCount] = useState(0)
  const { signMessage } = useSignMessage()
  const { address } = useAccount()
  return (
    <>
      <div className='place-content-center flex content-center items-center self-center'>

      <ConnectButton />
      </div>
      <div>{address}</div>
      <button onClick={() => signMessage({ message: 'you signed in the  world' })}>Sign message</button>
      <div className="card">
        <button  className="bg-sky-500 hover:bg-sky-700 rounded-full p-3 text-green-50 " onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       </div>
    </>
  )
}

export default App
