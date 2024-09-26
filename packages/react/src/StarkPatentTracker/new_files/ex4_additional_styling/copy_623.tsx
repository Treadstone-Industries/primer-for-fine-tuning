import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a74a9ee0-0320-4aef-a159-3b074d64008d', title: 'PATENT_TITLE_3199' },
                { id: 'd2f2b06e-8d84-4cfe-885e-b877c0b4b52b', title: 'PATENT_TITLE_8593' },
                { id: '0712f4c7-0005-46e8-a709-da69a9153f92', title: 'PATENT_TITLE_6783' },
                { id: '2305621f-986b-450b-8c80-f50e4a7fd922', title: 'PATENT_TITLE_2323' },
                { id: 'a7a60079-b5a5-4648-989e-d5f1b478fa22', title: 'PATENT_TITLE_1369' },
                { id: 'b4dfbc78-4f30-4368-b605-4dea2a64b35a', title: 'PATENT_TITLE_5215' },
                { id: '26a6cd56-123f-4872-8913-8dd341f87ccd', title: 'PATENT_TITLE_4520' },
                { id: '20690bb0-e450-4f19-9ad5-796fc892e327', title: 'PATENT_TITLE_6467' },
            ]}
        />
    </Box>
)

export default App