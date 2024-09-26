import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e11055db-c192-4f01-81b7-c50354dffd9e', title: 'PATENT_TITLE_9906' },
            { id: '9729576d-285e-4d83-a61e-826c628165b0', title: 'PATENT_TITLE_7906' },
            { id: '00a663f5-0dbc-44e3-99dc-31eec4cdb820', title: 'PATENT_TITLE_8813' },
            { id: '70dc63ac-ee0f-41c7-918a-0bff4333df01', title: 'PATENT_TITLE_7802' },
            { id: '9c34e6ba-9844-4da5-8204-a5ac4e57f35a', title: 'PATENT_TITLE_2728' },
            { id: '45249796-bfca-4be5-854c-4575bec5dae5', title: 'PATENT_TITLE_3842' },
        ]}
    />
)

export default App