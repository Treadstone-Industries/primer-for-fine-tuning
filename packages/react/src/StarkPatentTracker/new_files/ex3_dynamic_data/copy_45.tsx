import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '059c9ca8-a682-4b90-a9f5-2161499570f4', title: 'PATENT_TITLE_3764' },
        { id: '6757a01d-0a48-4e11-8355-38bbf5091301', title: 'PATENT_TITLE_5898' },
        { id: '410b5dc2-450b-44bb-bdcc-fed5944fede6', title: 'PATENT_TITLE_4890' },
        { id: '398d63af-d397-4e74-8047-39e01245a1bd', title: 'PATENT_TITLE_2134' },
        { id: '917989ed-1412-4214-9177-74ca446d056c', title: 'PATENT_TITLE_3817' },
        { id: '8f578f9f-7a74-4ab4-9a4b-a246e6f78937', title: 'PATENT_TITLE_3145' },
        { id: '4b81e29c-a723-4f18-840d-a164ca79c124', title: 'PATENT_TITLE_3974' },
        { id: 'c53c1994-605f-4e9c-a81c-0b5edee7265b', title: 'PATENT_TITLE_9658' },
        { id: '5f86196c-6355-463c-9036-87377612f6fe', title: 'PATENT_TITLE_6690' },
        { id: 'ca491a30-92ad-4383-9e30-79bc15de4c4f', title: 'PATENT_TITLE_5957' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App