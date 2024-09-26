import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c50d4ec4-2866-4683-ac39-5c76605f9407', title: 'PATENT_TITLE_6597' },
                { id: 'db780bb3-ed79-4e62-9c96-d55d724ea6b8', title: 'PATENT_TITLE_2968' },
                { id: '3649604f-a655-47b7-b4c6-9ce4a075d2bd', title: 'PATENT_TITLE_8768' },
                { id: '8806b7fd-a97b-4888-9552-2db0083090f7', title: 'PATENT_TITLE_1960' },
            ]}
        />
    </Box>
)

export default App