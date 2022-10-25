import React from 'react'

const TypeTable = ({reduxPropertyType}) => {
		return (
				<div>
		<table className="table table-hover">
    <thead>
      <tr>
							<th><i className="fa-solid fa-check"></i></th>
        <th>Address</th>
        <th>Postcode</th>
								<th>Property type</th>
        <th>Number of rooms</th>
								<th>Floor area (m<sup>2</sup>)</th>
      </tr>
    </thead>
    <tbody>
					{
						reduxPropertyType.map((address,index)=>{
							return<tr key={index}>
									<td>{address.check}</td>
							<td>{address.Address}</td>
							<td>{address.Postcode}</td>
							<td>{address.Type}</td>
							<td>{address.NoOfRooms}</td>
							<td>{address.Area}</td>
					</tr>

						})
					}
   
    </tbody>
  </table>
				</div>
		)
}

export default TypeTable