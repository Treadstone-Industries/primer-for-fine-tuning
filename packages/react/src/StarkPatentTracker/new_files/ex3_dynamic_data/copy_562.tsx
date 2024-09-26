import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ad299c76-6005-4bd3-8b36-ff84ecb5202b', title: 'PATENT_TITLE_8628' },
        { id: '6e49b244-1f61-4fb4-9bd3-550892b5bf01', title: 'PATENT_TITLE_4070' },
        { id: '163888aa-68a2-42a1-9944-49a7f1a27727', title: 'PATENT_TITLE_3375' },
        { id: '421cdda8-f6dc-4b6b-bd25-f023c42ca96d', title: 'PATENT_TITLE_5651' },
        { id: 'dbce8ca9-e210-4dfa-8034-5eab041b2cfc', title: 'PATENT_TITLE_1207' },
        { id: '082c3711-db6a-4360-bb5b-3a18d1864b78', title: 'PATENT_TITLE_6693' },
        { id: 'fbdfff19-0915-4040-8dd1-bb468d88e177', title: 'PATENT_TITLE_9198' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App