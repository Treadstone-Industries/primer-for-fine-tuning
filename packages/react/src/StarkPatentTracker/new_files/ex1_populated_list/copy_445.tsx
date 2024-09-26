import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4f60771d-a51e-418f-9b96-32e3868b8f9e', title: 'PATENT_TITLE_4012' },
            { id: '14c3c19e-680f-4e6c-8269-2f641433c8bb', title: 'PATENT_TITLE_2078' },
            { id: '59b4d9a0-6b86-4202-b2e5-89f1e7b949af', title: 'PATENT_TITLE_5990' },
            { id: '9a537751-4706-4457-9905-61ad09ad0749', title: 'PATENT_TITLE_7948' },
            { id: '1b9c6964-04b1-4a68-887b-a43d8652eead', title: 'PATENT_TITLE_4278' },
        ]}
    />
)

export default App