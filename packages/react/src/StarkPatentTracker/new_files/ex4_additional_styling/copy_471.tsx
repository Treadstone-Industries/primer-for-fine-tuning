import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '75f07c2f-06dd-4a28-8e0e-4530aa5e47e3', title: 'PATENT_TITLE_7345' },
                { id: '9d184c0e-df47-4d79-939a-c0ec447c85c7', title: 'PATENT_TITLE_3984' },
                { id: 'dbd96b6b-d80c-4e52-8785-b3528c5ec800', title: 'PATENT_TITLE_7730' },
                { id: 'c3aba22e-296e-40e3-8838-29579d092f91', title: 'PATENT_TITLE_8804' },
                { id: 'fd71e33c-0131-4a0b-8cd7-866a1f15dc62', title: 'PATENT_TITLE_6694' },
            ]}
        />
    </Box>
)

export default App