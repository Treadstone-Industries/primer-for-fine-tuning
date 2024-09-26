import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '37ab769a-7805-452e-a2bc-f13e2aefe0fe', title: 'PATENT_TITLE_3327' },
                { id: 'c21663f4-cd70-4348-a7ef-e2ef2df958d2', title: 'PATENT_TITLE_6948' },
                { id: 'd863914f-ae4f-4268-93ed-de84d2b7cbeb', title: 'PATENT_TITLE_7202' },
                { id: '24556f04-0733-4dc8-8ac4-a4c569769def', title: 'PATENT_TITLE_2226' },
                { id: 'dd6b4a1a-2f39-4d3c-979d-96ac81e9d98b', title: 'PATENT_TITLE_2736' },
                { id: 'b2a27ad7-92dd-46de-856f-0d19f6883a61', title: 'PATENT_TITLE_4805' },
                { id: 'cee07f65-6cf2-4983-927d-42e6783e27c2', title: 'PATENT_TITLE_7088' },
            ]}
        />
    </Box>
)

export default App