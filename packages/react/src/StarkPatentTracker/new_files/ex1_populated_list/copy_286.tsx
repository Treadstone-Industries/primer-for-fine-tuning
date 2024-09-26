import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a00e4929-65c4-48dd-b5e6-a7f825b54bec', title: 'PATENT_TITLE_2044' },
            { id: '4c684ab0-8524-4c21-86fc-8276952ffa40', title: 'PATENT_TITLE_3985' },
            { id: 'c4e35e34-fe4e-4ada-a88c-95e24d914e42', title: 'PATENT_TITLE_6876' },
            { id: '06ed930c-665b-4cfd-ab08-385a7d944806', title: 'PATENT_TITLE_4918' },
        ]}
    />
)

export default App