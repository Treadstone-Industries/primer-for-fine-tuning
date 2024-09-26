import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f5960235-9661-467c-984d-c602a6519de8', title: 'PATENT_TITLE_8017' },
            { id: 'ec464c8f-208f-42dd-8c4d-5546bc405c6f', title: 'PATENT_TITLE_1954' },
            { id: '6d894432-b75b-4142-884a-71169ad68ff6', title: 'PATENT_TITLE_9602' },
            { id: '75dc1020-e0ad-4aac-97f9-8d1ee70f2a0c', title: 'PATENT_TITLE_2507' },
            { id: '4a938454-467f-4e01-85b3-3981b851dc72', title: 'PATENT_TITLE_8927' },
            { id: '2074a2c2-a936-43ba-9531-5b198e3eb6d3', title: 'PATENT_TITLE_2733' },
            { id: '7ecdc76b-1492-4ec5-823e-3e711a78435b', title: 'PATENT_TITLE_6217' },
            { id: '5703b9f4-c88c-4e9e-b938-b750dc17e3f5', title: 'PATENT_TITLE_9650' },
            { id: 'cf0f8166-33a6-4ca7-ac8a-647cb8c7893c', title: 'PATENT_TITLE_7263' },
            { id: '14a2f508-773c-4d98-9610-01bdcaa41dd2', title: 'PATENT_TITLE_1351' },
        ]}
    />
)

export default App