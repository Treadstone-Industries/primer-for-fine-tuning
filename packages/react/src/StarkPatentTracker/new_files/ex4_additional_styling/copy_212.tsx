import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1ab483fb-fe02-4dae-972c-70353812696f', title: 'PATENT_TITLE_2761' },
                { id: '19d8df1b-d116-4147-ab59-ff999383d031', title: 'PATENT_TITLE_4420' },
                { id: '30f2f5af-3ea7-48b3-baec-eb146013b8e7', title: 'PATENT_TITLE_7942' },
                { id: 'cd041dab-8347-4db2-a926-47b28a1a04b2', title: 'PATENT_TITLE_5095' },
                { id: '7e4de5d4-3a64-4707-bf69-2f5684ee14ed', title: 'PATENT_TITLE_4210' },
                { id: 'f16de162-3da1-45a6-83dd-a29154d8db38', title: 'PATENT_TITLE_2749' },
                { id: 'b4c001ef-6722-4db2-b92b-a86a5df488a9', title: 'PATENT_TITLE_2197' },
                { id: '7127a330-90a8-4728-b775-06c41608badf', title: 'PATENT_TITLE_5628' },
                { id: 'eda3c469-cd56-40c5-a5f7-f3a5f5f4cb13', title: 'PATENT_TITLE_7717' },
            ]}
        />
    </Box>
)

export default App