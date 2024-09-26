import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '535dca6b-efcc-48bc-9ace-8735d915d8df', title: 'PATENT_TITLE_3276' },
            { id: '9583ca64-e0b5-4758-b383-636e5a1fe345', title: 'PATENT_TITLE_1194' },
            { id: 'afb038f8-5fc9-49fe-ae27-e26853562e1d', title: 'PATENT_TITLE_5320' },
            { id: '11f67ddc-9724-4c82-bfa0-38de53ddd544', title: 'PATENT_TITLE_4700' },
        ]}
    />
)

export default App