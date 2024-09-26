import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b057b20a-8a31-43b6-ab00-876ef275c750', title: 'PATENT_TITLE_5882' },
            { id: 'c792140d-a662-4348-b5d4-0ea249960919', title: 'PATENT_TITLE_7795' },
            { id: 'a8fbdfde-59ed-42e2-9410-22b7091e40d5', title: 'PATENT_TITLE_2465' },
            { id: 'b1c6c37c-dffd-41aa-8f4b-90c9e99832fb', title: 'PATENT_TITLE_7846' },
        ]}
    />
)

export default App