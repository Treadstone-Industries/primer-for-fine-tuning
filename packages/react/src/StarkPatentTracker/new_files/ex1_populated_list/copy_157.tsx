import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c993fe38-a22c-4530-be5c-420b4769826d', title: 'PATENT_TITLE_1961' },
            { id: 'f739cd24-8411-4069-a34f-fbc620d52dfc', title: 'PATENT_TITLE_4831' },
            { id: '7280be16-2e04-4109-8cca-2eaf82d30e5d', title: 'PATENT_TITLE_8591' },
            { id: '12471f07-af28-45b3-a7fe-d93988b7ffe6', title: 'PATENT_TITLE_2957' },
            { id: '5663e316-6792-4d0e-9786-dabe188ab21f', title: 'PATENT_TITLE_3914' },
        ]}
    />
)

export default App