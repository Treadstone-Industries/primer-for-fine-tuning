import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4a5f9dc1-e4ba-4562-892a-07b18bc20433', title: 'PATENT_TITLE_2786' },
                { id: 'ef7f7805-e515-4165-973b-a33017018550', title: 'PATENT_TITLE_5575' },
            ]}
        />
    </Box>
)

export default App