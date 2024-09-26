import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '868c60bb-b245-40eb-a435-0f40209e30fd', title: 'PATENT_TITLE_1409' },
            { id: '6fed83de-be07-4e64-9224-940c20a7d1ec', title: 'PATENT_TITLE_5647' },
            { id: 'a98062e9-2bf3-4dab-8775-83e588b94416', title: 'PATENT_TITLE_7737' },
            { id: '42bb1e03-e2ee-41a6-97e3-b52b16566025', title: 'PATENT_TITLE_1963' },
            { id: '86936c39-6b05-41bc-96a5-676b027db6fc', title: 'PATENT_TITLE_6963' },
            { id: '31d0b154-5868-4de4-816e-2a21cbee188d', title: 'PATENT_TITLE_7878' },
        ]}
    />
)

export default App