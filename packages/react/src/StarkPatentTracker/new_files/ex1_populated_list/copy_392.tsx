import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ec40fd4f-7a4f-4ac1-9f63-6419ddc4059f', title: 'PATENT_TITLE_9660' },
            { id: '13cfc45e-7ac6-41c7-b0fb-88fc75aa5853', title: 'PATENT_TITLE_9230' },
            { id: 'c369a65a-97d9-4b1d-981f-a5e55910d114', title: 'PATENT_TITLE_4740' },
            { id: '685dc7b3-9b09-4ce7-b169-74887acc8b82', title: 'PATENT_TITLE_6263' },
        ]}
    />
)

export default App