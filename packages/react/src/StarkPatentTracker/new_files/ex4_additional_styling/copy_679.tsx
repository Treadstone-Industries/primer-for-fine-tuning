import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3b36c453-0cda-4143-81e4-d9992722c8a5', title: 'PATENT_TITLE_6844' },
                { id: '12db9f29-fc80-4d15-bb5e-5ae4049f76d7', title: 'PATENT_TITLE_4393' },
                { id: 'db9e9a29-4334-433d-a82e-9d384692c380', title: 'PATENT_TITLE_8199' },
                { id: 'deee720d-3efa-418e-8d0a-4e090085ba09', title: 'PATENT_TITLE_9650' },
                { id: '2a754988-75b3-4b09-9d64-1881ef4147b3', title: 'PATENT_TITLE_3451' },
                { id: '3e549561-c6e2-4826-8224-fc42dbccc640', title: 'PATENT_TITLE_1249' },
            ]}
        />
    </Box>
)

export default App