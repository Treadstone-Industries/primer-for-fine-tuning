import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8063ff09-51b6-4cee-a577-47c973cc4b49', title: 'PATENT_TITLE_3437' },
                { id: '305ada1e-1181-4fe3-9171-0528d08105d2', title: 'PATENT_TITLE_1555' },
                { id: 'efb7b569-bf39-4b8e-bf46-6908eafc42d2', title: 'PATENT_TITLE_4408' },
                { id: 'ce710f6b-f3ee-45c0-95b0-ed27be60f232', title: 'PATENT_TITLE_5767' },
            ]}
        />
    </Box>
)

export default App