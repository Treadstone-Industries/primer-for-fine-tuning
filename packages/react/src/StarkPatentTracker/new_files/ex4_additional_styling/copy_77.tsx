import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9b880408-7cb4-472e-b614-ed2e918b85a6', title: 'PATENT_TITLE_9159' },
                { id: '24e5f7c7-959b-497d-8f5d-4f7e394ad167', title: 'PATENT_TITLE_9376' },
                { id: 'c7b304fb-ba90-4817-a617-82ac81dc9cea', title: 'PATENT_TITLE_1951' },
                { id: '21e6e5d7-07e6-4d10-b087-b87efeb6d1e0', title: 'PATENT_TITLE_6454' },
                { id: '7f83ebe9-6574-47d3-907f-a72e227a0283', title: 'PATENT_TITLE_1276' },
                { id: '1c35c534-abbf-441c-8122-cdfc8c3e4c7f', title: 'PATENT_TITLE_5777' },
            ]}
        />
    </Box>
)

export default App