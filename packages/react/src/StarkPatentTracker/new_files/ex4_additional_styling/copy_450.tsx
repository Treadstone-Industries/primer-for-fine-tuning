import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0b2fb9ad-f316-42de-bae9-863175a69bd3', title: 'PATENT_TITLE_9589' },
                { id: 'dc6d3b84-66c2-4ada-ad95-38a2e732963c', title: 'PATENT_TITLE_3123' },
                { id: 'c51f8426-fd7b-44dd-bfa5-eec3b26e1847', title: 'PATENT_TITLE_7019' },
                { id: '57429573-314f-4602-8e52-9bbbdceec96a', title: 'PATENT_TITLE_9387' },
                { id: 'bfcc857f-b168-44de-aa6b-5c2dba04b285', title: 'PATENT_TITLE_5607' },
                { id: '33e88eca-8d7c-4f0a-919e-759c820cebfd', title: 'PATENT_TITLE_3275' },
                { id: '0f0ff0d6-dae7-41ca-9194-c8ce65df272e', title: 'PATENT_TITLE_8902' },
            ]}
        />
    </Box>
)

export default App