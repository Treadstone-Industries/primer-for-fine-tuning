import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '534e3fa3-8b7b-4d88-8914-74e4b8de864e', title: 'PATENT_TITLE_8397' },
                { id: 'b28e8810-7aff-42d9-b342-153607be1233', title: 'PATENT_TITLE_3109' },
                { id: '261d4923-426c-4e85-a6fa-4cecdc4e16dd', title: 'PATENT_TITLE_4643' },
            ]}
        />
    </Box>
)

export default App