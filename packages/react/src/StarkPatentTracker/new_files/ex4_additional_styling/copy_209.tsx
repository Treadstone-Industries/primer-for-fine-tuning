import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b5d5723e-fc7c-41a5-bc94-68cc2fafd0b1', title: 'PATENT_TITLE_1265' },
                { id: 'f63ca363-7f7d-45b0-a11b-53a85d544308', title: 'PATENT_TITLE_2962' },
                { id: 'f2694d76-b184-40b3-8003-e4654e778541', title: 'PATENT_TITLE_5688' },
                { id: 'f86c5c2f-f171-4722-8c85-59494ddf4eb7', title: 'PATENT_TITLE_8816' },
                { id: '36a8d7b0-8a3b-4405-9ed9-7c72dee7e8f9', title: 'PATENT_TITLE_7590' },
                { id: 'd3c5becf-b60e-4e51-a53d-0035a538c0e1', title: 'PATENT_TITLE_3603' },
                { id: '79eca862-ab04-438f-aca2-51afb4c98edb', title: 'PATENT_TITLE_7767' },
                { id: '73ddf5a3-c9be-48d3-8922-8be37d0a0faf', title: 'PATENT_TITLE_6185' },
                { id: 'cbbeb6b3-f343-445a-a7c4-98a376a571f1', title: 'PATENT_TITLE_5536' },
                { id: '8ab796af-a327-4ac3-ba41-051faa0bd97f', title: 'PATENT_TITLE_8155' },
            ]}
        />
    </Box>
)

export default App