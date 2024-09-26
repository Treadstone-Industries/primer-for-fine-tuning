import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '56a3bc01-f67a-4960-b8b3-91211c7a6ec2', title: 'PATENT_TITLE_9768' },
                { id: '91da7fef-9244-4b34-afe3-8848628ceaae', title: 'PATENT_TITLE_7538' },
                { id: 'f95dee5b-eca4-49b0-98ff-db02e423804d', title: 'PATENT_TITLE_2259' },
                { id: 'e7c00606-3ede-4103-8f39-4577316d5ad4', title: 'PATENT_TITLE_9435' },
            ]}
        />
    </Box>
)

export default App