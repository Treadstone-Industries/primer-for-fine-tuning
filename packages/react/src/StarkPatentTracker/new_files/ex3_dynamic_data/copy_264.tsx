import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4fb04825-a448-4c38-ba5a-39a98828fdce', title: 'PATENT_TITLE_4579' },
        { id: 'c3dc4473-ecce-4255-acd2-d256c8b7b805', title: 'PATENT_TITLE_5093' },
        { id: '79c4d994-9bd8-44fd-8ff4-a67a0502092c', title: 'PATENT_TITLE_2296' },
        { id: '55611919-cae4-44c3-a79a-c63f8074aff6', title: 'PATENT_TITLE_5546' },
        { id: '85827b10-1cbc-416f-8129-a82abd4a0f2f', title: 'PATENT_TITLE_3364' },
        { id: 'df5dd438-b20d-450f-9cd8-9c97ac4ce063', title: 'PATENT_TITLE_3080' },
        { id: '53ee02ee-d11e-4ee4-af1e-d7e81a00ae0a', title: 'PATENT_TITLE_7852' },
        { id: '2f443e58-8646-48d4-bcb3-84a3f309414c', title: 'PATENT_TITLE_3904' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App