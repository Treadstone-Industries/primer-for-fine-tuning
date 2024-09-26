import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '09f674ab-ebdd-4523-a8b5-5e4ddd35b282', title: 'PATENT_TITLE_2177' },
            { id: '01cf8057-52b4-4d61-a2e9-f79b5beef797', title: 'PATENT_TITLE_2164' },
            { id: 'a0b6e487-5147-4879-8806-29df33881fd1', title: 'PATENT_TITLE_6600' },
            { id: 'b97475e7-8cbb-43e4-bc80-4aee39def42f', title: 'PATENT_TITLE_3450' },
            { id: '645eff3e-2bba-41b1-9901-ccbe9a2b054a', title: 'PATENT_TITLE_2665' },
        ]}
    />
)

export default App