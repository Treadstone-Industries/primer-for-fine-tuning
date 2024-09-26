import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '31d7dd1e-5d3b-42f3-9f3a-8b45982f5437', title: 'PATENT_TITLE_3321' },
                { id: 'f634782a-645a-4238-a156-9540422a2f8b', title: 'PATENT_TITLE_7469' },
                { id: '74558b98-1481-4196-8ed4-9bbd53e169ec', title: 'PATENT_TITLE_6026' },
                { id: 'ae6a7f0b-3f8a-4ee4-b6c1-f9dd7984f83c', title: 'PATENT_TITLE_9829' },
                { id: 'c04ab739-183d-434e-9bd3-d6a2ae39d87e', title: 'PATENT_TITLE_3770' },
                { id: '6b46a919-e1e7-4d76-9384-fb7bca1da23c', title: 'PATENT_TITLE_9684' },
                { id: '492bebfa-01f5-4134-bca2-e2d0d79e997a', title: 'PATENT_TITLE_5596' },
                { id: 'd5d06e91-aa32-4696-9455-eec3941a0145', title: 'PATENT_TITLE_5287' },
                { id: '6d36fafd-8fac-4823-ac28-aff569655a4b', title: 'PATENT_TITLE_5933' },
                { id: '2519d4cb-4a07-470b-ad1f-576e853f90f2', title: 'PATENT_TITLE_8616' },
            ]}
        />
    </Box>
)

export default App