import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6a03e164-9f46-454b-9a64-332eac2aa731', title: 'PATENT_TITLE_8981' },
                { id: '50f3dd21-7706-44d4-9573-7091f585b0ce', title: 'PATENT_TITLE_1430' },
                { id: 'a66f6e5e-9b5e-4fcd-ad44-6300b8c4598b', title: 'PATENT_TITLE_6304' },
                { id: 'c7078bff-5b4d-4a01-9068-c72c6bfe7b51', title: 'PATENT_TITLE_5710' },
                { id: '38e76b15-eb3f-43a2-8498-fcf06a0b21a6', title: 'PATENT_TITLE_4346' },
                { id: 'cc5dd136-9529-40ba-b08d-c29d61ca4f8a', title: 'PATENT_TITLE_9225' },
                { id: '652a2ec1-87e0-49e4-84de-12c954441bf7', title: 'PATENT_TITLE_2713' },
                { id: '4bd2cd19-c8a1-4695-933f-71482389b030', title: 'PATENT_TITLE_3763' },
                { id: '624a6096-ad4a-4f1b-a6f1-98cabcb0aa51', title: 'PATENT_TITLE_1413' },
                { id: '03b1882d-da69-414a-8108-08496dc711d5', title: 'PATENT_TITLE_4354' },
            ]}
        />
    </Box>
)

export default App