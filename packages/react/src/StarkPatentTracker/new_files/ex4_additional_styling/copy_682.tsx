import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0ae3991b-9933-4985-a494-f18472904c75', title: 'PATENT_TITLE_4330' },
                { id: 'c979bb41-d228-47ed-899f-f88de8857352', title: 'PATENT_TITLE_2630' },
                { id: '01f69fa2-96a8-49b8-848a-30a30e03ca8e', title: 'PATENT_TITLE_7582' },
            ]}
        />
    </Box>
)

export default App