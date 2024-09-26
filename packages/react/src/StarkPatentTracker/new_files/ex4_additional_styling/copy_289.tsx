import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '464b09bc-d1cd-4e14-b229-bc8a0370e48f', title: 'PATENT_TITLE_8587' },
                { id: '8324309e-480d-4081-ac54-3cf4b861c3f8', title: 'PATENT_TITLE_2209' },
                { id: '2256725c-ee40-4a14-850b-38876f5ee409', title: 'PATENT_TITLE_4454' },
                { id: '448e0c27-c271-4420-9a15-6b434a24fd26', title: 'PATENT_TITLE_7441' },
                { id: '6d6cfa37-7b90-40fa-8b33-a1cf9de76553', title: 'PATENT_TITLE_2759' },
                { id: '4126ce86-eb98-45ac-a48b-14a3b7cdfda2', title: 'PATENT_TITLE_7442' },
                { id: 'a6a39f4d-5d77-4c2d-bf64-c2f3bc06332a', title: 'PATENT_TITLE_3467' },
                { id: 'f691cdfa-0712-4c41-aaab-8e6d4f821f02', title: 'PATENT_TITLE_6349' },
            ]}
        />
    </Box>
)

export default App