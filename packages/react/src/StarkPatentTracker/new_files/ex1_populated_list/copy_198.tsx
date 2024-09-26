import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5a840e03-2aa6-4da6-8b8c-d0f5c67f6572', title: 'PATENT_TITLE_6200' },
            { id: '05dbdb76-f570-4d98-9422-724deb92689e', title: 'PATENT_TITLE_1771' },
            { id: 'd0be36ef-2936-43fd-83f7-ec88f38a0f2b', title: 'PATENT_TITLE_3703' },
            { id: 'e52d5441-4221-4e0a-af34-d98159254883', title: 'PATENT_TITLE_7176' },
            { id: '6e370704-1668-40f4-a3c8-2f74de184a95', title: 'PATENT_TITLE_3139' },
            { id: 'ea42a185-a8da-4e64-a0cf-c90d049bbd6c', title: 'PATENT_TITLE_6026' },
            { id: 'bce83efc-9e41-42ff-8993-4fe26ed8eca4', title: 'PATENT_TITLE_6995' },
            { id: '3cb73acc-5080-4bbf-82dc-f62bd24d6a38', title: 'PATENT_TITLE_1131' },
            { id: '20cf0170-75ac-4a04-a9ef-5ee0fd3df17e', title: 'PATENT_TITLE_9159' },
            { id: '7e654d88-ffae-452e-901f-7f816fd36a94', title: 'PATENT_TITLE_3212' },
        ]}
    />
)

export default App