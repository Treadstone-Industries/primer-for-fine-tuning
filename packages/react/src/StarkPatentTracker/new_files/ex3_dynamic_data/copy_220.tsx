import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1d526657-abb6-4506-8721-2053b0d785b0', title: 'PATENT_TITLE_7273' },
        { id: '0972e4e3-48d6-4b68-8bdd-89de101be0a9', title: 'PATENT_TITLE_4704' },
        { id: '714ea11d-6f90-4387-8c63-6cfec0fe04b1', title: 'PATENT_TITLE_3464' },
        { id: 'a2a6b0bb-6731-44a1-963c-ee9d5ad6eb80', title: 'PATENT_TITLE_2666' },
        { id: '4df692a8-5bd6-476f-9cf4-ec97eadacc62', title: 'PATENT_TITLE_6486' },
        { id: '59cad8d8-8808-4527-9329-61c992442ec5', title: 'PATENT_TITLE_1045' },
        { id: '21160459-d255-4a4b-b843-5ce2882aaa43', title: 'PATENT_TITLE_4084' },
        { id: '2b79b138-0337-4ae3-affa-49e95cc5cc8f', title: 'PATENT_TITLE_5927' },
        { id: '52575af3-f654-4fb8-ad34-b03f6a17952e', title: 'PATENT_TITLE_7667' },
        { id: '44d4862e-03e2-4a55-a353-3b749db34a18', title: 'PATENT_TITLE_5159' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App