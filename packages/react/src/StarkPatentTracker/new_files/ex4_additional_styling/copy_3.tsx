import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f5d5c366-024a-4101-89fc-5906f12be520', title: 'PATENT_TITLE_8036' },
                { id: '0d486f90-2c06-465a-8534-f6d349293e9d', title: 'PATENT_TITLE_6644' },
                { id: 'bdf3ed70-d794-4e72-804c-5dab24d179b0', title: 'PATENT_TITLE_9316' },
            ]}
        />
    </Box>
)

export default App