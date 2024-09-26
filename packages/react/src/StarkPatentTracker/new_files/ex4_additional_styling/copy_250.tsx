import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4d9875b8-e925-404e-97aa-b1b66db72b5e', title: 'PATENT_TITLE_3005' },
                { id: '0453b3bc-266f-441e-a6b4-b0d678c4109b', title: 'PATENT_TITLE_5858' },
                { id: 'c2f3e165-4a3c-4623-9849-de967b01c26d', title: 'PATENT_TITLE_3253' },
                { id: '7c77372b-d127-4700-88d2-4939be0b40e3', title: 'PATENT_TITLE_4676' },
                { id: '0e338ce7-8cb6-4c89-a98e-4103c39a0e51', title: 'PATENT_TITLE_5604' },
                { id: '861a2af1-f03b-4a3a-a052-3ed62ea772c0', title: 'PATENT_TITLE_5314' },
                { id: '0d8d8b6d-42df-4a7b-bc68-3d64579491f2', title: 'PATENT_TITLE_8031' },
            ]}
        />
    </Box>
)

export default App