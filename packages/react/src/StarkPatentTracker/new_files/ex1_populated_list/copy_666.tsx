import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '06de2d8d-1f77-4082-b37b-0ea926d27587', title: 'PATENT_TITLE_8116' },
            { id: '5373a490-33af-4cc0-8cdd-9ce3b71605b3', title: 'PATENT_TITLE_6011' },
        ]}
    />
)

export default App