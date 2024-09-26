import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '56aac74a-362f-4c1d-831d-c093ad9e943f', title: 'PATENT_TITLE_2820' },
            { id: 'd04f7acd-bd8a-4a3e-a9f0-d2b6ec170f65', title: 'PATENT_TITLE_8427' },
            { id: '5939d114-1ab7-4616-97da-16182b3c9963', title: 'PATENT_TITLE_5132' },
            { id: '56ebd8b6-7c7e-49e0-8abb-d5685a3b2245', title: 'PATENT_TITLE_7976' },
            { id: '799b894c-3d7d-44fa-8f0e-fe9f0303f427', title: 'PATENT_TITLE_2109' },
            { id: '837438ff-f2c0-4f36-8e0f-8fc521574a17', title: 'PATENT_TITLE_7951' },
            { id: 'a107123d-7633-4111-beaf-b4df40af9be9', title: 'PATENT_TITLE_8903' },
            { id: 'df929ec0-c688-4c3f-b8c0-f48316453099', title: 'PATENT_TITLE_5322' },
            { id: '49dc6268-939e-4ac1-a193-50e1994973d5', title: 'PATENT_TITLE_3958' },
            { id: '2cf156cb-cb58-4afd-888b-8d3ddbbdb04a', title: 'PATENT_TITLE_4211' },
        ]}
    />
)

export default App