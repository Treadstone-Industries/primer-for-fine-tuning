import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4d7c187a-54e5-4eaa-9d30-ece2cbb3e8ed', title: 'PATENT_TITLE_5635' },
            { id: 'fb5be424-c38b-4a9c-85cd-baf382d95f2a', title: 'PATENT_TITLE_8551' },
            { id: '47cc2fb6-d7d7-4938-8e6f-81e33fcc2b0a', title: 'PATENT_TITLE_2145' },
            { id: '8e73ed5f-c9bd-49f7-bd06-f9521e353d22', title: 'PATENT_TITLE_3415' },
            { id: '06922ae4-fbb7-47fd-bfd1-d86b3d8477cf', title: 'PATENT_TITLE_8616' },
        ]}
    />
)

export default App