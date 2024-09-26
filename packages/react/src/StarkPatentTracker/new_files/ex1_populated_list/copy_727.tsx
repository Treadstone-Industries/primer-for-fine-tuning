import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '232ee8d9-ff2e-4c34-9fb9-4fcdc9499e3e', title: 'PATENT_TITLE_3182' },
            { id: 'd974f95f-eaf3-4881-a244-5d725abe6865', title: 'PATENT_TITLE_6208' },
            { id: 'dbc0cd99-c302-4f5e-a52f-ee217581f9c7', title: 'PATENT_TITLE_7283' },
            { id: '84d2a236-ec2d-4455-a435-3f300eb740b7', title: 'PATENT_TITLE_6302' },
            { id: '716c7702-c976-4270-8a45-1f5352acf8bf', title: 'PATENT_TITLE_9426' },
            { id: 'dedfe5a3-a72f-47b7-8948-9f8ae285ee2f', title: 'PATENT_TITLE_8299' },
            { id: '96a7beda-1177-4c2a-8ecc-f90da35a4625', title: 'PATENT_TITLE_7878' },
            { id: 'a62f8b5f-bef0-4bf9-a5a8-dee0ad742370', title: 'PATENT_TITLE_4491' },
            { id: '52b53a80-1a3e-4c96-ad62-f18a12ad8d4c', title: 'PATENT_TITLE_2134' },
        ]}
    />
)

export default App