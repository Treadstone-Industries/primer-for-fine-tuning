import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '84e95ab8-1329-4ca0-817d-f941dbf1b6de', title: 'PATENT_TITLE_6815' },
            { id: 'ed763e01-2886-4334-b99f-c41ef6a5f223', title: 'PATENT_TITLE_7034' },
            { id: '0737469c-ba0b-4f24-9906-72445aaf0cc4', title: 'PATENT_TITLE_2341' },
            { id: '96d52924-0338-486c-9123-f6fbec8a1582', title: 'PATENT_TITLE_8859' },
            { id: 'f2e18de4-6141-4604-9ee6-5dad8fe820c3', title: 'PATENT_TITLE_4420' },
            { id: 'e1d4b742-91f4-4c33-98b4-e69aea838122', title: 'PATENT_TITLE_2794' },
            { id: '0f1e16ed-3b89-4e70-acda-fa56d214047f', title: 'PATENT_TITLE_5566' },
            { id: '11245368-34db-44f1-9b52-f568ac444ee9', title: 'PATENT_TITLE_8291' },
            { id: 'a04ad39c-c8f5-453f-8fed-625e91bc4516', title: 'PATENT_TITLE_1021' },
        ]}
    />
)

export default App