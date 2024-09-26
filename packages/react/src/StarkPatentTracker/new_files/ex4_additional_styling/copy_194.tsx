import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '704cb391-4487-445d-82ea-06f1a3faec53', title: 'PATENT_TITLE_6024' },
                { id: '6b39a9f7-48ed-42e6-94f4-0a242061ed24', title: 'PATENT_TITLE_2885' },
                { id: 'eae19d1e-02d7-4d31-a1af-edbeb348afcc', title: 'PATENT_TITLE_2166' },
            ]}
        />
    </Box>
)

export default App