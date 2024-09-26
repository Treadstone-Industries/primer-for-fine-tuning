import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '08981b14-b769-4294-a639-1a4c11d8004d', title: 'PATENT_TITLE_1720' },
                { id: 'b857ae5f-f931-45da-a99a-f6df31578216', title: 'PATENT_TITLE_2472' },
                { id: '4b6176ad-7296-425e-81fd-468372a682b2', title: 'PATENT_TITLE_6295' },
                { id: 'e45ace23-7ce5-4413-b439-3e44ccf596e7', title: 'PATENT_TITLE_5305' },
            ]}
        />
    </Box>
)

export default App