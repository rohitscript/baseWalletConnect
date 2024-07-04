
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { base,arbitrum, mainnet , baseSepolia} from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Your WalletConnect Cloud project ID
const projectId = 'd33e36888c9d9993fdefb0ce4dd497f9'

// 2. Create wagmiConfig
const metadata = {
  name: 'WalletConnect',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [baseSepolia,base,mainnet, arbitrum] 
const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    auth: {
      email: true, // default to true
      socials: ['google', 'x', 'github', 'discord', 'apple'],
      showWallets: true, // default to true
      walletFeatures: true // default to true
    }
  })

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
  
})

export default function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
    