import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '17486a03-94f9-400d-9bc3-1413ab6ab59a', title: 'PATENT_TITLE_1646' },
        { id: '5b274b71-46ef-4ea1-a130-01f09da92d8f', title: 'PATENT_TITLE_8532' },
        { id: 'f95c13cd-fb1f-4ff6-923b-2f1eb88a539f', title: 'PATENT_TITLE_4779' },
        { id: '9ae96f23-8a30-4a5d-8898-41cf40c84990', title: 'PATENT_TITLE_1354' },
        { id: '8870d4fd-c0fb-4253-9b82-04906a1b13b6', title: 'PATENT_TITLE_1840' },
        { id: '0459b320-3189-4b80-960d-fe20f42890ad', title: 'PATENT_TITLE_7093' },
        { id: '4349cd83-2b2e-45a7-82e0-a236b0107956', title: 'PATENT_TITLE_1564' },
        { id: '779114fb-3a1f-43dc-98b2-d27e6cbef474', title: 'PATENT_TITLE_7741' },
        { id: 'a8ff1e73-19b2-44b3-8b4b-ae471c78e668', title: 'PATENT_TITLE_5131' },
        { id: 'eed18061-bda6-427d-8c96-e0f907d24f07', title: 'PATENT_TITLE_6910' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App