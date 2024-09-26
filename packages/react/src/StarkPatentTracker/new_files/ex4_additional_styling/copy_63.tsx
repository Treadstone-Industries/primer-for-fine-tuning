import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b95bdb7b-1ccf-4219-b7c0-68324f8cf072', title: 'PATENT_TITLE_2523' },
                { id: '220b5b77-6a34-4fef-9a54-5be5d3f838a3', title: 'PATENT_TITLE_6347' },
                { id: '05b15b84-639a-4c99-b794-c9273a2c8c40', title: 'PATENT_TITLE_1642' },
                { id: 'cb6d3ecc-1f8c-4635-bb3b-b681dbc98ab2', title: 'PATENT_TITLE_2198' },
            ]}
        />
    </Box>
)

export default App