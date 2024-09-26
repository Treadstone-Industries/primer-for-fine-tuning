import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e2ec6d6e-34a7-402b-a2ee-d3ee1c3adb8a', title: 'PATENT_TITLE_6647' },
                { id: '3b941585-db2c-43ae-9c6a-dee489127b35', title: 'PATENT_TITLE_4795' },
                { id: '2df66591-3f33-477f-afc3-645d0f9a68ac', title: 'PATENT_TITLE_6362' },
                { id: '932cd3ce-97b5-4c93-99e4-cb13fc9304f8', title: 'PATENT_TITLE_9505' },
                { id: 'bea427dc-06a7-4b16-b162-d960b1824257', title: 'PATENT_TITLE_6604' },
                { id: '542bcd1a-f565-4e88-8f87-5c6bf27128e0', title: 'PATENT_TITLE_5559' },
            ]}
        />
    </Box>
)

export default App