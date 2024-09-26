import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8a33f761-546b-4e84-938e-ee270c29d5e7', title: 'PATENT_TITLE_6130' },
                { id: 'c17fe845-1a46-4698-b12e-2b0edef6388a', title: 'PATENT_TITLE_7207' },
                { id: '520fd673-34f2-4470-aee7-d415f4f5f21e', title: 'PATENT_TITLE_2508' },
                { id: '21deff3c-852f-43ed-acf1-cdc5db3620b1', title: 'PATENT_TITLE_6768' },
                { id: 'e3cf1fbc-2a3e-49b1-a2e6-0ab62dea6b8e', title: 'PATENT_TITLE_9431' },
                { id: '206af806-a431-49f2-8bce-58cc1496336e', title: 'PATENT_TITLE_5774' },
            ]}
        />
    </Box>
)

export default App