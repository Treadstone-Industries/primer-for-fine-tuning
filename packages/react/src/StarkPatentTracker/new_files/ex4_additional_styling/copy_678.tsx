import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5e27bd71-84b0-4fa1-98b9-c7f7c565bd22', title: 'PATENT_TITLE_4858' },
                { id: '013b82a3-32b3-4fc8-92d0-09a6f784917c', title: 'PATENT_TITLE_8496' },
                { id: 'bfe992dd-ce43-4c13-93fb-b7b95d4d2d22', title: 'PATENT_TITLE_8931' },
                { id: 'e97fea4b-aba2-4dbd-959c-a70dc1389a6c', title: 'PATENT_TITLE_5684' },
                { id: '1a8399b5-e30c-437c-a683-492c8f173876', title: 'PATENT_TITLE_6056' },
                { id: '1d25bf17-481c-4f2c-8b06-3ac44722be5c', title: 'PATENT_TITLE_2698' },
            ]}
        />
    </Box>
)

export default App