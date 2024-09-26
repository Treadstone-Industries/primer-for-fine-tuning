import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6f4b80a2-ca3a-4313-894b-b063bbc7735d', title: 'PATENT_TITLE_7632' },
            { id: '91792e2e-cd5b-4a51-9c1e-f2d0fe2adf71', title: 'PATENT_TITLE_3016' },
            { id: '1eef6329-7b0a-46ea-9722-d963e107b6f2', title: 'PATENT_TITLE_6721' },
            { id: 'c56f2664-a21b-49d6-b62a-339141b63e5c', title: 'PATENT_TITLE_7688' },
            { id: 'baef7deb-e1fd-4676-9a22-db519d4c1185', title: 'PATENT_TITLE_8266' },
            { id: '8fb7e605-51fa-4b9c-ba78-c5b2e494bfc2', title: 'PATENT_TITLE_1839' },
        ]}
    />
)

export default App