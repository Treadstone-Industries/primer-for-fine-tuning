import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'abc19bba-2c9c-4d25-8b5a-3e15cbc886c7', title: 'PATENT_TITLE_5832' },
                { id: '7fd52312-198f-43a4-b374-5acad17eeb95', title: 'PATENT_TITLE_5986' },
                { id: 'ec9ee88b-5488-48fb-bbf9-54e89be8d7c7', title: 'PATENT_TITLE_7092' },
                { id: '57a4a8c9-2ba3-4720-9665-35ecd8cfb03b', title: 'PATENT_TITLE_4017' },
                { id: '7b64d5a1-9d6c-4617-bbd5-e01c5ff240a8', title: 'PATENT_TITLE_5355' },
            ]}
        />
    </Box>
)

export default App