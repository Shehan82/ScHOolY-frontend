import React from 'react';
import '../../css/AddNewStudent.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from '../../axios';



function AddNewStudent() {

    const sendDetails = (e)=>{
        e.preventDefault();
        console.log(e.target.elements.index.value)
        console.log(e.target.elements.sem1_sub1.value)

        

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
                            <label htmlFor="fullName">Full Name</label>
                            <input id="fullName" name="fullName" type="text"/>
                            </div>

                            <div className="leftInside">
                            <label htmlFor="address">Address</label>
                            <input id="address" name="address"  type="text"/>
                            </div>
                            
                           <div className="leftInside">
                           <label htmlFor="landNum">Telephone Number</label>
                            <input id="landNum" name="landNum" type="text"/>
                           </div>

                           <div className="leftInside">
                            <label htmlFor="mobileNum">Mobile Number</label>
                            <input id="mobileNum" name="mobileNum" type="text"/>
                            </div>
                            
                            
                        </div>

                        <div className="right">
                            <div className="rightInside">
                            <label htmlFor="grade">Grade</label>
                            <input id="grade" name="grade" type="text"/>
                            </div>

                            <div className="rightInside">
                            <label htmlFor="class">Class</label>
                            <input id="class" name="class" type="text"/>
                            </div>

                            <div className="rightInside">
                            <label htmlFor="motherName">Mother's Name</label>
                            <input id="motherName" name="motherName" type="text"/>
                            </div>

                            <div className="rightInside">
                            <label htmlFor="fatherName">Father's Name</label>
                            <input id="fatherName" name="fatherName" type="text"/>
                            </div>

                            
                            
                        </div>  
                        
                    </div>
                    <br/> <br/>

                <h2>Sem results</h2>

                    <div className="semResult">
                        

                    <div className="sem">
                        <h4>Semester 1</h4>
                        <div className="sem_subject">
                            <input type="text" name="sem1_sub1" placeholder="subject"/>  : <input type="text" name="sem1_sub1_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem1_sub2" placeholder="subject"/>  : <input type="text" name="sem1_sub2_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem1_sub3" placeholder="subject"/>  : <input type="text" name="sem1_sub3_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem1_sub4" placeholder="subject"/>  : <input type="text" name="sem1_sub4_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem1_sub5" placeholder="subject"/>  : <input type="text" name="sem1_sub5_marks" placeholder="marks"/>
                        </div>
                    </div>

                    <div className="sem">
                        <h4>Semester 2</h4>
                        <div className="sem_subject">
                            <input type="text" name="sem2_sub1" placeholder="subject"/>  : <input type="text" name="sem2_sub1_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem2_sub2" placeholder="subject"/>  : <input type="text" name="sem2_sub2_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem2_sub3" placeholder="subject"/>  : <input type="text" name="sem2_sub3_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem2_sub4" placeholder="subject"/>  : <input type="text" name="sem2_sub4_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem2_sub5" placeholder="subject"/>  : <input type="text" name="sem2_sub5_marks" placeholder="marks"/>
                        </div>
                    </div>

                    <div className="sem">
                        <h4>Semester 3</h4>
                        <div className="sem_subject">
                            <input type="text" name="sem3_sub1" placeholder="subject"/>  : <input type="text" name="sem3_sub1_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem3_sub2" placeholder="subject"/>  : <input type="text" name="sem3_sub2_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem3_sub3" placeholder="subject"/>  : <input type="text" name="sem3_sub3_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem3_sub4" placeholder="subject"/>  : <input type="text" name="sem3_sub4_marks" placeholder="marks"/>
                        </div>
                        <div className="sem_subject">
                            <input type="text" name="sem3_sub5" placeholder="subject"/>  : <input type="text" name="sem3_sub5_marks" placeholder="marks"/>
                        </div>
                    </div>

                    </div>

                    
                    
                        <input type="submit"/>
                </form>
                
              
            </div>
        </div>
    )
}

export default AddNewStudent
