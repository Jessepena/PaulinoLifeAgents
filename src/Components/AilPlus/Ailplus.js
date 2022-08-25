import Form from "../Form/Form";
import Portrait from "../Portrait/Portrait";
import TextDivider from "../Common/TextDivider";
import ResponsiveCards from "../ResponsiveCards/ResponsiveCards";
import AilPlusCard from "../../Images/AilPlusCard.png";
import AilPlusImg from "../../Images/AilPlus.png";

export default function AilPlus() {
	return (
		<section>
			<div className="d-flex flex-column justify-content-center align-items-center mb-5">
				<Portrait img={AilPlusImg} />
				<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
					<h3 className="text-justify">
						<strong>
							The AIL Plus program connects members to convenient discounts on
							dental care, prescriptions, diabetic supplies, vision care and
							supplies, telemedicine, chiropractic care and more.
						</strong>
					</h3>
				</div>
			</div>
			<TextDivider
				title="What you'll get"
				description="You deserve the best, get AIL Plus today at no-cost"
			/>
			<ResponsiveCards />
			<div className="d-flex align-items-center justify-content-center my-5">
				<img src={AilPlusCard} className="imageSize" alt="" />
			</div>
			<Form formTitle="Request your no-cost AIL Plus Discount card today!" 
				tab="AIL Plus Discount card"/>
		</section>
	);
}
