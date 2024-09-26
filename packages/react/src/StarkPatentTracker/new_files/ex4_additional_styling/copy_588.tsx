import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6894d73b-67e2-4626-848d-ae20bcd7825e', title: 'PATENT_TITLE_5854' },
                { id: 'a974ba27-051e-48ff-9453-431eaf17e5d2', title: 'PATENT_TITLE_3754' },
                { id: '78345daa-d90c-45b2-ab2b-5259fd777470', title: 'PATENT_TITLE_4702' },
                { id: 'ecfd2bdc-1cf1-4aac-a624-cfbb9d29e233', title: 'PATENT_TITLE_7563' },
            ]}
        />
    </Box>
)

export default App