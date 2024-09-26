import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b1b8cfde-e81b-4f92-acec-50fab00a7c44', title: 'PATENT_TITLE_1636' },
            { id: 'ac04f07d-128e-4781-8f0c-e34836252da5', title: 'PATENT_TITLE_3439' },
            { id: '21c69424-23ef-4139-b43d-7d7eeea2a3d7', title: 'PATENT_TITLE_1923' },
            { id: '7dca531f-904b-4ec1-854f-ec4bdcd56065', title: 'PATENT_TITLE_1465' },
            { id: '8aaa0846-20a0-49c6-bf9d-f8a8e7774435', title: 'PATENT_TITLE_2631' },
            { id: '0866dbb8-5d86-4363-9909-7942578fec61', title: 'PATENT_TITLE_4082' },
            { id: '28bcc719-b31e-47df-8371-055d5e592a7c', title: 'PATENT_TITLE_6502' },
            { id: '126004fc-3761-4d1c-83ab-b6813450c701', title: 'PATENT_TITLE_6496' },
            { id: '7fc8ea6b-3560-46ed-8241-e70eea7480d1', title: 'PATENT_TITLE_1458' },
            { id: '68b93aed-41df-42f2-9055-2c0bd845c83c', title: 'PATENT_TITLE_7896' },
        ]}
    />
)

export default App