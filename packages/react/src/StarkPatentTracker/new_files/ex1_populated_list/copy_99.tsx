import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '02c4f6b0-369d-45e5-9af2-de2e2f913132', title: 'PATENT_TITLE_4478' },
            { id: 'c9b32a3b-bc51-439b-ba0d-2e20bb986b4b', title: 'PATENT_TITLE_5453' },
            { id: '5841ab97-4fb9-4621-a29f-3bd392a1d349', title: 'PATENT_TITLE_7774' },
            { id: 'ea091dc0-e557-4325-844d-31caa1174f5d', title: 'PATENT_TITLE_2883' },
            { id: 'e693c9bc-9b61-44cb-8dde-0e1dd1d833bd', title: 'PATENT_TITLE_2043' },
            { id: '8c69faee-89b8-4778-817a-bdaeaea52db9', title: 'PATENT_TITLE_1657' },
            { id: 'e558dd8d-1131-4a2b-8984-e99fdb1cc27e', title: 'PATENT_TITLE_4946' },
            { id: '8d7adb38-75a1-4599-88df-ab5ad6729c48', title: 'PATENT_TITLE_2912' },
            { id: 'b7829183-c7ad-4ea7-8e34-e1eedae2b8a8', title: 'PATENT_TITLE_2445' },
        ]}
    />
)

export default App