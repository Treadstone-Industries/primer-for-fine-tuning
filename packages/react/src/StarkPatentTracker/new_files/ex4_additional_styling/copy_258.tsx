import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd231465e-d4f9-47ea-bcf2-4ab034b537b9', title: 'PATENT_TITLE_4178' },
                { id: '619c4fce-fdbd-4ec3-ae37-0c3a4196bbc9', title: 'PATENT_TITLE_1317' },
                { id: '7167dcdf-0028-4d30-ab26-54aba39ea473', title: 'PATENT_TITLE_2288' },
                { id: '574b6bdd-a6d3-4cbb-9d6b-e4a1eed21b8d', title: 'PATENT_TITLE_1070' },
                { id: '9124e051-e5f6-4e3e-ad7a-6224de4a5666', title: 'PATENT_TITLE_8863' },
                { id: 'fc3499e6-b372-4d49-91de-bbfceb798e0c', title: 'PATENT_TITLE_9132' },
                { id: 'd36e452a-f00b-419d-84a2-b1f91e79a2a0', title: 'PATENT_TITLE_8407' },
                { id: '1616550e-26a9-497a-a61a-ad4a88c8b03a', title: 'PATENT_TITLE_9525' },
            ]}
        />
    </Box>
)

export default App