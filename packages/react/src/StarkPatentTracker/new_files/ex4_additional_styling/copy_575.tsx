import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fc6b6522-3e13-44f1-95be-e4403ad8d021', title: 'PATENT_TITLE_7456' },
                { id: '1ce40b0c-5aa8-4e43-a898-69cb37971c7d', title: 'PATENT_TITLE_1766' },
                { id: '9cec332a-30f1-49cf-874d-f3981e193b56', title: 'PATENT_TITLE_8005' },
                { id: '3b04a532-104c-405f-b612-ffaaa21edcd0', title: 'PATENT_TITLE_5437' },
                { id: '38c46164-8715-4d44-9d42-30e589f8b33d', title: 'PATENT_TITLE_6959' },
                { id: '1253de9b-d1ec-4351-89c8-2a9e12c92acb', title: 'PATENT_TITLE_5312' },
                { id: '9d130041-8201-42f8-b0f7-32e6d3fd2e0c', title: 'PATENT_TITLE_7621' },
                { id: '23903ff2-a75f-4fbe-b5fa-e6b104b66766', title: 'PATENT_TITLE_7612' },
            ]}
        />
    </Box>
)

export default App