import React,{ useState } from 'react';
 
 function Form() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [listData, setListData] = useState([])
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name === '' || email === '' || password === '') {
  //     setError(true);
  //   } else {
  //     setSubmitted(true);
  //     setError(false);
  //   }
  // };


  function handleSubmit() {
    debugger;
    setListData((listdata) => {
        const updatedList = [...listData, name,email,password]
        console.log(listData);
        console.log(updatedList);
        setName('')
        setEmail('')
        setPassword('')
        return updatedList
    })
    
}
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
 
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  function removeActivity(i){
    const updatedListData = listData.filter((elem, id) => {
        return i!= id;
    })
    setListData(updatedListData);
}

const tableRows = listData.map((data, i) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.emai}</td>
      <td>{data.password}</td>
      <td><button className='btn-position' onClick={() => removeActivity(i)}>Remove</button></td>
    </tr>
  );
});

  return (
    <div className="form">
      <div>
        <h1 className='h1class'>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 <br/>
 <br/>
        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
      </form>
      <p className='list-heading'><b>User Data</b></p>
        <table>
            <thead>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>       
                  
    </div>
    
  );
}

export default Form