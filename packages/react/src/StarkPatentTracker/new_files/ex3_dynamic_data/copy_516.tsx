import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '350c93fa-37aa-453b-96de-985fb3a41367', title: 'PATENT_TITLE_2145' },
        { id: 'f09393b6-7173-445d-a795-f38c79d0e902', title: 'PATENT_TITLE_3273' },
        { id: 'e6c515e9-a104-4049-a977-3205b67dd536', title: 'PATENT_TITLE_9017' },
        { id: '99b23265-6b42-4502-b633-2e8b9309a5a3', title: 'PATENT_TITLE_6863' },
        { id: '6f9b9017-a756-41ad-b0f8-bdc7522b70b3', title: 'PATENT_TITLE_7687' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App