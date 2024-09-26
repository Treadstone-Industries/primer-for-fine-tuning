import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1bb1fd5c-a148-447d-89b8-4a22bfb4e16a', title: 'PATENT_TITLE_5434' },
            { id: '5c629dbb-1381-4029-b70f-b86d899b637f', title: 'PATENT_TITLE_6128' },
            { id: 'a540143e-7ace-410c-a919-fa23c16e3c35', title: 'PATENT_TITLE_7321' },
            { id: '9db7323f-7bd2-4678-a3cf-5a147decaf96', title: 'PATENT_TITLE_9276' },
        ]}
    />
)

export default App