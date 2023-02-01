import React from 'react'

const UserDetails = (props) => {
  return (
    <>
      <div className="row">
        {/* <pre>{JSON.stringify(props.details)}</pre> */}
        <div className="col-12">
        <h1>USER DETAILS</h1>
            <div className="card">
              <div className="card-header">
                <img src={props.details.image} alt="" />
              </div>
              <div className="card-body">
                <ul className='list-group'>
                  <li className='list-group-item'><label htmlFor=""><b>Name - </b></label>{props.details.firstName} {props.details.lastName}</li>
                  <li className='list-group-item'><label htmlFor=""><b>Age - </b></label>{props.details.age}</li> 
                  <li className='list-group-item'><label htmlFor=""><b>Email - </b></label>{props.details.email}</li>
                  <li className='list-group-item'><label htmlFor=""><b>Phoen -</b> </label>{props.details.phone}</li>
                  <li className='list-group-item'><label htmlFor=""><b>DOB - </b></label>{props.details.birthDate}</li>
                  <li className='list-group-item'><label htmlFor=""><b>Gender - </b></label>{props.details.gender}</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails