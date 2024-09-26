import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e1ec0692-c800-42f8-8a60-48c8cc20038b', title: 'PATENT_TITLE_7555' },
                { id: 'dc331539-2da9-45aa-babb-35fa7d97ad92', title: 'PATENT_TITLE_5801' },
                { id: '36caef8d-76b5-4221-8b6e-6de50d60ddc7', title: 'PATENT_TITLE_7680' },
            ]}
        />
    </Box>
)

export default App