import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4834c68e-ca9d-4904-a7c2-2bdc63944821', title: 'PATENT_TITLE_9821' },
            { id: '9f696793-d99f-4b68-8c6b-31c9957ef076', title: 'PATENT_TITLE_5449' },
            { id: '61a4926b-d43e-47d7-be61-11cae50b2acf', title: 'PATENT_TITLE_6533' },
        ]}
    />
)

export default App