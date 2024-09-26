import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '74c2a538-6547-4918-ae9d-1e88bfbbf699', title: 'PATENT_TITLE_9999' },
            { id: 'ed345f2b-3bf0-43b4-955e-4b8ddc35539f', title: 'PATENT_TITLE_5327' },
            { id: 'a64326fe-853e-4adb-81de-71501547ff49', title: 'PATENT_TITLE_3655' },
            { id: '3856f274-0c44-4bda-b802-380c228a9bcd', title: 'PATENT_TITLE_8386' },
        ]}
    />
)

export default App