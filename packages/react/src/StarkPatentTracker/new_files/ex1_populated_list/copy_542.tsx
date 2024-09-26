import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8bd72187-15c7-401f-b309-8eafe99fe016', title: 'PATENT_TITLE_2736' },
            { id: '22dd5da6-1b78-4005-961d-af26c58778d5', title: 'PATENT_TITLE_6150' },
            { id: 'b153e166-0fe8-4875-9696-24b6a163e665', title: 'PATENT_TITLE_1556' },
            { id: '060c0994-2c60-4a8a-8709-f987b7612fc8', title: 'PATENT_TITLE_6730' },
            { id: 'f1a7119a-5831-47f6-b472-417038b89600', title: 'PATENT_TITLE_3244' },
            { id: 'f74ee250-7184-4e9d-96c5-ee2093ef1268', title: 'PATENT_TITLE_8203' },
            { id: '7618b783-e0c5-41ae-8e3e-46c6758d2fab', title: 'PATENT_TITLE_5283' },
            { id: 'ee40d0cf-3050-4dd7-b30f-05dac144af17', title: 'PATENT_TITLE_1166' },
        ]}
    />
)

export default App