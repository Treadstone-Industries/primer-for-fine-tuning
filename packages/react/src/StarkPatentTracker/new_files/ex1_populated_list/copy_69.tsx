import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '64228da7-18aa-4811-a208-17154477c1e4', title: 'PATENT_TITLE_1292' },
            { id: 'dc27e986-7981-447d-96ab-1f00d4517c65', title: 'PATENT_TITLE_1674' },
            { id: 'b5ba898d-8f70-46c5-902d-7c96c7a18217', title: 'PATENT_TITLE_1060' },
            { id: 'bdab5225-c47d-42df-a0cf-692e8515b592', title: 'PATENT_TITLE_2214' },
            { id: '1b8c2d3a-82d6-4277-abed-861eacc715ec', title: 'PATENT_TITLE_5462' },
            { id: '6d406790-12b0-475b-b670-16f278c773c7', title: 'PATENT_TITLE_1272' },
            { id: 'ebdd4e56-261d-4fe2-a9b7-9a12be08323b', title: 'PATENT_TITLE_2499' },
            { id: '88cbe315-e9b8-43b7-b30e-46705945111f', title: 'PATENT_TITLE_4380' },
            { id: 'c988cd5c-bb40-4131-90d9-1f5342288fb8', title: 'PATENT_TITLE_9007' },
        ]}
    />
)

export default App