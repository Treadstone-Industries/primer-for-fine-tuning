import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4f3c9a81-f769-4c8c-8290-c9d0d82e296d', title: 'PATENT_TITLE_1007' },
            { id: 'f162009c-e89e-417f-93db-6b224507f379', title: 'PATENT_TITLE_6948' },
            { id: 'd51d0bcb-aa87-4e71-8b6e-94bf9c41fe45', title: 'PATENT_TITLE_7129' },
            { id: '73d7523f-f1aa-411c-a6b6-631315f18545', title: 'PATENT_TITLE_8686' },
            { id: 'f8a5971a-e0b7-4d7c-ab95-5416c42a9f5d', title: 'PATENT_TITLE_9572' },
            { id: '961a3779-a6b9-4214-bf0d-1fe9619bb483', title: 'PATENT_TITLE_4425' },
        ]}
    />
)

export default App