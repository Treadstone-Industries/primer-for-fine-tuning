import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '08e2f1ef-52a3-4d31-abdd-3e525ba14235', title: 'PATENT_TITLE_9953' },
        { id: '9ad0d1c6-993b-4902-8952-c1ae89d25306', title: 'PATENT_TITLE_2779' },
        { id: '488fd3bc-c405-4e19-b960-59c7540d6653', title: 'PATENT_TITLE_5752' },
        { id: '975cd09c-b9f5-4358-9963-7e878167db16', title: 'PATENT_TITLE_4778' },
        { id: 'bcdadc96-b06d-4a8c-a5e2-34d8f75aee29', title: 'PATENT_TITLE_7207' },
        { id: 'e82c3882-616a-4d37-9c0e-bfbc39e981da', title: 'PATENT_TITLE_4347' },
        { id: 'e9984185-98b7-4fa2-b6cb-36d400456123', title: 'PATENT_TITLE_7868' },
        { id: '16fa0d4e-e541-4053-b65a-b21162152c65', title: 'PATENT_TITLE_8791' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App