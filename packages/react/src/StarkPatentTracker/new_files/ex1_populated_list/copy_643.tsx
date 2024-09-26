import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e4672c84-5326-40ef-9fe6-469d742c1d08', title: 'PATENT_TITLE_1338' },
            { id: 'dde88973-2697-4edb-a3c9-1d0efc5c0a50', title: 'PATENT_TITLE_1218' },
            { id: '7ed90f27-754f-42aa-8605-528f8abe3d27', title: 'PATENT_TITLE_4747' },
            { id: '007495b9-5487-4f12-94b1-86a527e22480', title: 'PATENT_TITLE_2165' },
            { id: '7f510d9a-4568-486f-80d7-b5e417f019ab', title: 'PATENT_TITLE_7308' },
            { id: '61fd0e92-fdcb-4bf7-99ad-3fa687662563', title: 'PATENT_TITLE_1137' },
            { id: '63203023-a39b-4735-a0c1-3dc62b13234b', title: 'PATENT_TITLE_7383' },
            { id: 'c262df53-2442-43b0-b4d0-97c12df362b2', title: 'PATENT_TITLE_8071' },
            { id: '813e9c59-a367-42ef-877a-1fc11f51ec7f', title: 'PATENT_TITLE_1911' },
            { id: 'e1e802ba-fd51-47f8-8a97-36ca78ed0ce6', title: 'PATENT_TITLE_6265' },
        ]}
    />
)

export default App