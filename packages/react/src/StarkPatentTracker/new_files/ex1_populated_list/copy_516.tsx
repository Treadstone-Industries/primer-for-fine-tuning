import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1c670623-08a7-4686-88fd-33ceb030f887', title: 'PATENT_TITLE_2475' },
            { id: '18f8e138-264d-4e1f-af3a-6dfae6033af6', title: 'PATENT_TITLE_3932' },
            { id: '0b9cb708-f541-4879-959c-d3cecb2688a8', title: 'PATENT_TITLE_2764' },
            { id: 'f553a060-a39d-49f7-94ed-15d949c85d43', title: 'PATENT_TITLE_2192' },
            { id: 'f91bc5dc-22d7-4cf2-81f8-2b3e61aadc7d', title: 'PATENT_TITLE_3232' },
            { id: 'd2dfdc84-f4f3-41b7-a0c7-9d9bc77a49d8', title: 'PATENT_TITLE_3650' },
            { id: 'e544c353-1066-4ad5-a15e-8ab72854a2d9', title: 'PATENT_TITLE_4857' },
        ]}
    />
)

export default App