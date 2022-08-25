import Form from "../Form/Form";
import Portrait from "../Portrait/Portrait";
import ChildSafeKitImg from "../../Images/ChildSafeKit.png";
import CSK from "../../Images/CSK.png";
import CSK1 from "../../Icons/CSK1.png";
import CSK2 from "../../Icons/CSK2.png";
import IconCard from "../Common/IconCard";

export default function ChildSafeKit() {
	return (
		<section>
			<div className="d-flex flex-column justify-content-center align-items-center mb-5">
				<div className="ms-5">
					<Portrait img={ChildSafeKitImg} />
				</div>
				<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
					<h2 className="font30 weight700">
						Order your No-Cost Child Safe Kit Today!
					</h2>
					<p className="text-justify mt-5">
						If your child is reported missing, a no-cost Child Safe Kit® will
						have all the important information about your child ready, saving
						valuable time in helping authorities find them.
					</p>
				</div>
				<div className="d-lg-flex container justify-content-center align-items-center">
					<IconCard
						icon={CSK1}
						text="Learn ways to improve your child’s safety with valuable information."
						iconSize={2}
						horizontal={true}
					/>
					<IconCard
						icon={CSK2}
						text="Each Kit comes with a variety of ways for you to document important information."
						iconSize={2}
						horizontal={true}
					/>
				</div>
				<img src={CSK} className="py-5 csk img-fluid" alt="" />
				<h2 className="font25 gray weight700 d-lg-flex container">
					The kit helps you record your child's
					<div className="scroller ms-2">
						<span>
							<span>fingerprint</span>
							<br />
							<span className="red">blood type</span>
							<br />
							<span className="green">weight and height</span>
							<br />
							<span className="blue">and more</span>
						</span>
					</div>
				</h2>
			</div>

			<Form formTitle="Request your no-cost Child Safe Kit Today!" 
			tab="Child Safe Kit"/>
		</section>
	);
}
