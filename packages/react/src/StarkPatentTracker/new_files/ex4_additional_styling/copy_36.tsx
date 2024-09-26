import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '50939b33-e56e-43b1-8b1a-c43831cb8c48', title: 'PATENT_TITLE_5546' },
                { id: 'aed65bad-77ef-4f33-a73d-609de90bdd4b', title: 'PATENT_TITLE_5392' },
                { id: '90820faf-eea3-4ecd-ad12-59f8e0baf370', title: 'PATENT_TITLE_4443' },
                { id: '46f63c31-2ea3-4d64-a563-4d1e5ac57c60', title: 'PATENT_TITLE_7642' },
                { id: 'c1fe8464-95dc-42fd-b4a0-289d0cba4833', title: 'PATENT_TITLE_9802' },
            ]}
        />
    </Box>
)

export default App