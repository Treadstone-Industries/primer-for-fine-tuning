import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f71b7586-e86b-48ad-8da6-f2afe2346900', title: 'PATENT_TITLE_8174' },
            { id: 'a3e3a015-3264-4226-b130-02ef980ef187', title: 'PATENT_TITLE_4403' },
            { id: '0456f930-c411-49a2-8c84-57f8c7797e3d', title: 'PATENT_TITLE_6953' },
            { id: '05cc249d-996e-461f-895f-1aba9e81f184', title: 'PATENT_TITLE_7325' },
            { id: '9ef75118-18c4-4bc4-8c9e-54917ee7d3ff', title: 'PATENT_TITLE_8602' },
            { id: 'd542013a-8b18-45cf-99bf-73c29de4783c', title: 'PATENT_TITLE_2159' },
            { id: 'ff4a81f2-41d0-4978-9542-db2c7577dbf8', title: 'PATENT_TITLE_4358' },
        ]}
    />
)

export default App