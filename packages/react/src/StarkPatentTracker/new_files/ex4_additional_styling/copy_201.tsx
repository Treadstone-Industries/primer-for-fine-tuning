import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1bbb721b-f9f7-439a-bf9d-c457b0332924', title: 'PATENT_TITLE_1113' },
                { id: '4fc7fc7c-0c04-490d-9f2a-960a4c9b949a', title: 'PATENT_TITLE_2203' },
            ]}
        />
    </Box>
)

export default App