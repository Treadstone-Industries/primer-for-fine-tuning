import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b02936ed-d041-470e-9de6-740c08a4472a', title: 'PATENT_TITLE_9046' },
                { id: 'b2b1bbdf-9583-48c9-8224-0ccca0ca12b2', title: 'PATENT_TITLE_3428' },
                { id: 'cd09c0c4-38b0-4c3d-85ce-40cbeb57e798', title: 'PATENT_TITLE_9272' },
                { id: '7a83d29d-4673-4db7-bb23-6ab19a8f9a56', title: 'PATENT_TITLE_5101' },
                { id: '9c5120c3-7a98-4739-b9eb-493d72d5baa9', title: 'PATENT_TITLE_3677' },
                { id: '4f6f601a-fb08-4798-9822-d7f6bae60fb0', title: 'PATENT_TITLE_9375' },
            ]}
        />
    </Box>
)

export default App