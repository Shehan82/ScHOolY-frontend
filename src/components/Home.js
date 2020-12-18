import React from 'react';
import '../css/Home.css';
import CardsForHome from './CardsForHome';

function Home() {
 
    

    return (
        <div>
            <div className="Home__header">
                <h3>Home</h3>
            </div>
            <div className="HomeBody">
               <CardsForHome image={"https://us.123rf.com/450wm/azvector/azvector1809/azvector180900204/109861313-stock-vector-student-icon-education-concept-icon-with-add-sign-student-icon-and-new-plus-positive-symbol.jpg?ver=6"} title={"Add new student"}/>
               <CardsForHome image={"https://cdn2.iconfinder.com/data/icons/symbol-color-common-6/32/information-edit-512.png"} title={"Update student details"}/>
               <CardsForHome image={"https://previews.123rf.com/images/azvector/azvector1809/azvector180900168/108450534-female-student-icon-graduation-cap-education-concept-icon-with-cancel-sign-student-icon-and-close-de.jpg"} title={"Remove student"}/>
               <CardsForHome image={"https://cdn.icon-icons.com/icons2/364/PNG/256/Plus_36851.png"} title={"Add New grade"}/>
               <CardsForHome image={"https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png"} title={"Update grade"}/>
               <CardsForHome image={"https://www.flaticon.com/svg/static/icons/svg/189/189690.svg"} title={"Remove grade"}/>
            </div>
        </div>
    )
}

export default Home
