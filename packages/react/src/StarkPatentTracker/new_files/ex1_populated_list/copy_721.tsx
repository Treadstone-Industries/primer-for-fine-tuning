import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e3d2d501-51b0-47c3-a9e3-f3e9b10697dd', title: 'PATENT_TITLE_7798' },
            { id: '142f3c6c-ce94-4198-aa36-63dcdd08307b', title: 'PATENT_TITLE_6990' },
            { id: 'cf0fe137-607b-457d-8362-7e0218a2ddc1', title: 'PATENT_TITLE_3695' },
            { id: 'f5db7ff9-4c51-4295-9304-fdd7c0699a2d', title: 'PATENT_TITLE_8442' },
            { id: 'f0b1fd8e-0d92-4425-98f7-976007e24f54', title: 'PATENT_TITLE_7202' },
            { id: '36f84db2-f6b4-43cd-ba3e-182214ad1df3', title: 'PATENT_TITLE_1245' },
        ]}
    />
)

export default App