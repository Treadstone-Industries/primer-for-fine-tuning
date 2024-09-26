import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8e7a49af-bfed-4584-906b-ef078b18a3f3', title: 'PATENT_TITLE_8460' },
            { id: '036a8746-95fd-44be-9f07-837945a2d5e0', title: 'PATENT_TITLE_3436' },
            { id: 'e123e4c8-8d68-4b01-8cdd-fbbd301bc149', title: 'PATENT_TITLE_4694' },
            { id: 'b64226d4-2686-4208-a2fe-2ecbf8b60d8d', title: 'PATENT_TITLE_8415' },
            { id: '27fef084-5430-4649-8c39-77c68afa3661', title: 'PATENT_TITLE_4081' },
        ]}
    />
)

export default App