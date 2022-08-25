import IconCard from "../Common/IconCard";
import DiabeticSupplies from "../../Icons/DiabeticSupplies.png";
import HearingAids from "../../Icons/HearingAids.png";
import LabTesting from "../../Icons/LabTesting.png";
import MedicalEquipment from "../../Icons/MedicalEquipment.png";
import MRIandCTscans from "../../Icons/MRIandCTscans.png";
import NBTelemedicine from "../../Icons/NBTelemedicine.png";
import Dental from "../../Icons/Dental.png";
import Vision from "../../Icons/Vision.png";
import Vitamins from "../../Icons/Vitamins.png";
import RetailPharmacy from "../../Icons/RetailPharmacy.png";

export default function ResponsiveCards() {
	return (
		<>
			<section className="container d-none d-lg-block">
				<div className="d-lg-flex justify-content-center">
					<IconCard
						icon={DiabeticSupplies}
						text="Diabetic Supplies"
						iconSize={2}
					/>
					<IconCard icon={HearingAids} text="Hearing Aids" iconSize={2} />
					<IconCard icon={RetailPharmacy} text="Retail Pharmacy" iconSize={2} />
					<IconCard icon={LabTesting} text="Lab Testing" iconSize={2} />
				</div>
				<div className="d-lg-flex justify-content-center">
					<IconCard icon={MRIandCTscans} text="MRI and CT Scans" iconSize={2} />
					<IconCard icon={Vitamins} text="Vitamins" iconSize={2} />
					<IconCard icon={Vision} text="Vision" iconSize={2} />
				</div>
				<div className="d-lg-flex justify-content-center">
					<IconCard icon={Dental} text="Dental" iconSize={2} />
					<IconCard
						icon={MedicalEquipment}
						text="Medical Equipment"
						iconSize={1}
					/>
					<IconCard icon={DiabeticSupplies} text="Chiropractic" iconSize={2} />
					<IconCard icon={NBTelemedicine} text="NBTelemedicine" iconSize={2} />
				</div>
			</section>
			<section className="d-lg-none">
				<div className="row row-cols-auto justify-content-center">
					<div className="col">
						<IconCard
							icon={DiabeticSupplies}
							text="Diabetic Supplies"
							iconSize={1}
						/>
					</div>
					<div className="col">
						<IconCard icon={HearingAids} text="Hearing Aids" iconSize={1} />
					</div>
					<div className="col">
						<IconCard
							icon={RetailPharmacy}
							text="Retail Pharmacy"
							iconSize={1}
						/>
					</div>
					<div className="col">
						<IconCard icon={LabTesting} text="Lab Testing" iconSize={1} />
					</div>
					<div className="col">
						<IconCard
							icon={MRIandCTscans}
							text="MRI and CT Scans"
							iconSize={1}
						/>
					</div>
					<div className="col">
						<IconCard icon={Vitamins} text="Vitamins" iconSize={1} />
					</div>
					<div className="col">
						<IconCard icon={Vision} text="Vision" iconSize={1} />
					</div>
					<div className="col">
						<IconCard icon={Dental} text="Dental" iconSize={1} />
					</div>
					<div className="col">
						<IconCard
							icon={MedicalEquipment}
							text="Medical Equipment"
							iconSize={1}
						/>
					</div>
					<div className="col">
						<IconCard
							icon={DiabeticSupplies}
							text="Chiropractic"
							iconSize={1}
						/>
					</div>
					<div className="col">
						<IconCard
							icon={NBTelemedicine}
							text="NBTelemedicine"
							iconSize={1}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
