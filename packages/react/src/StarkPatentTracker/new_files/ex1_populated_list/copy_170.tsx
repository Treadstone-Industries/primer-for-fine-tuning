import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '104d1b0d-3987-4940-afaa-b1595b117706', title: 'PATENT_TITLE_4442' },
            { id: '4fca9868-806d-444d-ad4e-0f5ec7a6c67d', title: 'PATENT_TITLE_5783' },
            { id: '3290bade-ce3d-4803-ab2c-6fc5dcc4488c', title: 'PATENT_TITLE_7099' },
            { id: 'f63d0d66-5d72-4cf2-8995-7f7f4580b4d2', title: 'PATENT_TITLE_1458' },
            { id: 'b0c218f2-3859-4158-8130-03cd92b66c57', title: 'PATENT_TITLE_5433' },
            { id: 'b83f0e30-ca1a-4d22-b3bd-47e3728db4b1', title: 'PATENT_TITLE_4530' },
        ]}
    />
)

export default App