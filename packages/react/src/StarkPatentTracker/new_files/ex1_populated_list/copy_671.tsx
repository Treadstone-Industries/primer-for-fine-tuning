import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd409251c-b43a-4bf4-9460-027133e3d89e', title: 'PATENT_TITLE_5275' },
            { id: 'aeb9043b-1bfe-4aeb-a1e4-a51175956e88', title: 'PATENT_TITLE_7200' },
            { id: '86dc084d-c1e9-4cc1-9804-d46f04ec78d0', title: 'PATENT_TITLE_6464' },
            { id: '385a1c69-e764-41ee-afa8-a1d40dac4c1c', title: 'PATENT_TITLE_3768' },
            { id: '1a136e2c-9e47-44f4-973a-198216b5c4c1', title: 'PATENT_TITLE_3473' },
            { id: '95fb5998-1b70-4165-ab35-fedcd5a62b4f', title: 'PATENT_TITLE_7462' },
            { id: '5d37b5c8-19ff-4ce8-8aaf-a0ec94a64eef', title: 'PATENT_TITLE_3568' },
            { id: '281040e5-7ce1-4a00-b063-241b8f17f417', title: 'PATENT_TITLE_3093' },
            { id: 'c232613b-6863-4cae-a3dd-99cb2b774b1d', title: 'PATENT_TITLE_7743' },
        ]}
    />
)

export default App