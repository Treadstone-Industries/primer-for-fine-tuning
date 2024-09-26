import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bf121e3f-9e11-4a8a-a7a8-ed361e67380e', title: 'PATENT_TITLE_3201' },
                { id: 'f26289e7-d925-49d0-baac-7c691d7fc927', title: 'PATENT_TITLE_1446' },
                { id: '277473d8-29ea-4909-b175-bbf7c6bd66e6', title: 'PATENT_TITLE_1864' },
                { id: '9a6a573d-e45d-4561-8fe9-4fde0d0c1fe3', title: 'PATENT_TITLE_1767' },
                { id: 'fa7469a9-fd7b-4bc9-9418-9adf89b49b16', title: 'PATENT_TITLE_1673' },
                { id: 'fdd824ad-e562-4819-a036-69a871dd752c', title: 'PATENT_TITLE_9963' },
                { id: 'a433fb42-d015-483f-82f1-a969ac0e7003', title: 'PATENT_TITLE_7681' },
                { id: '449d9b8c-04f5-4872-a5bf-d6a156ecc0f7', title: 'PATENT_TITLE_2813' },
                { id: '85c3ac8e-0ab2-4f9c-b8e2-c80a1d421cab', title: 'PATENT_TITLE_4625' },
            ]}
        />
    </Box>
)

export default App