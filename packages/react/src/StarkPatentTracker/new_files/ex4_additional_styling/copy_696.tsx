import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3282441c-4d06-4e86-9a56-4caaa001713d', title: 'PATENT_TITLE_3523' },
                { id: '098971df-3c57-4f49-8cb7-4aab441edbda', title: 'PATENT_TITLE_2597' },
                { id: 'b7a475ef-aa62-47f4-a254-c1075eb16cd1', title: 'PATENT_TITLE_7301' },
                { id: '89bb6427-b0d2-4360-80cf-304dd5f611bb', title: 'PATENT_TITLE_5964' },
                { id: '4c597811-7d25-4e9d-98a4-bceca7fbc3d0', title: 'PATENT_TITLE_9564' },
                { id: 'c7da027c-e164-40b9-aa04-42f9222dac68', title: 'PATENT_TITLE_2394' },
            ]}
        />
    </Box>
)

export default App