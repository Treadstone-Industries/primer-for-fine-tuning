import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3ba3451d-3890-46fa-8c5d-b4ef46b62bbe', title: 'PATENT_TITLE_6160' },
            { id: '50a40f07-dc2f-4eee-b37b-a6aa237776ad', title: 'PATENT_TITLE_3354' },
            { id: '5aa4bc5b-d941-4f81-91dc-3147c2ab54bf', title: 'PATENT_TITLE_3097' },
            { id: '5fc51895-1ae5-4b99-a02d-b17ee7112988', title: 'PATENT_TITLE_6522' },
            { id: 'bccef735-37e3-4c2a-a3cc-80c926b87804', title: 'PATENT_TITLE_8530' },
            { id: 'e0f2695b-6f96-4373-9944-741085539864', title: 'PATENT_TITLE_7924' },
            { id: '44a7ac9e-7efd-4215-a01a-7f620f3f48c1', title: 'PATENT_TITLE_9426' },
        ]}
    />
)

export default App