import React from 'react'

const PropertyTable = ({propertyReduxData}) => {
		return (
				<div>
		<table className="table table-hover">
    <thead>
      <tr>
        <th>Address</th>
        <th>Postcode</th>
        <th>Number of rooms</th>
								<th>Floor area (m<sup>2</sup>)</th>
      </tr>
    </thead>
    <tbody>
					{
						propertyReduxData.map((address,index)=>{
							return<tr key={index}>
							<td>{address.Address}</td>
							<td>{address.Postcode}</td>
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

export default PropertyTable