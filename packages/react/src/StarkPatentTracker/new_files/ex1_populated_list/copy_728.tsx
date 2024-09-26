import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '01d781ce-fcb6-4a53-bb99-dbfada9d29cb', title: 'PATENT_TITLE_7472' },
            { id: '9b727762-dfe2-4884-beed-42955d4d423a', title: 'PATENT_TITLE_4713' },
            { id: '0a4eeabc-f217-4125-b8bc-07b768582aa1', title: 'PATENT_TITLE_9758' },
            { id: '0f4436e8-dd94-46f6-abd8-e755126c4480', title: 'PATENT_TITLE_6139' },
            { id: '875b8142-57ee-473e-b958-065e8e3d065a', title: 'PATENT_TITLE_5300' },
        ]}
    />
)

export default App