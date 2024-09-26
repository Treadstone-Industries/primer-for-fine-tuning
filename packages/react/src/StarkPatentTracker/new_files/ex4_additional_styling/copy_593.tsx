import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3fbde7a1-ae14-49ff-8869-245edbeadcb4', title: 'PATENT_TITLE_8329' },
                { id: '80a1cd80-8515-4674-9cb1-77de5b55a1f9', title: 'PATENT_TITLE_3775' },
                { id: 'b1f53069-9fa7-4f39-a355-5ea9531af129', title: 'PATENT_TITLE_7856' },
                { id: 'a19b21c4-4e34-4c7b-b556-037efb2b3027', title: 'PATENT_TITLE_7958' },
                { id: 'b4c2f37d-df19-4820-88d3-dc0684165363', title: 'PATENT_TITLE_4368' },
                { id: 'b6ee4317-89af-4305-ba0f-0e6e20223fea', title: 'PATENT_TITLE_4504' },
                { id: '849b7ba0-35f4-471a-b3b5-1686425b6ee7', title: 'PATENT_TITLE_8280' },
            ]}
        />
    </Box>
)

export default App