import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd6969af0-26bb-4e8d-921b-0231c7090b45', title: 'PATENT_TITLE_8146' },
                { id: '43f8c4c8-2d71-49ce-a2ca-2b6bb5c3622e', title: 'PATENT_TITLE_8155' },
                { id: '78d3715c-7e9f-4815-817c-26bd9d91d0e2', title: 'PATENT_TITLE_6349' },
                { id: '5f8e901f-5472-4f9e-9258-4fe5a048264c', title: 'PATENT_TITLE_6576' },
                { id: '72ae6fd2-b86a-4ffe-9e36-379f98c86b67', title: 'PATENT_TITLE_9016' },
                { id: 'a01793af-7e55-4e86-b5e1-6135140ff89d', title: 'PATENT_TITLE_8714' },
                { id: '59bc6a59-7183-4ffb-815b-e14f4d7c8a75', title: 'PATENT_TITLE_1895' },
                { id: '2c82ee8a-db56-4aff-a0fb-9cba82e0135d', title: 'PATENT_TITLE_2514' },
                { id: 'a4ffab19-bcdd-4181-a379-7ff648b0d58f', title: 'PATENT_TITLE_6290' },
                { id: 'b2f87253-5609-4f9c-9b4f-3aeafed89db7', title: 'PATENT_TITLE_3238' },
            ]}
        />
    </Box>
)

export default App