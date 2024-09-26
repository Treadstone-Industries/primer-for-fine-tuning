import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '377d96bb-de53-4a60-bc76-72635f4fe66f', title: 'PATENT_TITLE_3474' },
                { id: '1d41eab2-f8b5-4630-ac58-ad93f260f41e', title: 'PATENT_TITLE_2070' },
            ]}
        />
    </Box>
)

export default App