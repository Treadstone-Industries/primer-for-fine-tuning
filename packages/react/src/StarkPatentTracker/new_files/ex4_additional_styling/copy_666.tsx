import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '70b753be-5430-4021-9a6a-62521cd5027c', title: 'PATENT_TITLE_8619' },
                { id: '29a470a8-db3f-4ef4-b930-a4647ef846b9', title: 'PATENT_TITLE_5600' },
                { id: '778e930e-d67e-4d5e-a2df-b9a0586510f5', title: 'PATENT_TITLE_4004' },
                { id: '33301a83-7bba-4b81-a301-0635cd9c1f98', title: 'PATENT_TITLE_3674' },
                { id: 'b1e41022-c7b0-43cd-987b-d291a024c1b6', title: 'PATENT_TITLE_6539' },
                { id: '04265ce3-d8c7-4f4c-9450-ec853bd20964', title: 'PATENT_TITLE_4841' },
                { id: 'ec4aaa01-65c9-4725-9d89-d0d6af49cb12', title: 'PATENT_TITLE_2721' },
                { id: '808ae4b7-da8f-457b-858d-b0767268eb41', title: 'PATENT_TITLE_6457' },
                { id: 'cf5e0081-ed1a-4c53-acbb-8d33ebe453b5', title: 'PATENT_TITLE_6100' },
                { id: '48a57512-e8df-4771-af29-69e65728cb9d', title: 'PATENT_TITLE_5518' },
            ]}
        />
    </Box>
)

export default App