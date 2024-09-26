import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c2f4f204-5330-4d67-9189-32c188d4f340', title: 'PATENT_TITLE_9893' },
                { id: 'a7352f24-1cee-419a-a7da-4990c9bf7225', title: 'PATENT_TITLE_3858' },
                { id: '467e3543-d7b7-4b52-8031-72c75e6c0c41', title: 'PATENT_TITLE_3838' },
                { id: '06d59796-6d28-496f-8bb3-ff4c27caceb4', title: 'PATENT_TITLE_4156' },
                { id: 'b073029a-f18c-4442-b44f-7b3d9c96fa80', title: 'PATENT_TITLE_1464' },
                { id: '7efbe12b-14cf-435b-aea1-525ea91b4236', title: 'PATENT_TITLE_3728' },
            ]}
        />
    </Box>
)

export default App