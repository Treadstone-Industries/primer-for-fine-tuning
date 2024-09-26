import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fb51e02f-e3e5-4ed8-9bb0-b6695a752902', title: 'PATENT_TITLE_8145' },
            { id: 'da5dfefd-8cfa-489a-9c99-e24bf6750350', title: 'PATENT_TITLE_2154' },
            { id: '7be5e39a-89cb-41e4-bf6a-774a0c98d591', title: 'PATENT_TITLE_8798' },
            { id: '42f9f1c2-9cf2-4919-a65f-a420cd25ba09', title: 'PATENT_TITLE_8205' },
            { id: '33ed60fd-dea4-43eb-adcf-665d747ca6d7', title: 'PATENT_TITLE_7842' },
            { id: '627c5379-593a-469b-a7d2-8dd471a41bf8', title: 'PATENT_TITLE_7212' },
            { id: '31818aac-c0ac-43ac-beed-6a991d7f4ebf', title: 'PATENT_TITLE_5747' },
            { id: '0c389fda-36c2-49aa-b4b5-f59773693d76', title: 'PATENT_TITLE_1570' },
            { id: 'cf4e9a4f-9f96-4402-8e1f-606e531c2c38', title: 'PATENT_TITLE_8399' },
            { id: '465d22aa-5d07-41e7-8189-ebaa4f4e8087', title: 'PATENT_TITLE_9428' },
        ]}
    />
)

export default App