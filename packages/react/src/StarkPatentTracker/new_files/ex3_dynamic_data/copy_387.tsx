import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b8347f65-70a1-463d-a318-d91ac8461748', title: 'PATENT_TITLE_1155' },
        { id: 'f5dcd2dd-16fe-49d2-b842-4a5feedfb342', title: 'PATENT_TITLE_3955' },
        { id: '1a90191c-c3fe-4c2a-9e48-09f845ae1e62', title: 'PATENT_TITLE_4317' },
        { id: '6ee05846-7acd-4c2a-bb71-5640ef03700a', title: 'PATENT_TITLE_7363' },
        { id: '488ece66-0b12-4d37-8e72-7b990fddd40f', title: 'PATENT_TITLE_3610' },
        { id: 'b4544243-906d-4b37-8c45-985ecbab28c2', title: 'PATENT_TITLE_4531' },
        { id: 'b393dac9-cc7d-49f4-a0c6-69f1315ced3a', title: 'PATENT_TITLE_3053' },
        { id: 'c317a670-bb0c-431c-922a-7d61a2c0805a', title: 'PATENT_TITLE_8228' },
        { id: '31d28a4a-0792-44ac-a89a-c9d6e881a3d3', title: 'PATENT_TITLE_3529' },
        { id: '13d4d76a-772d-47d8-ae40-ae80c5523103', title: 'PATENT_TITLE_1050' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App