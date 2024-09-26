import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ddc7c600-ae98-4b65-88b1-4ca6adfc5875', title: 'PATENT_TITLE_6201' },
                { id: 'fc01e877-dd83-4507-b84d-d5fcb1aee7a1', title: 'PATENT_TITLE_7286' },
                { id: '34735268-3df6-43f6-ae35-bcd690f0f574', title: 'PATENT_TITLE_9113' },
            ]}
        />
    </Box>
)

export default App