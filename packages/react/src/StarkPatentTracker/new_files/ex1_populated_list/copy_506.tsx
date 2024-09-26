import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2cef6b3c-e295-4524-b137-94ba1fec7320', title: 'PATENT_TITLE_5614' },
            { id: 'd15fe8ec-ea2c-420b-a56e-1139704a2338', title: 'PATENT_TITLE_7379' },
            { id: '114b166d-b19a-4a9b-99e6-af73aa0bdd6d', title: 'PATENT_TITLE_1893' },
            { id: '89207144-e110-4a3c-917e-e8e19e7ca6fa', title: 'PATENT_TITLE_5654' },
            { id: '3592ef4e-95e9-46c9-a6e5-ad070a9b0cfd', title: 'PATENT_TITLE_4809' },
            { id: 'fdacc741-abd4-4c3d-984e-43c1c5489c38', title: 'PATENT_TITLE_8407' },
        ]}
    />
)

export default App