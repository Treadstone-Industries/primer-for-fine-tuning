import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a4c6e2b8-268f-4655-8bee-a97230ea72d3', title: 'PATENT_TITLE_6906' },
                { id: '2f1b091c-7d1d-4751-8c7e-8818bb9eb7aa', title: 'PATENT_TITLE_4701' },
                { id: '1f246954-947d-45e4-9baa-d2598c8b2d03', title: 'PATENT_TITLE_8752' },
                { id: '31a54af8-4384-4655-b0dc-426deca20dfb', title: 'PATENT_TITLE_4307' },
            ]}
        />
    </Box>
)

export default App