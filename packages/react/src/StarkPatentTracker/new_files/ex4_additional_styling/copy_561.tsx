import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ee53fa9c-ce59-4dbe-b48f-5dd2899acd5e', title: 'PATENT_TITLE_7207' },
                { id: '03d5abbe-a11f-4404-9d77-85bd47c1b679', title: 'PATENT_TITLE_4613' },
                { id: 'b9d82998-ba03-4033-867a-103b68dafdc2', title: 'PATENT_TITLE_8616' },
                { id: 'caf1df5e-941f-487c-83e0-7746be403df8', title: 'PATENT_TITLE_3667' },
                { id: '4f6546c4-4b80-43df-ba52-f70067d1383c', title: 'PATENT_TITLE_3632' },
                { id: '484a173a-8a85-453b-9912-1bdafaf901fd', title: 'PATENT_TITLE_1898' },
            ]}
        />
    </Box>
)

export default App