import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a94dca08-820d-4eec-b4a5-9de34179852a', title: 'PATENT_TITLE_8366' },
            { id: '2d3b4a04-e047-4e22-91da-94374f6b5b0e', title: 'PATENT_TITLE_1945' },
            { id: '25eff8ad-233c-47ab-a171-31364fcab8bd', title: 'PATENT_TITLE_4379' },
        ]}
    />
)

export default App