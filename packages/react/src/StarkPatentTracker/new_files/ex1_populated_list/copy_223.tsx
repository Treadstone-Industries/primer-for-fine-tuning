import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '822053cd-b026-40d2-a30d-f6ea5abe2a44', title: 'PATENT_TITLE_5135' },
            { id: '17d76019-c297-42e4-bd7a-cf5735fd915e', title: 'PATENT_TITLE_9098' },
            { id: '7350a19c-b8ae-4079-afb2-bac7c3934841', title: 'PATENT_TITLE_5865' },
            { id: 'c92268e8-e799-427f-855d-14bce07903d7', title: 'PATENT_TITLE_7073' },
            { id: 'a5ee0836-d935-42b5-8643-2b2ecfe942e9', title: 'PATENT_TITLE_1402' },
            { id: '57343890-d532-4705-b061-a04934f57010', title: 'PATENT_TITLE_9270' },
            { id: '5a446cd6-4391-4797-a89f-acd88ba3b05a', title: 'PATENT_TITLE_9178' },
        ]}
    />
)

export default App