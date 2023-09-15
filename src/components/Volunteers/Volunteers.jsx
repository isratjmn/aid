import getVolunteersFromDB from "@/util/getVolunteersFromDB";
import SingleVolunteer from "./SingleVolunteer";
const Volunteers = async () => {
	const volunteers = await getVolunteersFromDB();
	return (
		<div className="max-w-7xl mx-auto mt-1">		
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5 mx-6">
				{volunteers.map((volunteer) => (
					<SingleVolunteer
						key={volunteer._id}
						volunteer={volunteer}
					></SingleVolunteer>
				))}
			</div>
		</div>
	);
};
export default Volunteers;
