import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '43c35495-919c-4d56-a47a-c6785de94c04', title: 'PATENT_TITLE_2265' },
        { id: '7a2883d6-34f4-4b75-b4df-f1ef8f18188f', title: 'PATENT_TITLE_3237' },
        { id: '74e3b292-b047-4944-91b1-0d4dd86e9517', title: 'PATENT_TITLE_6092' },
        { id: 'c7daa4a3-ed03-475c-bb30-268a00d501dd', title: 'PATENT_TITLE_5309' },
        { id: '4a053863-8896-4707-8b11-ce3ff22e7d56', title: 'PATENT_TITLE_1289' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App