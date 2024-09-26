import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c61eabb7-3f91-4400-98a8-10a29f070847', title: 'PATENT_TITLE_5444' },
                { id: '22bd1e2f-c88c-4f6e-9238-ac2808d85349', title: 'PATENT_TITLE_6281' },
                { id: '7a1641be-54a6-435e-85b9-e021a4d0c288', title: 'PATENT_TITLE_4824' },
                { id: '18501170-e911-4fd2-ac74-c970c90063a7', title: 'PATENT_TITLE_6638' },
                { id: 'ef978ef3-f61b-4943-a9e1-7a1e07037de6', title: 'PATENT_TITLE_4090' },
            ]}
        />
    </Box>
)

export default App