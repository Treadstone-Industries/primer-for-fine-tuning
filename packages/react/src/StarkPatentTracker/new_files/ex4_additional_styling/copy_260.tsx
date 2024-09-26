import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ddcdac35-b09f-4153-b9d5-10e2073f299c', title: 'PATENT_TITLE_9252' },
                { id: '4421934f-0a3e-4caf-977f-4570cb1182a2', title: 'PATENT_TITLE_9545' },
            ]}
        />
    </Box>
)

export default App