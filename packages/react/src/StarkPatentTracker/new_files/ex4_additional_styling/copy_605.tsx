import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ccbb9b21-e6c4-4522-baae-4f9912166a49', title: 'PATENT_TITLE_1272' },
                { id: 'c9ba11e6-4565-42c9-9917-7dcda7c239e4', title: 'PATENT_TITLE_6207' },
                { id: '1197b874-051a-441e-bc23-aca6f6841583', title: 'PATENT_TITLE_4461' },
                { id: '812926b6-3b9a-43c9-8ad9-52d9021c8b57', title: 'PATENT_TITLE_5791' },
                { id: '7ceff5d3-e849-4cfe-adb3-0175186285bb', title: 'PATENT_TITLE_1362' },
            ]}
        />
    </Box>
)

export default App