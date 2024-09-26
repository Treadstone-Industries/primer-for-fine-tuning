import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8d4b5e99-7fbf-4103-be96-fae96ed0aa3f', title: 'PATENT_TITLE_4571' },
                { id: 'd9d3e22b-e31c-4548-acb0-e2649610caa7', title: 'PATENT_TITLE_4688' },
                { id: 'b975d26e-32a7-457e-91df-b9c2290c8d4e', title: 'PATENT_TITLE_5327' },
                { id: '8b54b52b-5dc5-4c7a-a562-515d403ce0c1', title: 'PATENT_TITLE_2180' },
                { id: '4692d5c2-7616-48d8-b6e1-f73a13cd0ec8', title: 'PATENT_TITLE_5172' },
                { id: 'f4257986-74a6-48fb-be62-b414477284f8', title: 'PATENT_TITLE_5092' },
                { id: '529a0259-ed57-4983-9075-25c2b4268d46', title: 'PATENT_TITLE_2945' },
                { id: 'ae0e761c-dc9e-4f88-b2d6-40c40441e628', title: 'PATENT_TITLE_8149' },
                { id: 'd47cb8ed-406e-4d5f-a82d-1cc351009806', title: 'PATENT_TITLE_5596' },
            ]}
        />
    </Box>
)

export default App