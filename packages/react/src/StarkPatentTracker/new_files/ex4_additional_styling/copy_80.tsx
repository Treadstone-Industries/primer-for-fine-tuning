import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fce208b7-d0ef-4bc4-a882-5417c3d1d7a7', title: 'PATENT_TITLE_7584' },
                { id: 'dd82bdbd-bc61-4654-b26f-e3b2b01c57be', title: 'PATENT_TITLE_2037' },
                { id: '1a3e2f6d-8df3-4329-8010-702b6d89c880', title: 'PATENT_TITLE_1439' },
            ]}
        />
    </Box>
)

export default App