import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bc0aa53b-99db-48aa-a450-b4c10bbb839a', title: 'PATENT_TITLE_6131' },
                { id: '0cda0e63-23e9-4eab-9bb4-a44f67ece234', title: 'PATENT_TITLE_3399' },
                { id: 'e9dbebbe-e429-41b2-8024-b08073c93f84', title: 'PATENT_TITLE_7104' },
            ]}
        />
    </Box>
)

export default App