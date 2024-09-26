import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '74dff7e1-4481-49ad-9a7d-ff41b8c5baa9', title: 'PATENT_TITLE_7832' },
                { id: '525cd29e-cbdb-4d54-a13e-aa4ae3e358d3', title: 'PATENT_TITLE_2045' },
                { id: '5953dfee-b264-4724-a668-b509a3f7e911', title: 'PATENT_TITLE_5266' },
                { id: '01c3fbfd-c369-419f-948e-291fd008f8da', title: 'PATENT_TITLE_9601' },
                { id: '1b7e29c9-a830-4245-8092-e810fe647ef0', title: 'PATENT_TITLE_3748' },
                { id: '481cbed5-2b95-46d2-b91c-601eabb347cd', title: 'PATENT_TITLE_6575' },
                { id: 'f47756e3-5780-4021-9b6f-99e148653f11', title: 'PATENT_TITLE_1150' },
                { id: '6b71f4e3-07f3-427c-83bb-5f2c87449747', title: 'PATENT_TITLE_8460' },
                { id: 'e653ebc8-a2c7-4ef5-afe7-015974f86adf', title: 'PATENT_TITLE_2377' },
            ]}
        />
    </Box>
)

export default App