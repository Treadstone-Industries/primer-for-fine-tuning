import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7e937cea-541d-46b9-afaa-9bc5ec8d14ed', title: 'PATENT_TITLE_1970' },
        { id: '6835e845-6d33-4a49-9e3a-515bf2e45014', title: 'PATENT_TITLE_7510' },
        { id: 'bd37afc0-fe69-4586-8a4d-d8efc459e592', title: 'PATENT_TITLE_7487' },
        { id: 'a453f57d-4547-4bc3-90c9-28b3f5ff1518', title: 'PATENT_TITLE_2067' },
        { id: 'fc4cf90e-aed4-4ead-b252-aa4b6451d967', title: 'PATENT_TITLE_6668' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App