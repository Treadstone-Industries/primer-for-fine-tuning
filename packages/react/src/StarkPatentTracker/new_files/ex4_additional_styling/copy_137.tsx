import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7c9b1491-d3f8-445c-80c8-011efffdb8b1', title: 'PATENT_TITLE_1965' },
                { id: '31c04c3e-83a2-409f-b2d2-f09a0787c255', title: 'PATENT_TITLE_1884' },
                { id: '4126aff9-1ce9-46c9-ba33-21458953d334', title: 'PATENT_TITLE_3795' },
                { id: 'e9984626-fed7-4c5e-aebf-e84059e3c5ac', title: 'PATENT_TITLE_3719' },
                { id: 'b0dc7408-e5bd-4b0d-93d3-826026e41e40', title: 'PATENT_TITLE_8757' },
                { id: 'f5f6a385-f4b0-4a4a-bacb-b771ddfbf568', title: 'PATENT_TITLE_1154' },
                { id: '5d1ef13b-aedc-4acc-9738-b969c2ba63a4', title: 'PATENT_TITLE_4947' },
                { id: 'a5d00399-246c-4c44-ab5b-4fe90fb3b0db', title: 'PATENT_TITLE_9720' },
            ]}
        />
    </Box>
)

export default App