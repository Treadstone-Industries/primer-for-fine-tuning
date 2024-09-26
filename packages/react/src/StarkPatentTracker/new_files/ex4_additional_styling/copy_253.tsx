import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7482d179-5a42-4165-af64-5b38a52b2c3d', title: 'PATENT_TITLE_5781' },
                { id: '8bfb327b-c1a6-4a45-b927-fb8bb883e523', title: 'PATENT_TITLE_4388' },
                { id: '4ab49826-e6d1-487a-bfa1-3a890e1566fd', title: 'PATENT_TITLE_3570' },
                { id: '48c6f867-8ca7-46de-aa04-f5e2fc4674e4', title: 'PATENT_TITLE_1272' },
                { id: '2aad2b49-3db4-4f1c-97b5-e24254f1b089', title: 'PATENT_TITLE_5289' },
                { id: '58443142-e4a9-487c-9d4d-2ec49f574267', title: 'PATENT_TITLE_7583' },
            ]}
        />
    </Box>
)

export default App