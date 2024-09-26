import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ecf1ab7f-f599-4972-8c81-97ee4e64cc20', title: 'PATENT_TITLE_4409' },
            { id: 'a5d39f64-f663-41d0-8c78-fb43b36211cf', title: 'PATENT_TITLE_2970' },
            { id: '90fd8863-a0ca-477e-b4a6-174706658a1d', title: 'PATENT_TITLE_9322' },
            { id: 'cfb7740e-a308-4330-b838-19725e1829d8', title: 'PATENT_TITLE_9991' },
            { id: 'aae7a643-d143-4e7b-9dbb-c3a031fec42e', title: 'PATENT_TITLE_8001' },
        ]}
    />
)

export default App