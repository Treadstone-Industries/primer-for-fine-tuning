import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ef5597e3-4167-46aa-ac43-60e827dc7b92', title: 'PATENT_TITLE_5145' },
            { id: 'e9e9519c-ad34-4dc1-a66d-875fb423c81d', title: 'PATENT_TITLE_4417' },
            { id: '6306c4ac-5ef2-4d42-9d51-5ce5ab177d06', title: 'PATENT_TITLE_8365' },
            { id: '87b46559-38cc-493d-8fdb-c8e449978cad', title: 'PATENT_TITLE_9880' },
        ]}
    />
)

export default App