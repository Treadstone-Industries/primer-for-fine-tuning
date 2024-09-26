import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '34da79f3-80ef-4265-bc40-91770b37e944', title: 'PATENT_TITLE_5191' },
            { id: 'b87d0e8b-5ff5-44dd-9beb-ab025d9336bb', title: 'PATENT_TITLE_1381' },
            { id: '9156f5e7-700c-49a9-aa38-c86d3fc6c6ca', title: 'PATENT_TITLE_1452' },
            { id: '791d1146-f239-40c1-a18f-88e2f73b0fc5', title: 'PATENT_TITLE_4750' },
            { id: 'e3ae8d37-3c5a-491f-a6f8-34707bc85f63', title: 'PATENT_TITLE_2746' },
            { id: '1c3fe911-cff2-49af-a30d-b249f69e64a9', title: 'PATENT_TITLE_8279' },
            { id: '102b86db-781d-4c53-b035-3a7384830a55', title: 'PATENT_TITLE_2860' },
            { id: '8c216d8f-cfb3-4380-98cd-14bc5fa22b49', title: 'PATENT_TITLE_8273' },
            { id: '3d1ef077-c61e-44c3-9a57-a9569879911b', title: 'PATENT_TITLE_8539' },
        ]}
    />
)

export default App