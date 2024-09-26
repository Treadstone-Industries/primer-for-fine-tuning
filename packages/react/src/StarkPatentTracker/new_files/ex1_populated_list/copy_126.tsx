import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '877a7732-18b2-46d1-8eb1-41c649dc25a6', title: 'PATENT_TITLE_4155' },
            { id: 'eb1a845f-7860-424b-9be7-83114b413e3c', title: 'PATENT_TITLE_1370' },
            { id: '75940db8-fa07-467f-95e3-3d75ab540adf', title: 'PATENT_TITLE_6773' },
            { id: '6b7f4f2a-e509-4baa-a34d-3f0f23688843', title: 'PATENT_TITLE_1915' },
            { id: '652a3d64-cef8-4560-a325-7f6d8291c414', title: 'PATENT_TITLE_4453' },
        ]}
    />
)

export default App