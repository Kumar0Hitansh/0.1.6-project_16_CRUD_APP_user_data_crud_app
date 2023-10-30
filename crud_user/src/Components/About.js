import React from 'react'

import table from './table.png';
import adduser from './add user form.png';
import updateuser from './update user form.png';

const About = () => {
  return (<>


<div className="container-fluid">

<div className="row">
<div className="col-8">
<img src={table} alt="table" width='100%' />
</div>
<div className="col-4">
<h2>Table & Operation Section :-</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita sunt eveniet earum harum voluptas officia quo, doloribus quae deserunt officiis quasi culpa porro molestiae soluta! Obcaecati officia repellendus et!
</div>
</div>

<br /><br />
<div className="row">
<div className="col-3">
<h2>Add New User Form Field :-</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita sunt eveniet earum harum voluptas officia quo, doloribus quae deserunt officiis quasi culpa porro molestiae soluta! Obcaecati officia repellendus et!
</div>
<div className="col-3">
<img src={adduser} alt="adduser" width='100%' />
</div>
<div className="col-3">
<h2>Edit user Form field :-</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita sunt eveniet earum harum voluptas officia quo, doloribus quae deserunt officiis quasi culpa porro molestiae soluta! Obcaecati officia repellendus et!
</div>
<div className="col-3">
<img src={updateuser} alt="adduser" width='100%' />
</div>
</div>









    </div>


</>
  )
}

export default About