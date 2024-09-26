import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '57babefe-7224-459e-ad87-a1fa5da46864', title: 'PATENT_TITLE_9564' },
            { id: 'e9623f14-cf4e-4856-b3c7-0e1efb854c90', title: 'PATENT_TITLE_3131' },
            { id: 'ffa0f1fe-1872-4aee-a76c-4cf5f658069d', title: 'PATENT_TITLE_8876' },
        ]}
    />
)

export default App