import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5c6712f7-5694-4fac-b5e8-bd65b7219606', title: 'PATENT_TITLE_6746' },
                { id: '40ad34f5-4fa2-4c39-ab7b-bb468e7c3a9c', title: 'PATENT_TITLE_2475' },
                { id: 'ad265449-5e8b-4ea7-b916-0215f8377470', title: 'PATENT_TITLE_4073' },
                { id: '1de49eb0-f838-45c1-9b7c-6d81a287a81c', title: 'PATENT_TITLE_8905' },
                { id: '299ef54d-f92f-4711-a9fa-df6c4f23a0aa', title: 'PATENT_TITLE_2992' },
                { id: 'bc69109f-200b-467f-9fe6-9e77402bbeeb', title: 'PATENT_TITLE_3346' },
            ]}
        />
    </Box>
)

export default App