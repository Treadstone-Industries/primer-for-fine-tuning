import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7aca22b6-05ea-4072-8e0c-604186d0663a', title: 'PATENT_TITLE_7874' },
                { id: '40558361-5280-47cc-ba8a-87b4c12fd03e', title: 'PATENT_TITLE_2214' },
                { id: '788af761-33d0-4fc2-b191-532baafcce80', title: 'PATENT_TITLE_9946' },
                { id: 'fd41ae74-1e6d-43e1-856f-adf59cbccbdd', title: 'PATENT_TITLE_6507' },
                { id: '729b6ec4-d2e8-4ccc-af3f-55d920ec679f', title: 'PATENT_TITLE_3165' },
                { id: '77a7cff3-c45c-42a9-a206-b543a732d213', title: 'PATENT_TITLE_3880' },
                { id: 'c765960f-a1b0-4be7-9a51-422276c82032', title: 'PATENT_TITLE_7898' },
                { id: '131d83ac-fc19-413b-a83d-3bcfc1a587d7', title: 'PATENT_TITLE_8629' },
                { id: '54ed404c-2e8e-465d-982b-6958915d5771', title: 'PATENT_TITLE_9894' },
                { id: '0c06a4cb-41c8-4052-939f-87f505bb3921', title: 'PATENT_TITLE_6468' },
            ]}
        />
    </Box>
)

export default App