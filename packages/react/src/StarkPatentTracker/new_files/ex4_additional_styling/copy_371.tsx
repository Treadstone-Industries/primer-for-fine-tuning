import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd67eb632-e7b8-4a8c-bc89-f83af6bd149e', title: 'PATENT_TITLE_6204' },
                { id: '4ac5fe45-d73d-4812-835c-736aa91d9aac', title: 'PATENT_TITLE_3587' },
                { id: 'f9e6489a-4e6c-4686-94b8-f939d66a0e82', title: 'PATENT_TITLE_4992' },
                { id: '82525cca-93f2-48ae-8d50-5d5364bdc476', title: 'PATENT_TITLE_7886' },
                { id: 'fe3b1c79-cab9-4cc2-9cfd-abb5f91c0a12', title: 'PATENT_TITLE_3994' },
                { id: '187d75a9-fd2e-4970-a9fe-b0750bf017b8', title: 'PATENT_TITLE_3430' },
                { id: '02725f09-75af-4705-87fc-52d0d3524d36', title: 'PATENT_TITLE_2517' },
            ]}
        />
    </Box>
)

export default App