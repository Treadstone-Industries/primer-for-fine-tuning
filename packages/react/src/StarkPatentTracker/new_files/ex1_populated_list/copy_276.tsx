import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3d9fc939-2bc2-4b7a-b1f9-7792acf224d4', title: 'PATENT_TITLE_7246' },
            { id: '10ad7154-9305-4233-8940-05091f4d67dd', title: 'PATENT_TITLE_7387' },
            { id: '424cfd45-9dde-4702-a233-325a5143b347', title: 'PATENT_TITLE_7924' },
            { id: '7855d6bb-6e6c-4807-b358-2f1680bf4b80', title: 'PATENT_TITLE_9725' },
            { id: 'e810cce3-86a3-481e-b5c3-a7987ba7c202', title: 'PATENT_TITLE_9187' },
            { id: '1302c7e9-0fcc-4222-a3e1-8d9b33f33fc2', title: 'PATENT_TITLE_7060' },
        ]}
    />
)

export default App