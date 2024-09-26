import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f693124f-c1a5-45d8-a431-770ceb3029e3', title: 'PATENT_TITLE_6575' },
                { id: '6131c32a-5a7b-45e1-8044-bebb0865403e', title: 'PATENT_TITLE_4958' },
                { id: '6dadcf31-4597-4f24-9eac-e1d751bf75bf', title: 'PATENT_TITLE_2698' },
                { id: 'ee5cc31d-3361-4d3e-8f11-e5e3ac4fec4c', title: 'PATENT_TITLE_2451' },
                { id: '86dc7bac-7923-4446-968e-abf2d8bda0ac', title: 'PATENT_TITLE_7733' },
                { id: 'b6269428-8a7f-42a1-ba45-27176d9f1ad5', title: 'PATENT_TITLE_5789' },
                { id: '99d4a3e2-6586-472a-8c4a-f733991828e6', title: 'PATENT_TITLE_2036' },
                { id: 'e0d0eccd-0ddd-4b62-9555-f10167540fe9', title: 'PATENT_TITLE_6626' },
                { id: '5305e043-f063-43ed-943d-276b732aae7d', title: 'PATENT_TITLE_3235' },
            ]}
        />
    </Box>
)

export default App