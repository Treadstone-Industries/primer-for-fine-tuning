import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6d161eba-d972-492b-b947-a0fa553e054f', title: 'PATENT_TITLE_3700' },
                { id: 'c85c3246-b8e1-478d-b81e-48ea766d2730', title: 'PATENT_TITLE_2174' },
                { id: 'fd085e39-7b47-4be7-9522-fadd0009a233', title: 'PATENT_TITLE_2535' },
                { id: 'd65bb5a1-1320-49cc-9778-aeb1299b4b8b', title: 'PATENT_TITLE_5055' },
                { id: 'deda1708-071c-4bf4-917b-cdbde76d6b17', title: 'PATENT_TITLE_6414' },
                { id: 'f3f1d873-8a1b-4470-a8e7-1903a641684f', title: 'PATENT_TITLE_2250' },
            ]}
        />
    </Box>
)

export default App