import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5e7be9a0-3dec-4953-8c57-e6b60b95e4a8', title: 'PATENT_TITLE_4193' },
                { id: 'ab746f6c-7518-4ffe-a965-3e9a319b833f', title: 'PATENT_TITLE_2887' },
                { id: '65286955-f67b-455e-a9da-bc653cfd62d1', title: 'PATENT_TITLE_6045' },
                { id: '7afd5a7f-b7e8-40d3-9d77-6b26172ca268', title: 'PATENT_TITLE_4851' },
                { id: '38a5aa20-06e6-4fbb-8a3a-ea6d7543450f', title: 'PATENT_TITLE_2816' },
            ]}
        />
    </Box>
)

export default App