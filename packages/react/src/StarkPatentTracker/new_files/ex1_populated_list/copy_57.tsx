import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4264897b-adf1-4e57-bf9a-a8233fe643c6', title: 'PATENT_TITLE_6399' },
            { id: '3df1de11-45d2-4bab-acb1-24c0c0033808', title: 'PATENT_TITLE_5737' },
            { id: 'f95495d0-d60f-4c04-a585-8d4fcd92a55d', title: 'PATENT_TITLE_9509' },
            { id: '3cbac2bc-d974-4eaf-a0af-d2176532a24d', title: 'PATENT_TITLE_5942' },
            { id: 'aa6e222f-191a-4a7e-8ab8-dbc8b9fd5b9c', title: 'PATENT_TITLE_4327' },
            { id: 'fa860b72-b392-427e-9428-15ecf60e0f9f', title: 'PATENT_TITLE_2870' },
            { id: '2ecec358-88cc-4ed4-9402-d7435fdda145', title: 'PATENT_TITLE_7767' },
            { id: '0b28b24a-e9f9-4e94-b03d-bd9c30883d2b', title: 'PATENT_TITLE_6154' },
        ]}
    />
)

export default App