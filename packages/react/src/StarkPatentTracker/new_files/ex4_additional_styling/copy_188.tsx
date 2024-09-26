import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8bba063b-22be-4e6f-8a97-0d7efa909de8', title: 'PATENT_TITLE_4484' },
                { id: 'ab4d0f79-be0f-4591-90a8-8aae7c361217', title: 'PATENT_TITLE_3933' },
                { id: '8edb16ec-c598-4fe3-a8f4-77edaa4d22d7', title: 'PATENT_TITLE_1589' },
                { id: '75039b10-cf32-4cd0-92e4-4d23299fb6f2', title: 'PATENT_TITLE_6780' },
            ]}
        />
    </Box>
)

export default App