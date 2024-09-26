import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4c7a4b9c-b43d-4173-a7af-ef24f16bfc48', title: 'PATENT_TITLE_7699' },
                { id: 'a9279adf-8b80-40cd-a82e-b7e59b7fa932', title: 'PATENT_TITLE_2573' },
                { id: '882f6da4-0569-40b0-b2b1-0124d895dcbc', title: 'PATENT_TITLE_5381' },
            ]}
        />
    </Box>
)

export default App