import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '58c00daa-6ae4-4a31-abc4-e44617baeb34', title: 'PATENT_TITLE_9255' },
                { id: '0913d750-1edb-4c94-9197-53da3ae90ede', title: 'PATENT_TITLE_2482' },
                { id: '9446f43a-471b-4aa5-8ee7-e84d361cdfb8', title: 'PATENT_TITLE_3745' },
                { id: '64256b66-0cf0-4b33-ade0-07651c32d106', title: 'PATENT_TITLE_8912' },
                { id: '8ad155b3-54b9-41e5-aab0-244912d2e778', title: 'PATENT_TITLE_6592' },
                { id: '9e956de4-6fae-49ea-9d91-db4c7aa743c4', title: 'PATENT_TITLE_2498' },
            ]}
        />
    </Box>
)

export default App