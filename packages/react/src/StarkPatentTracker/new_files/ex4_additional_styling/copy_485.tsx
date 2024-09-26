import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e20d9ed5-0416-4dad-b62b-c3048a618be8', title: 'PATENT_TITLE_8970' },
                { id: 'b174a197-b576-44ea-9718-7edd738ec74c', title: 'PATENT_TITLE_3285' },
                { id: 'bdb6c0a9-0a00-4122-9f5f-237c4c07c7e8', title: 'PATENT_TITLE_9800' },
                { id: '7b444c07-8ce7-4432-a8b3-914cad154185', title: 'PATENT_TITLE_4267' },
                { id: 'b311feea-f733-4c17-adbe-18a93af3c091', title: 'PATENT_TITLE_2993' },
                { id: 'a4fa54c0-e80e-4366-a4b6-6c642a3e6c38', title: 'PATENT_TITLE_9744' },
                { id: '546a6cd9-569a-4bdc-bd04-3dcf32e42324', title: 'PATENT_TITLE_1604' },
            ]}
        />
    </Box>
)

export default App