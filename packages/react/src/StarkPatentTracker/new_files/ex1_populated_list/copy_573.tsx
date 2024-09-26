import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b6629c11-881c-404e-aa46-d209e1d47015', title: 'PATENT_TITLE_3270' },
            { id: '74a7d859-219b-4b93-bd72-3a761db82588', title: 'PATENT_TITLE_3134' },
            { id: '290c896b-a8cc-4b00-bad2-008a4808868c', title: 'PATENT_TITLE_9809' },
            { id: '82f0e3d8-0a37-4061-aa2b-f423d9f012fc', title: 'PATENT_TITLE_7038' },
            { id: '03524983-3851-4982-aeb1-fc460ad1973f', title: 'PATENT_TITLE_1526' },
            { id: 'c367b9fb-6214-46c8-af95-cb15fbfc6db8', title: 'PATENT_TITLE_6777' },
            { id: 'ead6be04-9823-4f93-b912-62395f2acc84', title: 'PATENT_TITLE_5303' },
            { id: '6bdf2958-11df-4b93-9997-97cf8862a7db', title: 'PATENT_TITLE_4504' },
            { id: 'a1672f49-1f1d-4ebb-a661-9434f5f7b3e3', title: 'PATENT_TITLE_8888' },
        ]}
    />
)

export default App