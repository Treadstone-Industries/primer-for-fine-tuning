import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '934a543c-cd60-4161-b19d-82eea3392d8e', title: 'PATENT_TITLE_4409' },
                { id: '885ed4fc-554a-4b8f-9208-c20475e7df6c', title: 'PATENT_TITLE_1989' },
                { id: '068922a3-ebdc-497e-8bb4-18ecd35dbfea', title: 'PATENT_TITLE_1893' },
                { id: '98ea0f99-1a43-415a-8790-b26e2ed20eca', title: 'PATENT_TITLE_7446' },
            ]}
        />
    </Box>
)

export default App