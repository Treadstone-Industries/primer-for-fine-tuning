import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6d4f5b1b-a8e5-4097-8559-ba7067c5ade9', title: 'PATENT_TITLE_2501' },
            { id: '7d172d39-04a2-42c8-b7f3-e6ae60321034', title: 'PATENT_TITLE_9690' },
            { id: '4a522637-b6cd-4b5c-97fe-1643e0ad9901', title: 'PATENT_TITLE_5344' },
        ]}
    />
)

export default App