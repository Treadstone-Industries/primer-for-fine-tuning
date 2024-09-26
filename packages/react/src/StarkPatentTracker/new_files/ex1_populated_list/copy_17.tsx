import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ea4695ff-4879-466c-8cb5-b12b973a0b7c', title: 'PATENT_TITLE_7701' },
            { id: 'feec0413-ce83-4f7d-abc4-339c8f611e92', title: 'PATENT_TITLE_5174' },
            { id: '609042de-77ec-4d8d-8157-c27bc6c36812', title: 'PATENT_TITLE_4554' },
            { id: 'dd267d06-5503-4ace-aa8c-fd4077b2b9e1', title: 'PATENT_TITLE_5860' },
            { id: 'cbf25e6b-414f-40da-bf59-705680ba6843', title: 'PATENT_TITLE_7941' },
            { id: '55b16800-7ac0-4099-99cf-331dfbec065c', title: 'PATENT_TITLE_1955' },
            { id: 'b246d609-9233-4df7-ab8b-4cf0778cea25', title: 'PATENT_TITLE_5190' },
            { id: 'fdf6209e-d217-488f-8575-882ca7aebea8', title: 'PATENT_TITLE_2367' },
        ]}
    />
)

export default App