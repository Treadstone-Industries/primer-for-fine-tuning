import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '558c82cf-55e4-45ff-98dd-f0c743f080a9', title: 'PATENT_TITLE_6082' },
            { id: 'a33ec855-7c59-4599-ae8c-c6fcc667c768', title: 'PATENT_TITLE_8297' },
            { id: '3ed85c74-076c-4bb0-b4ab-6521aedd89ed', title: 'PATENT_TITLE_2124' },
            { id: 'fa5ae7bf-717f-40d0-83d8-f9726a3ae860', title: 'PATENT_TITLE_8280' },
            { id: '84f280d9-0bb6-4f3a-9391-b8020530e997', title: 'PATENT_TITLE_9719' },
            { id: '9520bf17-23a9-4147-b988-616807025d18', title: 'PATENT_TITLE_6595' },
            { id: '097c77ac-225e-41a5-af1b-f7f8a56b33f2', title: 'PATENT_TITLE_9986' },
            { id: 'a7b32382-ee69-4585-9f76-15e6741502af', title: 'PATENT_TITLE_1413' },
        ]}
    />
)

export default App