import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '09a400ec-848f-4836-9497-161791513396', title: 'PATENT_TITLE_3677' },
            { id: 'dfa139eb-a50c-4264-881a-160732df2a2d', title: 'PATENT_TITLE_6869' },
            { id: 'f1ee4550-f573-456b-9619-4dc753a5006a', title: 'PATENT_TITLE_6926' },
            { id: '38b25ab5-6a94-4cde-a961-3874c206ceee', title: 'PATENT_TITLE_1919' },
            { id: 'f199842f-0506-4bbb-b3b1-9a8bba39acbc', title: 'PATENT_TITLE_5321' },
            { id: 'a6645908-79fe-416d-a160-f6dc935bf4d6', title: 'PATENT_TITLE_1395' },
        ]}
    />
)

export default App