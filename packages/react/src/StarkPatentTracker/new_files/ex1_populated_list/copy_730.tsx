import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd8588a85-facc-4af0-94c5-d866a73bc1da', title: 'PATENT_TITLE_8176' },
            { id: '15982178-5f7b-4841-80f8-48c6dec469dd', title: 'PATENT_TITLE_7084' },
            { id: '9ef39017-135c-456b-bca6-aa39827f66bb', title: 'PATENT_TITLE_1400' },
            { id: 'b61df8a3-5bab-48cb-84a3-c7b646378918', title: 'PATENT_TITLE_1578' },
            { id: '3dd910a6-1d36-4f48-b46e-a49ff45dfe4f', title: 'PATENT_TITLE_3566' },
            { id: '88c61acf-c375-4bdc-ab7a-dfd8c7ef16cd', title: 'PATENT_TITLE_2576' },
            { id: '2418e7cd-3968-4d27-9ab7-9ac4d81c4e8e', title: 'PATENT_TITLE_7537' },
            { id: 'e1480b67-88ee-4bfe-acb6-e20528450a4d', title: 'PATENT_TITLE_7522' },
            { id: '639a9f00-d861-4303-9c0c-7331304dcc1c', title: 'PATENT_TITLE_5828' },
        ]}
    />
)

export default App