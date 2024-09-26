import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '710f249d-fc6c-4958-8515-6724d4abae74', title: 'PATENT_TITLE_9872' },
            { id: 'd0144531-801a-4bd4-bb13-c2acf3ce63f2', title: 'PATENT_TITLE_8589' },
            { id: 'f420cff8-1224-4490-87a2-e796d0f14fe8', title: 'PATENT_TITLE_8147' },
            { id: '038c7d64-931d-498c-b4f9-6451bd99c0d2', title: 'PATENT_TITLE_3542' },
            { id: '5bd02d2d-1ffc-466a-b7cd-cfd1b7ec4143', title: 'PATENT_TITLE_3339' },
            { id: '50808488-2cb6-4c78-817b-181fb97778bf', title: 'PATENT_TITLE_9312' },
            { id: '80f6a127-2271-411d-bfae-6cd43caed0c0', title: 'PATENT_TITLE_2253' },
            { id: 'a9c5fd06-da1a-402b-b328-10b717bc687b', title: 'PATENT_TITLE_3666' },
        ]}
    />
)

export default App