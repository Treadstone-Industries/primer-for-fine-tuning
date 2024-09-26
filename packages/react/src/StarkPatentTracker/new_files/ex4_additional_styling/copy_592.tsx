import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '06d4c7fc-b68d-45a0-bc79-19ada823541f', title: 'PATENT_TITLE_8393' },
                { id: '9f6a8dd7-8f07-41ac-a598-8b10be934133', title: 'PATENT_TITLE_5367' },
                { id: 'e619c4b0-7906-49f9-b00c-3c7ad553e6ba', title: 'PATENT_TITLE_3559' },
            ]}
        />
    </Box>
)

export default App