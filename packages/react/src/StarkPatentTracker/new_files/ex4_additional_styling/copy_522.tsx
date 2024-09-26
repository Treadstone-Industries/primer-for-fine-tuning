import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0aad0d53-82d9-4418-88ef-507215f09bd8', title: 'PATENT_TITLE_6023' },
                { id: '91e22f81-2575-4a07-95fc-fc75d1a27346', title: 'PATENT_TITLE_3700' },
                { id: 'd353b7ee-79ad-4104-98a6-ca25dc40a8a6', title: 'PATENT_TITLE_4899' },
                { id: '2569e616-3cc4-4eb9-b140-3714e80550d3', title: 'PATENT_TITLE_5789' },
                { id: 'cfd347f6-2edd-4dcd-95c7-781b7d5966d9', title: 'PATENT_TITLE_9725' },
            ]}
        />
    </Box>
)

export default App