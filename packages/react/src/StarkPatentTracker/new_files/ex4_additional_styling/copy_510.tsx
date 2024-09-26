import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '55822844-a135-49b1-97e9-61872e110d9b', title: 'PATENT_TITLE_1302' },
                { id: '15d098a8-9e9e-4dd0-91f9-71bf6a6dc937', title: 'PATENT_TITLE_8434' },
            ]}
        />
    </Box>
)

export default App