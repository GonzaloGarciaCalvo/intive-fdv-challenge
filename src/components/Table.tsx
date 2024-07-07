import { Persons } from "../types";


function Table({persons}:Persons) {
  return (
		<div className="tableBox">
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>Country</th>
						<th>birthday</th>
					</tr>
				</thead>
				<tbody>
					{persons.length > 0 &&
						persons.map((p) => (
							<tr key={p.surname + p.name} className="line">
								<td style={{ width: "48%" }}>{`${p.name} ${p.surname}`}</td>
								<td style={{ width: "26%" }}>{p.country}</td>
								<td style={{ width: "26%" }}>{p.birthday}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
export default Table