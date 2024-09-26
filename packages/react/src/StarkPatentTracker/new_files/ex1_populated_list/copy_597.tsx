import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4a94121a-30b3-405c-bd36-a9bf101cf8a9', title: 'PATENT_TITLE_1747' },
            { id: '9461afc9-55c0-4ebf-b335-32aa13872315', title: 'PATENT_TITLE_6319' },
            { id: '4edf374e-295b-415f-a949-9d5286fde603', title: 'PATENT_TITLE_2407' },
            { id: 'f2714802-6ba2-4fff-9b05-7ee083afb4c2', title: 'PATENT_TITLE_1734' },
            { id: '83350c82-d43b-49e9-953b-1138de8c117e', title: 'PATENT_TITLE_9659' },
            { id: '3d8036d2-8fef-4ceb-9d19-c2e32c18536d', title: 'PATENT_TITLE_8005' },
            { id: 'db599f59-cda7-41a3-86f9-8329e0a96edc', title: 'PATENT_TITLE_6188' },
            { id: '802d7bed-be5e-44ad-8f28-493b88f4e819', title: 'PATENT_TITLE_7503' },
        ]}
    />
)

export default App