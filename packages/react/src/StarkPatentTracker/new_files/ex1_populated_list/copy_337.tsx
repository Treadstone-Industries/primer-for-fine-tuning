import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '376c6f96-13a3-43e7-873e-cbfc7d6bb010', title: 'PATENT_TITLE_5298' },
            { id: '856ccd0f-d931-4c5c-91c6-10f25f395c26', title: 'PATENT_TITLE_5299' },
            { id: 'ce2901b4-f3f9-4386-aa12-59b1cfdfabd3', title: 'PATENT_TITLE_2377' },
            { id: '747301f3-7cc2-41fd-823e-927529f431cb', title: 'PATENT_TITLE_6334' },
            { id: '7d59f89e-87b5-48a6-89c7-7ada9366a4ee', title: 'PATENT_TITLE_4277' },
            { id: '755315b0-b3f2-4159-baaa-60cb37c84243', title: 'PATENT_TITLE_7407' },
            { id: 'cb86e56a-2843-4d6c-b3f7-c12993cb5ad3', title: 'PATENT_TITLE_1932' },
        ]}
    />
)

export default App