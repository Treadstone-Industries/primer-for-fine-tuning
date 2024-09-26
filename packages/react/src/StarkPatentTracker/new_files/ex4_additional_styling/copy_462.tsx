import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '55726bc0-4d23-4166-aa00-be097fb356b4', title: 'PATENT_TITLE_6590' },
                { id: '65b76756-8584-47a8-b441-f03cac474122', title: 'PATENT_TITLE_7159' },
                { id: 'd6487c85-9291-4083-bf44-1d197c6ad299', title: 'PATENT_TITLE_6135' },
                { id: '9f225b1b-00af-46b1-aeae-863575efbe47', title: 'PATENT_TITLE_9851' },
                { id: 'bd98a3e4-d580-4e0e-b9d9-ddf3c9f05554', title: 'PATENT_TITLE_4276' },
                { id: '47137cbc-40eb-4c75-96e5-4e6fb78d3223', title: 'PATENT_TITLE_7856' },
                { id: '39fc31e5-a84c-44aa-8812-d9046e7e1d73', title: 'PATENT_TITLE_3007' },
                { id: 'f18bbee5-6633-4822-bfd6-17a7572de764', title: 'PATENT_TITLE_2519' },
                { id: 'ac8b790e-66c0-4bba-8d6b-7e8c01fc1e6d', title: 'PATENT_TITLE_8996' },
            ]}
        />
    </Box>
)

export default App