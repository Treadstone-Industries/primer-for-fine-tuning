import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '96abe8ec-6180-42c5-80a9-63b16ca89cd1', title: 'PATENT_TITLE_2933' },
                { id: '1e8eb7e4-5cd9-4782-8b79-d21a19bcdb1a', title: 'PATENT_TITLE_5634' },
                { id: 'fc52e809-5483-439e-82d1-816466e5d220', title: 'PATENT_TITLE_4384' },
                { id: '4f2c97d1-a2f3-46dd-a6f8-723d322531d2', title: 'PATENT_TITLE_8893' },
                { id: 'b81fac72-b73b-4af5-9699-b25fbcf642cc', title: 'PATENT_TITLE_8228' },
            ]}
        />
    </Box>
)

export default App