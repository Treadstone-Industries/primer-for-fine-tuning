import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '46654bca-eaa0-407f-a909-c04cb46e4b3f', title: 'PATENT_TITLE_9060' },
            { id: '8d961442-3378-47bb-9315-0c3103949b43', title: 'PATENT_TITLE_4277' },
            { id: '4f7e0b75-3b97-428f-a23e-9604605fe112', title: 'PATENT_TITLE_5490' },
            { id: 'cf2ecf56-e375-43fe-bf09-22f39686e1d4', title: 'PATENT_TITLE_7895' },
            { id: 'ce498a94-d2cb-488b-91f0-780a190dba9f', title: 'PATENT_TITLE_6271' },
        ]}
    />
)

export default App