import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7909287c-727c-44f9-969f-4031222312c5', title: 'PATENT_TITLE_4448' },
                { id: '73232c53-1a99-4a94-bcad-0abff313a8ae', title: 'PATENT_TITLE_2060' },
                { id: '8dc62d0c-8af2-4c7a-85b2-b8c84737a4e9', title: 'PATENT_TITLE_7962' },
                { id: '61838335-947a-4263-8463-bd5095a1a596', title: 'PATENT_TITLE_6007' },
                { id: '11d1781a-8710-466a-8545-e1c1f251dbcb', title: 'PATENT_TITLE_5981' },
                { id: '2649007e-98b5-4e3b-928b-8717e8ea7bad', title: 'PATENT_TITLE_9745' },
                { id: '74b1ae36-9b7d-4d39-aa04-5d66d70b2cd0', title: 'PATENT_TITLE_1751' },
            ]}
        />
    </Box>
)

export default App