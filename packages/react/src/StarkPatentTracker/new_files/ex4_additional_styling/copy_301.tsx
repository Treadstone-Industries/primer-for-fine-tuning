import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '59b6b303-9d67-4160-91df-4f84a2a170a1', title: 'PATENT_TITLE_8192' },
                { id: '9675a23e-5aa2-40f0-8241-5f575c94d49a', title: 'PATENT_TITLE_3678' },
            ]}
        />
    </Box>
)

export default App