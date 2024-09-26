import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2387b7ad-7540-46c8-a4d0-afb38311bb4c', title: 'PATENT_TITLE_9762' },
            { id: 'aae1b860-1a62-4456-8697-d33dfae3ade0', title: 'PATENT_TITLE_6300' },
            { id: 'fd032fbf-c021-43d7-998a-3f404a5c6f63', title: 'PATENT_TITLE_6845' },
            { id: '3dcbcf19-0420-474a-a83c-5198cef5f88b', title: 'PATENT_TITLE_4123' },
            { id: 'a91cbb02-fadb-4f39-aea5-4caf838398a5', title: 'PATENT_TITLE_5298' },
        ]}
    />
)

export default App