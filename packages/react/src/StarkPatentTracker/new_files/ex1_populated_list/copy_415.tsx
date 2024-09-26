import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ee531e9a-751c-469b-adfb-3dc2aaea5e3f', title: 'PATENT_TITLE_2784' },
            { id: '7116d7df-96cc-4be3-9b67-f143cace1aff', title: 'PATENT_TITLE_5406' },
            { id: 'ee7264f3-16e9-44ac-a55c-0ec7d2cb0085', title: 'PATENT_TITLE_4320' },
            { id: 'c3509bcd-770c-4591-af49-7a165092263e', title: 'PATENT_TITLE_7323' },
            { id: '1b404011-dbfe-47fe-a596-0ea12b508f8e', title: 'PATENT_TITLE_3641' },
            { id: '3192af12-e491-4e38-82c2-333300289639', title: 'PATENT_TITLE_8578' },
            { id: 'f9af9db2-9b9f-4c0b-b094-7c4cff0043b3', title: 'PATENT_TITLE_7730' },
        ]}
    />
)

export default App