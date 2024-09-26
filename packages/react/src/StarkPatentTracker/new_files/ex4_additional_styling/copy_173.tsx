import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e70e9c1e-e2c3-4fae-8a7c-c152a1655a02', title: 'PATENT_TITLE_5457' },
                { id: '83e02a10-2c0d-46d8-a97e-031e49077f58', title: 'PATENT_TITLE_5674' },
                { id: '7cc364f0-786b-47bd-8b54-16c2f838ea72', title: 'PATENT_TITLE_9454' },
                { id: 'bfd200f0-e219-4c7f-852f-1449179cdbac', title: 'PATENT_TITLE_3473' },
                { id: '350bec6f-b737-47f4-a4d4-eb03a8c275cd', title: 'PATENT_TITLE_6377' },
                { id: '862d51a8-51f6-4861-964e-4182f78c18bc', title: 'PATENT_TITLE_1561' },
                { id: '1afce193-737f-4da6-bb58-82a35d92c4e5', title: 'PATENT_TITLE_7504' },
                { id: '8ef68fcb-c1d2-4771-b54c-e2f67b3291de', title: 'PATENT_TITLE_1634' },
                { id: 'c0e374e8-603f-4081-bbe7-93ccba36c607', title: 'PATENT_TITLE_4797' },
            ]}
        />
    </Box>
)

export default App