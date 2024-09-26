import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '71096dcc-1adf-4af7-8103-dde9c33e6590', title: 'PATENT_TITLE_9295' },
            { id: '47d2a270-e008-48ed-a452-406b51f5bb7d', title: 'PATENT_TITLE_5383' },
            { id: 'ac4c6c29-8419-45da-9ef4-15b3dad46a7b', title: 'PATENT_TITLE_2118' },
            { id: '93187cf6-6767-4b16-857c-83d2b939a3dc', title: 'PATENT_TITLE_9835' },
            { id: 'c4393b1b-db33-49f5-ba92-c8c417eb711c', title: 'PATENT_TITLE_6139' },
            { id: 'f1e1c25a-af0c-464d-8066-155e68acb02f', title: 'PATENT_TITLE_3678' },
            { id: 'aa81e8c3-5bdf-4342-94b4-a0737777ca59', title: 'PATENT_TITLE_2606' },
        ]}
    />
)

export default App