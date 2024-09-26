import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9085a4d9-c795-485f-a4bc-435e9b0ae951', title: 'PATENT_TITLE_1609' },
            { id: 'b07e7b5c-6a10-4c2d-97da-818d6b1ff723', title: 'PATENT_TITLE_3090' },
            { id: '4f098eed-0aed-49a8-aeff-7ddc4d06d158', title: 'PATENT_TITLE_1493' },
            { id: 'ceeee2e1-55e8-4ead-aa6c-f6e023ed989a', title: 'PATENT_TITLE_1395' },
            { id: '5adf4a18-10dc-497e-bffb-8557683e1e45', title: 'PATENT_TITLE_1072' },
            { id: '2d8dcece-7aa9-4886-9585-cb38f8296eeb', title: 'PATENT_TITLE_9089' },
            { id: '8b940e83-7ab7-4c12-b357-04a864cfed7f', title: 'PATENT_TITLE_6829' },
            { id: '6fb71636-230f-4a6f-a46b-2effc124a722', title: 'PATENT_TITLE_9909' },
            { id: '99772eba-2730-4ea5-86c0-c91ce43a77a1', title: 'PATENT_TITLE_7724' },
            { id: 'eb1b0a45-6ad6-467e-84e0-35dcc3204672', title: 'PATENT_TITLE_4983' },
        ]}
    />
)

export default App