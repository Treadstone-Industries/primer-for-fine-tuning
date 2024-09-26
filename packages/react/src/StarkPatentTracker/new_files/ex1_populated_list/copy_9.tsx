import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '56473c07-9611-4a14-849b-8d2519f5b567', title: 'PATENT_TITLE_7690' },
            { id: 'dde4f49b-7ea8-4d59-9173-5d79ae077299', title: 'PATENT_TITLE_8766' },
            { id: 'a46a67f2-1f9f-490f-96fa-ce8035b4e81a', title: 'PATENT_TITLE_9131' },
            { id: 'd740e80a-1c74-4b71-a512-dbbd49a09b6b', title: 'PATENT_TITLE_9033' },
            { id: 'c6bf9044-7806-4633-80d7-8b02f029b726', title: 'PATENT_TITLE_4962' },
            { id: '55427621-f342-4ed4-9fd2-2a1d82c4b6d1', title: 'PATENT_TITLE_2645' },
            { id: 'dc09a355-cf03-40d5-98bd-b2f2fbd971d6', title: 'PATENT_TITLE_6898' },
            { id: '8b375081-d7f7-4192-b2e0-b19d3f97146d', title: 'PATENT_TITLE_8235' },
            { id: 'a4a3c178-f6ce-41cd-8e74-0a51db1a55ec', title: 'PATENT_TITLE_7066' },
        ]}
    />
)

export default App