import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2616c53a-9f39-4115-8061-910a1de673af', title: 'PATENT_TITLE_4716' },
            { id: '5241e75e-c6ce-4b5c-80e2-59a582d235eb', title: 'PATENT_TITLE_8523' },
            { id: '3781ca50-0aee-4530-acbb-c26cd6052201', title: 'PATENT_TITLE_2346' },
            { id: '9660cb2e-50c9-4550-b881-8031aefb5d52', title: 'PATENT_TITLE_6877' },
            { id: '834daed0-edd5-4be9-af2c-45a8d07816e6', title: 'PATENT_TITLE_1494' },
            { id: '64c07b31-8cb7-45dd-bb2d-b734edb09701', title: 'PATENT_TITLE_1936' },
            { id: '892f52b0-5450-40b4-9761-b0c49d9c8625', title: 'PATENT_TITLE_5420' },
        ]}
    />
)

export default App