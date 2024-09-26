import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '01d0dac4-3565-4146-a9b0-24432a0639c9', title: 'PATENT_TITLE_2710' },
                { id: '13486ae9-7889-48af-ba35-fd238aa0db96', title: 'PATENT_TITLE_1616' },
            ]}
        />
    </Box>
)

export default App