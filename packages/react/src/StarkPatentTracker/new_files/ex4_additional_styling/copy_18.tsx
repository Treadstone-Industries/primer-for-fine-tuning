import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '18e4fb88-3d85-4cee-a97e-1adcab73b3d0', title: 'PATENT_TITLE_6404' },
                { id: '709cf979-62f4-4582-bec5-3c09469e04ca', title: 'PATENT_TITLE_4663' },
                { id: '30285c4d-5ba2-471c-95a6-6cd8d4da5cab', title: 'PATENT_TITLE_3819' },
                { id: '0871b364-1afa-49db-a3e9-809504954382', title: 'PATENT_TITLE_6997' },
                { id: '4806588b-116d-42be-b0f5-86297ea15993', title: 'PATENT_TITLE_6280' },
                { id: 'e92a17f5-6fb3-46f2-ad67-b9e69a12b5fb', title: 'PATENT_TITLE_8561' },
                { id: '217439d0-7d04-446a-bae7-03b703028f8d', title: 'PATENT_TITLE_1926' },
                { id: '3c299e3f-0b57-4d64-b3c7-d7f59259c9b3', title: 'PATENT_TITLE_1771' },
            ]}
        />
    </Box>
)

export default App