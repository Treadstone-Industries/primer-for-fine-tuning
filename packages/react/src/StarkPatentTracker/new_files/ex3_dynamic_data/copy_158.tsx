import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e60b93aa-0b5b-4e4d-a35f-d49101e16c8a', title: 'PATENT_TITLE_2707' },
        { id: 'fb880601-48ff-434a-aa0e-e491be99fd02', title: 'PATENT_TITLE_2588' },
        { id: '64c61ea4-7ab8-4d93-ba17-c7ba8673f2dd', title: 'PATENT_TITLE_5958' },
        { id: '7e493d60-384a-4845-9498-dcd3802212c2', title: 'PATENT_TITLE_8000' },
        { id: '848951e3-ae5a-453b-829e-c6759ad2fc09', title: 'PATENT_TITLE_1183' },
        { id: '4f33549b-8059-4978-8827-f857f6b820fa', title: 'PATENT_TITLE_1193' },
        { id: '05da12d2-e543-43a7-8f3a-6c55269f9d55', title: 'PATENT_TITLE_1853' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App