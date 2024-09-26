import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd7a48810-4fb4-4d3d-8e2a-08e1100f9222', title: 'PATENT_TITLE_1384' },
                { id: '2aeec7b1-f75d-4594-81d1-90af02a53421', title: 'PATENT_TITLE_2612' },
                { id: '020d595e-c611-4f6c-9240-c07d32e66bc8', title: 'PATENT_TITLE_6972' },
                { id: '1aadd59c-0e78-401c-ab54-f887f6e93556', title: 'PATENT_TITLE_9297' },
                { id: 'bc91dbb3-fa77-487f-a538-ea6069fef2cc', title: 'PATENT_TITLE_7316' },
                { id: '8ddc2151-4193-4757-8beb-4aa71d977d05', title: 'PATENT_TITLE_4209' },
            ]}
        />
    </Box>
)

export default App