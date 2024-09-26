import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd7205a40-d9d8-4c0d-a67f-902520a21089', title: 'PATENT_TITLE_7776' },
                { id: 'b623af26-92e7-48ee-a29b-f268ed913bd3', title: 'PATENT_TITLE_4183' },
                { id: '0a3d03ab-4ec8-42a2-a76b-8688f63aac7e', title: 'PATENT_TITLE_7737' },
                { id: '21a017b9-2881-4fd5-8137-c06fd2343964', title: 'PATENT_TITLE_4926' },
                { id: '33c73dde-b872-45f7-b1b1-f54ce51ef0b5', title: 'PATENT_TITLE_8363' },
            ]}
        />
    </Box>
)

export default App