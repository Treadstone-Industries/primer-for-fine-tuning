import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'eed00834-cef4-405c-988d-6eb8c447a6b7', title: 'PATENT_TITLE_5560' },
            { id: 'c8cdc63b-3126-46fa-8c8f-8367e7bcbce8', title: 'PATENT_TITLE_1909' },
            { id: '8f64cfd1-be9e-4320-b2b1-5406b4d2335b', title: 'PATENT_TITLE_7300' },
            { id: '79feb13c-35a4-4fdc-97e1-2ea87d20a3c9', title: 'PATENT_TITLE_6301' },
            { id: '9d14855e-53a2-4ccd-8105-b31fefed8904', title: 'PATENT_TITLE_8812' },
            { id: 'bb3c147c-2487-454b-a0c0-acdb93e9efe5', title: 'PATENT_TITLE_8324' },
            { id: 'f8b50d44-527e-432c-9285-d20951001a09', title: 'PATENT_TITLE_5895' },
        ]}
    />
)

export default App