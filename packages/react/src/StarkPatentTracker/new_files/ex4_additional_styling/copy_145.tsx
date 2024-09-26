import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3c02fa7d-558f-4782-84f2-b673260305f8', title: 'PATENT_TITLE_5427' },
                { id: 'a58f13df-c580-4f7c-bfff-e5ec79813a93', title: 'PATENT_TITLE_8893' },
                { id: '2affac76-be6b-496c-86ec-a248a3e0764d', title: 'PATENT_TITLE_3001' },
                { id: '52e2f84d-6b25-4f9c-bdc5-22cb93e09f95', title: 'PATENT_TITLE_1589' },
                { id: 'ae28c494-9c24-4c32-9266-27b15d8a9e5c', title: 'PATENT_TITLE_6050' },
                { id: 'aa99e99a-5d99-419b-80b9-d3cfd222743c', title: 'PATENT_TITLE_7898' },
                { id: '10ddfdda-d032-4148-a2c8-37fbbf79b1c8', title: 'PATENT_TITLE_1247' },
                { id: 'a7f4be60-e515-40f1-91f0-942b4d6df8f6', title: 'PATENT_TITLE_6923' },
            ]}
        />
    </Box>
)

export default App