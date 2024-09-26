import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '545e8cfb-5407-4365-a262-8dae242d899c', title: 'PATENT_TITLE_7101' },
            { id: '8ad0078d-a22d-4612-9d65-623f9929752d', title: 'PATENT_TITLE_5237' },
            { id: 'fff098d7-47b9-4afe-89e4-707a8056a8fd', title: 'PATENT_TITLE_6963' },
        ]}
    />
)

export default App