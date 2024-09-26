import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '68b3fcc1-7177-4366-88bb-fcf0265c03f1', title: 'PATENT_TITLE_2624' },
                { id: '92fda640-52cd-4377-a6bf-4f02a64ab906', title: 'PATENT_TITLE_2625' },
            ]}
        />
    </Box>
)

export default App