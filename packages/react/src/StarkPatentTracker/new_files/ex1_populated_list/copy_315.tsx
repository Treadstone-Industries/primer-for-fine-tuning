import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cbe243e8-da78-4c55-8f98-8ebae0a6dab5', title: 'PATENT_TITLE_5779' },
            { id: '83a931b1-14dd-4a69-a1f6-fd180602c6bd', title: 'PATENT_TITLE_2556' },
            { id: 'de7f0381-f52e-4f87-b62c-3fbbb48019aa', title: 'PATENT_TITLE_2465' },
            { id: '920043ab-323b-492b-9415-a1383fdacef2', title: 'PATENT_TITLE_4650' },
            { id: 'bc85274b-bbf3-4c43-91f8-2431e6bc1d90', title: 'PATENT_TITLE_7175' },
            { id: '19d202e1-7b4a-42c1-9d10-7174c4eb096f', title: 'PATENT_TITLE_7369' },
        ]}
    />
)

export default App