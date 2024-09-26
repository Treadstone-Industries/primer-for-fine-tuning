import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e9524d54-c829-4761-9e0b-013c01248eb9', title: 'PATENT_TITLE_5494' },
                { id: 'f1756373-7611-4f8c-9298-19933180effb', title: 'PATENT_TITLE_2922' },
                { id: '5d50d348-47c6-4deb-8cac-c7656410bca2', title: 'PATENT_TITLE_2251' },
                { id: '285b91bd-3ccf-4125-a19b-5467a26eb839', title: 'PATENT_TITLE_6942' },
            ]}
        />
    </Box>
)

export default App