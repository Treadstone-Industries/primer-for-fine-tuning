import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ee613aa6-4d4b-45a3-8da7-f0cd40fb502f', title: 'PATENT_TITLE_6816' },
            { id: 'a7c48154-19e6-4bfe-92cd-91041b23bf7b', title: 'PATENT_TITLE_3639' },
            { id: '93d9b429-14e8-4c8b-89fe-bf8502656174', title: 'PATENT_TITLE_8267' },
            { id: 'e12f18f9-d4d8-41c9-8edf-7f5139d926cd', title: 'PATENT_TITLE_3166' },
            { id: '896e7119-2a1e-4625-9a2b-56b5b43af440', title: 'PATENT_TITLE_7308' },
            { id: '5043f37f-c967-4c29-accf-cdb38052bd41', title: 'PATENT_TITLE_8513' },
        ]}
    />
)

export default App