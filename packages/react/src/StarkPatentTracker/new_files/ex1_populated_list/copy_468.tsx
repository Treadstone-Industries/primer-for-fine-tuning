import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8dd67479-7d3c-4ad2-bf64-d1a03d8f182b', title: 'PATENT_TITLE_1013' },
            { id: 'acab74b4-d714-4eba-b0c9-f62e6449327f', title: 'PATENT_TITLE_6208' },
            { id: '4d8b06f9-0317-40cd-b679-76a239fc8a5d', title: 'PATENT_TITLE_6792' },
            { id: '9f7f168f-ca12-4677-ac6d-959ab648a1ae', title: 'PATENT_TITLE_9224' },
            { id: '66651683-ce39-4e23-ae2a-c6083c923d3e', title: 'PATENT_TITLE_6086' },
            { id: '04121ead-eb0b-4e51-9870-2ebdb57ccfc8', title: 'PATENT_TITLE_9072' },
            { id: 'de267cfd-e998-4c2a-9f54-3f1a83d6691d', title: 'PATENT_TITLE_4803' },
            { id: '80a1e072-14bb-4bb1-804a-e65c9c4df3ea', title: 'PATENT_TITLE_6113' },
            { id: '78282ee3-13f1-48d8-bd6e-34f5b861d2b7', title: 'PATENT_TITLE_8859' },
            { id: 'e542df33-1b81-42e7-8b6f-81a2c022ec35', title: 'PATENT_TITLE_8448' },
        ]}
    />
)

export default App