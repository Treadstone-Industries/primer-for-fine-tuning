import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2ec034dd-5f28-43c2-a48a-279b7a06c309', title: 'PATENT_TITLE_1262' },
                { id: 'd3632f4c-ea5f-4e6b-af70-78cb4d2374ea', title: 'PATENT_TITLE_8639' },
            ]}
        />
    </Box>
)

export default App