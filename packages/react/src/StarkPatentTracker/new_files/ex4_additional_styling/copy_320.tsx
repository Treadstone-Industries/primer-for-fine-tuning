import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0ab8b2f3-c199-4fc8-aa36-a9f587c73f58', title: 'PATENT_TITLE_7097' },
                { id: '4e66c854-bd10-4c55-842d-412304589ddc', title: 'PATENT_TITLE_3477' },
                { id: '5814b564-1e38-4b85-84d4-2f1233a8eba4', title: 'PATENT_TITLE_6712' },
                { id: 'cab11fb1-8dac-45d2-99d1-b3ee92b490ef', title: 'PATENT_TITLE_4336' },
                { id: 'ea428091-6c77-4263-b473-12a83d2acaaa', title: 'PATENT_TITLE_2851' },
                { id: '1acf5f6b-71a3-4506-acb1-8c8866853769', title: 'PATENT_TITLE_8225' },
                { id: '1c05f19c-0cc3-45f5-8dc1-2703b35178a4', title: 'PATENT_TITLE_7271' },
                { id: 'c97b8c97-143c-4664-936d-fd8faf22eec5', title: 'PATENT_TITLE_6258' },
                { id: '7cc2a2aa-c8c1-40ca-9934-ba96367a59d7', title: 'PATENT_TITLE_8308' },
                { id: 'bbcb1c6d-5159-4a28-84b7-0d8ac4ec14be', title: 'PATENT_TITLE_7631' },
            ]}
        />
    </Box>
)

export default App