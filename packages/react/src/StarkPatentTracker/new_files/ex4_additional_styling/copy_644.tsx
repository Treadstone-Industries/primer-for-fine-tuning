import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ee7e24aa-6802-4e7b-988c-1c51cd98efda', title: 'PATENT_TITLE_3963' },
                { id: 'abdf4a22-6898-4289-be01-c2378fc275ef', title: 'PATENT_TITLE_1897' },
            ]}
        />
    </Box>
)

export default App