import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9a3516c6-0538-4e62-94df-48f34e36042d', title: 'PATENT_TITLE_4112' },
            { id: '821f3112-3efd-4a13-b078-94f6905b9737', title: 'PATENT_TITLE_7714' },
            { id: 'bf0e96c4-1b43-4af0-92f7-ad02bf717ae6', title: 'PATENT_TITLE_8608' },
            { id: '100d23d8-bb34-4d6b-96bb-ffe29fc68174', title: 'PATENT_TITLE_1209' },
            { id: 'e3fb3ac9-340b-4054-a69c-33165a4228af', title: 'PATENT_TITLE_6315' },
        ]}
    />
)

export default App