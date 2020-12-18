import React from 'react';
import '../../css/AddNewStudent.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from '../../axios';



function AddNewStudent() {

    const sendDetails = (e)=>{
        e.preventDefault();
        console.log(e.target.elements.index.value)
        console.log(e.target.elements.fullName.value)

    }

  
    return (
        
        <div>
            <div className="AddNewStudent__header">
                <h3>Add New Student</h3>
            </div>
            <div className="AddNewStudent__formContainer">
                <form onSubmit={sendDetails} >
                <h2>Main details</h2> 
                    <div className="mainDetails">
                       
                        <div className="left">
                            <div className="leftInside">
                                <label htmlFor="index">Index</label>
                                <input id="index" name="index"  type="text"/>
                            </div>

                            <div className="leftInside">
                            <label htmlFor="fullName">fullName</label>
                            <input id="fullName" name="fullName" type="text"/>
                            </div>
{/* 
                            <div className="leftInside">
                            <label htmlFor="address">address</label>
                            <input id="address"  type="text"/>
                            </div>
                            
                           <div className="leftInside">
                           <label htmlFor="landNum">Land Number</label>
                            <input id="landNum" type="text"/>
                           </div> */}
                            
                            
                        </div>

                        {/* <div className="right">
                            <div className="rightInside">
                            <label htmlFor="mobileNum">mobileNum</label>
                            <input id="mobileNum" type="text"/>
                            </div>

                            <div className="rightInside">
                            <label htmlFor="motherName">motherName</label>
                            <input id="motherName" type="text"/>
                            </div>

                            <div className="rightInside">
                            <label htmlFor="fatherName">fatherName</label>
                            <input id="fatherName" type="text"/>
                            </div>

                            
                            
                        </div>   */}
                        
                    </div>
                    {/* <br/> <br/> */}

                {/* <h2>Sem results</h2>

                    <div className="semResult">
                        

                    <div className="sem">
                        <h4>Semester 1</h4>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                    </div>

                    <div className="sem">
                        <h4>Semester 2</h4>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                    </div>

                    <div className="sem">
                        <h4>Semester 3</h4>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" placeholder="subject"/>  : <input type="text" placeholder="marks"/>
                        </div>
                    </div>

                    </div> */}

                    
                    
                        <input type="submit"/>
                </form>
                
              
            </div>
        </div>
    )
}

export default AddNewStudent
