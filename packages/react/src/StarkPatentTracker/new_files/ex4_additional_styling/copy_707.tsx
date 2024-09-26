import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '25ce3821-e5e1-4833-b7c4-403d598da355', title: 'PATENT_TITLE_4399' },
                { id: '008c680c-caed-44ef-a514-d9240ab84a4a', title: 'PATENT_TITLE_6360' },
            ]}
        />
    </Box>
)

export default App