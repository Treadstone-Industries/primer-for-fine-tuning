import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bdaccf2f-ce58-448a-a87a-cac981815c8f', title: 'PATENT_TITLE_7703' },
                { id: '620be66e-4c94-4c83-92e1-324e9a6bd032', title: 'PATENT_TITLE_9878' },
                { id: 'c1a70301-f103-481f-ba84-e133a8d590d7', title: 'PATENT_TITLE_2186' },
            ]}
        />
    </Box>
)

export default App