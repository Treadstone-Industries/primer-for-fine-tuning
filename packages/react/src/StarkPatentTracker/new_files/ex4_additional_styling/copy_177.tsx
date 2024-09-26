import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8ccce2bb-f969-4492-bc5b-455c26c8f8b1', title: 'PATENT_TITLE_4413' },
                { id: '2a8dd881-6a07-4737-a4ae-d9ed88677ef8', title: 'PATENT_TITLE_9149' },
                { id: '67313a8f-1dad-4c7f-bfcf-17ea9b3d1ec6', title: 'PATENT_TITLE_8126' },
                { id: 'a2beb70f-73e1-4cd0-a379-c19e4eaa9166', title: 'PATENT_TITLE_8420' },
                { id: '4790913f-99f8-4daf-bacf-25d633e2922d', title: 'PATENT_TITLE_4664' },
            ]}
        />
    </Box>
)

export default App