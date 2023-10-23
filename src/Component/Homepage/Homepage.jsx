import React from 'react'
import Header from '../Header/Header';
import Aboutus from '../Aboutus/Aboutus';
import Form from '../Form/Form';
import { Routes, Route } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <Header />
            {/* <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/gioi-thieu' element={<Aboutus />} />
                <Route path='/post' element={<Form />} />
            </Routes> */}
        </div>
    )
}

export default Homepage