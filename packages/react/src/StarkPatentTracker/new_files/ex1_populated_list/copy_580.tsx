import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3f0c3875-9cb9-4326-b73d-48591b00b302', title: 'PATENT_TITLE_9768' },
            { id: 'ccce0f91-6b6d-489d-bef5-9fd836111d8c', title: 'PATENT_TITLE_4469' },
            { id: '2d890b55-01a0-4269-8fb5-f459c18bc0fa', title: 'PATENT_TITLE_1928' },
            { id: '90096d5b-4e98-41a8-942b-361b3372fa48', title: 'PATENT_TITLE_2211' },
            { id: '4955142b-1a6c-453c-8e71-848e2af8d4ff', title: 'PATENT_TITLE_2889' },
            { id: '395ede94-7098-4144-b12e-015f7fe46648', title: 'PATENT_TITLE_1869' },
            { id: 'a2411eda-d84a-4700-b08f-5c2cfd857568', title: 'PATENT_TITLE_9924' },
            { id: '77badb13-d5a3-4c5d-9e99-fc27d07ee030', title: 'PATENT_TITLE_4279' },
            { id: '56e1e022-258c-4a55-adb1-2147559a7c61', title: 'PATENT_TITLE_7691' },
        ]}
    />
)

export default App