import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'aceebcc9-05b1-4cd4-a03c-cd0f7fc827b6', title: 'PATENT_TITLE_9075' },
                { id: '99a2a194-68ad-4f59-b197-20b0578b8f0a', title: 'PATENT_TITLE_5438' },
                { id: '49aaee49-0ffb-4ace-a434-7fd826ddec6c', title: 'PATENT_TITLE_2639' },
                { id: '8020a698-088b-414c-8a84-950de699e433', title: 'PATENT_TITLE_5191' },
                { id: '00df121b-2c05-438e-938e-f3336df6a9b7', title: 'PATENT_TITLE_6770' },
            ]}
        />
    </Box>
)

export default App