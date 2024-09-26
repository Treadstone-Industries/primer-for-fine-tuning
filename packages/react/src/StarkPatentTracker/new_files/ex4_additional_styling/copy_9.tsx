import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '07f3bae4-601f-4f7a-87f2-88f65a8e0665', title: 'PATENT_TITLE_3442' },
                { id: 'd7ae2bc4-f553-48aa-96b7-4b30c7d6e3b1', title: 'PATENT_TITLE_1821' },
                { id: 'c108a14f-7902-4aa2-9424-52f58ede52d1', title: 'PATENT_TITLE_4423' },
                { id: '8e4e2ce3-78a7-44ee-b6d7-90886bff15e9', title: 'PATENT_TITLE_4123' },
                { id: 'c51f14aa-b44e-4654-8da3-a96197e7c3fc', title: 'PATENT_TITLE_5397' },
                { id: '1927ad12-3bf6-4d22-82ba-e0e4f131a20f', title: 'PATENT_TITLE_8789' },
                { id: '664cc4ff-f0d4-4e58-b6c7-5ca4312f33be', title: 'PATENT_TITLE_6140' },
                { id: 'b9be7e4b-8242-4188-bb6a-22a4fcf6f706', title: 'PATENT_TITLE_7384' },
            ]}
        />
    </Box>
)

export default App