import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c5134aa1-b946-4435-9345-ba5331fdac32', title: 'PATENT_TITLE_4295' },
                { id: '5ba586bf-01d0-42e3-8f0b-809faf8173b4', title: 'PATENT_TITLE_8285' },
            ]}
        />
    </Box>
)

export default App