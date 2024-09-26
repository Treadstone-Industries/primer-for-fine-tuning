import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '85bf3a75-2920-44b4-b582-4ead644cc1fa', title: 'PATENT_TITLE_1988' },
            { id: 'ac9b5198-4436-400f-9376-32f79d1759ad', title: 'PATENT_TITLE_7176' },
            { id: 'a03fb7aa-09f6-437d-a8c1-e26e7bab4287', title: 'PATENT_TITLE_9467' },
            { id: '520d80a7-51b5-4e25-b1c6-eba973b4d837', title: 'PATENT_TITLE_7379' },
            { id: '9b8238ee-51c5-46f5-94a7-24afb6177cfe', title: 'PATENT_TITLE_6129' },
            { id: '7dd4737d-2bf7-436b-8d72-5955fea720dd', title: 'PATENT_TITLE_8817' },
            { id: '65260cdd-8879-4105-9be3-632e268eb7f3', title: 'PATENT_TITLE_3510' },
            { id: 'ef53d568-ff8d-4894-b3b7-1ae26c6d0b30', title: 'PATENT_TITLE_8665' },
        ]}
    />
)

export default App