import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6423cb60-5021-4c1e-afbd-c3c27f74ab9e', title: 'PATENT_TITLE_1712' },
                { id: 'bfbb90dd-54bb-4503-aa96-c49f33a6dbef', title: 'PATENT_TITLE_4587' },
                { id: 'b952ee08-bce0-44f3-9b10-57fb10f96956', title: 'PATENT_TITLE_6408' },
                { id: '31fd39a9-8661-4ea3-915f-139c3170c2ff', title: 'PATENT_TITLE_6682' },
                { id: '29bad985-2a4c-4fc5-b008-27ba3847436e', title: 'PATENT_TITLE_8864' },
                { id: 'f090e711-21f4-4049-b02b-ee3ab3fab271', title: 'PATENT_TITLE_6457' },
            ]}
        />
    </Box>
)

export default App