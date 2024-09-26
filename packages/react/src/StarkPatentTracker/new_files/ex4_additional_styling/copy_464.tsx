import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8bba62e9-f80a-4cb2-a7ee-7a4f0de42c88', title: 'PATENT_TITLE_4043' },
                { id: '5375fb59-0651-4fb9-b481-972a226689ee', title: 'PATENT_TITLE_7085' },
                { id: '2becabf4-c994-43ed-abeb-037db7702d63', title: 'PATENT_TITLE_8397' },
                { id: 'd8fa99ce-90f2-4234-98c1-c8fb7edef930', title: 'PATENT_TITLE_4040' },
                { id: 'ee07f18d-0481-4d80-a8d2-aa825fbcf2e4', title: 'PATENT_TITLE_1805' },
            ]}
        />
    </Box>
)

export default App