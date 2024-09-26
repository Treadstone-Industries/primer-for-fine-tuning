import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f7cd3b7c-4a84-406d-8022-391338846d33', title: 'PATENT_TITLE_2661' },
            { id: 'eb0c4947-3fc5-4582-8caf-2fa4fad419c2', title: 'PATENT_TITLE_5188' },
            { id: '22ab02a8-e538-49e3-ad18-92fe6176faf4', title: 'PATENT_TITLE_9230' },
            { id: '27c8cbab-e962-4796-ad9b-d8de26b75896', title: 'PATENT_TITLE_7393' },
            { id: '70b5a69a-2cdf-49ee-af5b-37148045c6cc', title: 'PATENT_TITLE_9031' },
            { id: '836dec61-3fb0-4f7c-8142-d21c0cc0fdf4', title: 'PATENT_TITLE_6714' },
            { id: '1149f5aa-e52f-40a9-b8eb-84da2381351d', title: 'PATENT_TITLE_6285' },
            { id: '40011250-fb8d-43e5-8588-87d012ccda41', title: 'PATENT_TITLE_2398' },
        ]}
    />
)

export default App