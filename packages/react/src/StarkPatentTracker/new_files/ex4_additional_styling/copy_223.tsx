import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '461cd664-9f61-4ab0-bc16-423dc079f86c', title: 'PATENT_TITLE_5953' },
                { id: '0016a843-a319-4105-9896-779ecf9ec3c8', title: 'PATENT_TITLE_8829' },
                { id: '961f5789-5aee-43bc-ac9c-7c9f97164b6e', title: 'PATENT_TITLE_4188' },
                { id: 'b7c60c02-3dab-4d61-9632-a5d2e5468234', title: 'PATENT_TITLE_1553' },
                { id: '3e935794-69da-488a-8f13-bf1781844b9f', title: 'PATENT_TITLE_9927' },
                { id: '556e904e-3a56-4b56-abe1-6f190fb4f1f2', title: 'PATENT_TITLE_6184' },
            ]}
        />
    </Box>
)

export default App