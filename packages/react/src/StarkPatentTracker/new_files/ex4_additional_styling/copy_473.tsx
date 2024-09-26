import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e8bba8c8-b29e-405b-8150-983568688bd2', title: 'PATENT_TITLE_1817' },
                { id: '1e869e77-4627-46e3-b0e9-d526738d6b3c', title: 'PATENT_TITLE_9171' },
                { id: '0049b4dc-6441-4049-bcb1-9b20e5e69b2f', title: 'PATENT_TITLE_8028' },
                { id: 'b81e6770-c6bb-41b9-8f17-3c2f58cd1fdc', title: 'PATENT_TITLE_3779' },
                { id: '2c803317-6d76-4f81-a4f2-71c58b167045', title: 'PATENT_TITLE_7490' },
                { id: '187e0b76-109f-439d-9c7f-0843ee63f488', title: 'PATENT_TITLE_9816' },
                { id: '522a5313-e495-47d4-b1f8-4180899ba84b', title: 'PATENT_TITLE_2946' },
                { id: '3740f20c-28e6-4986-a186-565975b82107', title: 'PATENT_TITLE_5340' },
            ]}
        />
    </Box>
)

export default App