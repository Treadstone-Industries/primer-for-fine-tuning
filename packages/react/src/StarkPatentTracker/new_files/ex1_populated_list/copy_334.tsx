import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1b8eb0a9-dd05-4124-972c-3511fa8c345d', title: 'PATENT_TITLE_5782' },
            { id: 'd044b077-fd5a-499a-8745-803e85c9a7cd', title: 'PATENT_TITLE_5257' },
            { id: 'b46f893e-0415-4aa2-8c3f-3314b60d0580', title: 'PATENT_TITLE_3120' },
            { id: 'fd79d574-3ea1-4e3c-b39f-d03a4264bb49', title: 'PATENT_TITLE_9304' },
            { id: '513791d6-eb3f-47d7-9bdd-83831f2a19b5', title: 'PATENT_TITLE_1087' },
            { id: '4bfe9157-34e9-48a6-b32d-a536ba8ae04a', title: 'PATENT_TITLE_7739' },
            { id: 'ec9e528e-b44f-49d9-9d35-26dab1060fc4', title: 'PATENT_TITLE_3015' },
            { id: 'fd06de0b-0a96-4247-88d7-7158aa390cc7', title: 'PATENT_TITLE_4920' },
            { id: 'a22fce4b-315d-44d7-aeab-ada2e6925705', title: 'PATENT_TITLE_2087' },
        ]}
    />
)

export default App