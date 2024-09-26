import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '73735ff4-0442-4f94-a08b-ef507e0c7737', title: 'PATENT_TITLE_1120' },
        { id: '8efaa1c6-fdcb-4c66-bea1-7bdfc623b8ce', title: 'PATENT_TITLE_1349' },
        { id: '9da6dea8-8b16-4483-a44a-a044c0bfb3fa', title: 'PATENT_TITLE_3970' },
        { id: '1e6b8312-c4a0-4af9-93d3-a210c777501c', title: 'PATENT_TITLE_8856' },
        { id: '3c93b71a-6b80-4b07-9bb9-791816b2e700', title: 'PATENT_TITLE_2554' },
        { id: '085b588d-e6ca-41f5-8f4c-e44616bf1d68', title: 'PATENT_TITLE_7970' },
        { id: 'e86bf00e-1a98-4500-89bf-4c82e31b5987', title: 'PATENT_TITLE_7662' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App