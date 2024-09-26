import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '070f6728-a908-47b5-beb9-78d818635fb6', title: 'PATENT_TITLE_9896' },
            { id: '8d9eec41-c584-4b7b-9d3e-b7029d8dd395', title: 'PATENT_TITLE_5378' },
            { id: '17371036-4dd2-49de-9b75-b2f1874a3aa4', title: 'PATENT_TITLE_5354' },
            { id: '17d70ef5-6d56-419f-9842-b3a0d6e4ecd1', title: 'PATENT_TITLE_2426' },
            { id: '52644e18-5188-4283-9619-091f5945d456', title: 'PATENT_TITLE_1326' },
            { id: '3e044677-e836-4126-ae12-609fe703ac39', title: 'PATENT_TITLE_6764' },
            { id: '2b0c5995-fc48-4719-9a27-5e5e0e24b986', title: 'PATENT_TITLE_2699' },
            { id: 'd601052e-36a9-494c-958e-508523f1035c', title: 'PATENT_TITLE_1890' },
            { id: '81d0862f-5964-4180-9dfb-9e09977fa560', title: 'PATENT_TITLE_8779' },
            { id: 'e31f58a9-a3b5-4a5d-a9ba-f3a17140882b', title: 'PATENT_TITLE_7072' },
        ]}
    />
)

export default App