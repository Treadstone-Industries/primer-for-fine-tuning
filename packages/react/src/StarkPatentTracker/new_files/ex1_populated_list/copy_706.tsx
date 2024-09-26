import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '131b3ce2-d566-46f2-85be-d0f90721744f', title: 'PATENT_TITLE_7356' },
            { id: '63fdc32a-ea6a-4c84-a04c-e0aae668594b', title: 'PATENT_TITLE_4627' },
            { id: '50609e9f-d75b-4ad9-affc-8e3c1d38e929', title: 'PATENT_TITLE_9328' },
            { id: 'c87b5495-7d74-4809-9b99-203fbd957814', title: 'PATENT_TITLE_8706' },
            { id: '9afc32d4-983f-4c77-974b-8cf1ed2f5713', title: 'PATENT_TITLE_3715' },
            { id: '496098fd-07c5-422a-b88b-6fb5d85f7352', title: 'PATENT_TITLE_1658' },
            { id: '00d742e6-b0ab-4511-949f-1eff079b5eaa', title: 'PATENT_TITLE_1433' },
            { id: 'b44a5138-5435-4812-93e0-3c23e486696c', title: 'PATENT_TITLE_9857' },
        ]}
    />
)

export default App