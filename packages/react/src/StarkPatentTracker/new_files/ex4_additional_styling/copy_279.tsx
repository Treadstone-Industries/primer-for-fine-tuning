import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cb71b964-8a8a-4412-aaf3-592b1e9e17ea', title: 'PATENT_TITLE_5893' },
                { id: '62cb6086-6d3c-4886-b17b-fb1ed97d7757', title: 'PATENT_TITLE_2408' },
                { id: 'eacdc9ef-c950-4864-8583-6e198b8c8d64', title: 'PATENT_TITLE_2424' },
                { id: 'fd67f038-f6af-489b-b3fe-f048a97290d3', title: 'PATENT_TITLE_7802' },
                { id: '4c6ee3cc-18d1-4951-9519-4b02a0a332da', title: 'PATENT_TITLE_3967' },
                { id: '139343b2-da73-452a-a79e-6e82be5d85dd', title: 'PATENT_TITLE_4687' },
                { id: 'fca99af9-0eba-4dc0-9aa8-8ff8277e7e0c', title: 'PATENT_TITLE_2888' },
                { id: '8114ff66-6cff-4718-b590-0d8570cbf2c0', title: 'PATENT_TITLE_5983' },
                { id: '0f6e5c9a-55cf-4fc3-989c-eefe38761c23', title: 'PATENT_TITLE_8781' },
                { id: 'b68cddee-9342-4e27-966d-2d3ed1796ee3', title: 'PATENT_TITLE_1482' },
            ]}
        />
    </Box>
)

export default App