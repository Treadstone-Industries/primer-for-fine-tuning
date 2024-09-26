import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bd1327cd-adf0-4854-aae1-094f5c37db0f', title: 'PATENT_TITLE_3579' },
            { id: 'c947bd6a-1a59-4e22-9cd3-bf1a3754a3d7', title: 'PATENT_TITLE_9817' },
            { id: '23256fef-9938-41cb-b2c4-a6f41ba49851', title: 'PATENT_TITLE_9872' },
        ]}
    />
)

export default App