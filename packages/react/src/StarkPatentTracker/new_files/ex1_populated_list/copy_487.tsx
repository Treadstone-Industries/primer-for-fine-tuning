import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7c4b30f6-b7ba-4c39-a9aa-499a3301f082', title: 'PATENT_TITLE_9662' },
            { id: '29773cd9-5455-40b0-9668-e5240c261baf', title: 'PATENT_TITLE_7287' },
            { id: '4ea6eaa1-98a3-4d74-a6a8-d50f28e797f4', title: 'PATENT_TITLE_8823' },
            { id: '44ecaa49-a88b-4153-8d14-363284089dec', title: 'PATENT_TITLE_6007' },
            { id: '331a1ae5-c0bd-405e-bf39-284a75aacf04', title: 'PATENT_TITLE_4143' },
        ]}
    />
)

export default App