import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '60e987b1-5f95-4a81-8a22-7f01c4c3f762', title: 'PATENT_TITLE_9444' },
                { id: 'b289dd13-f8a1-4ff1-8877-da3223ce1552', title: 'PATENT_TITLE_4157' },
                { id: 'bf6a97d0-8ec8-4445-b9a2-89243c82c9f9', title: 'PATENT_TITLE_9502' },
                { id: '478db9cc-f754-46ae-b927-a8788bd1bdfc', title: 'PATENT_TITLE_2947' },
                { id: '73370796-e7cd-42e8-9003-ca1ae4698b6b', title: 'PATENT_TITLE_6424' },
                { id: 'a3e9531c-fc19-4041-a304-19fd01209b03', title: 'PATENT_TITLE_3045' },
                { id: 'd5543b6e-8faf-434a-82cb-93dc5c780cb7', title: 'PATENT_TITLE_8251' },
                { id: 'f304d537-d5d3-4b71-88e4-cfd6cf8a23c0', title: 'PATENT_TITLE_6012' },
            ]}
        />
    </Box>
)

export default App