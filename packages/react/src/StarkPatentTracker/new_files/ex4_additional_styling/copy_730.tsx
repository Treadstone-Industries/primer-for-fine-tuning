import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '98c0b969-c569-4148-8cef-69f52cbfe27e', title: 'PATENT_TITLE_6005' },
                { id: 'e42597fb-e4e4-4d55-a28c-dde9579012d2', title: 'PATENT_TITLE_4863' },
                { id: '19fd8a0a-5d25-404b-a67c-c887753c5077', title: 'PATENT_TITLE_2274' },
                { id: 'c81809f5-f04a-4fcc-af4d-7cefae58a728', title: 'PATENT_TITLE_8177' },
                { id: '047d9bdd-fc18-4f8a-89b1-14733bee13f0', title: 'PATENT_TITLE_4391' },
                { id: '9ea109b6-76a8-4a42-a069-5c8d1f97b204', title: 'PATENT_TITLE_9406' },
                { id: '6071e1d5-1d03-4bec-8ff8-59a8a5a3bff9', title: 'PATENT_TITLE_7547' },
                { id: 'f1600e2a-17da-4b23-bd3b-8768a022094a', title: 'PATENT_TITLE_9953' },
                { id: 'dcd304c5-5b81-406c-b6fc-1591816971b1', title: 'PATENT_TITLE_5542' },
                { id: '54c25954-6825-49ab-bd3b-04a93bb7420e', title: 'PATENT_TITLE_6659' },
            ]}
        />
    </Box>
)

export default App