import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd271807a-19e9-4d97-839d-60fc98144fbc', title: 'PATENT_TITLE_6991' },
            { id: 'e337f0c4-01d5-4d87-b23f-41432423ebe5', title: 'PATENT_TITLE_2553' },
            { id: '69fb4b33-d279-4132-898b-a71bf076d528', title: 'PATENT_TITLE_6505' },
            { id: '7f18cf13-5fe4-48a3-9edb-e038bad84a05', title: 'PATENT_TITLE_9982' },
            { id: '3ae76c76-fd58-49f3-b216-9ea9859749a4', title: 'PATENT_TITLE_5750' },
            { id: '91ec3cd5-2620-4868-b734-75f3cae38c59', title: 'PATENT_TITLE_1674' },
            { id: 'c350ef0a-ccdb-4153-8fcd-0d3c3a8778f0', title: 'PATENT_TITLE_3633' },
            { id: '65b55e86-a915-4c4a-b368-6afb30acf673', title: 'PATENT_TITLE_2417' },
        ]}
    />
)

export default App