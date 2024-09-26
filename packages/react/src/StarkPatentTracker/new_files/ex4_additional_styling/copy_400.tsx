import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b29dd366-252a-4cd4-adb9-3c21c490312c', title: 'PATENT_TITLE_7947' },
                { id: 'd5a0c6f5-9a23-47ae-9908-b961c90a7f9b', title: 'PATENT_TITLE_2370' },
                { id: '6287ed5f-bedc-4625-a3e5-7d8c03f154ee', title: 'PATENT_TITLE_8334' },
            ]}
        />
    </Box>
)

export default App