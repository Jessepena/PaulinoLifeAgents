import Form from "../Form/Form";
import Portrait from "../Portrait/Portrait";
import FreeWillKitImage from "../../Images/FreeWillKit.png";

export default function FreeWillKit() {
	return (
		<section>
			<div className="d-flex flex-column justify-content-center align-items-center mb-5">
				<Portrait img={FreeWillKitImage} />
				<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
					<h2 className="mt-5 mb-5 font30 weight600">
						Over 65% of Americans today DO NOT have a Will in place!
					</h2>
					<p className="text-justify">
						This is alarming because the purpose of a Will is to make sure your
						assets are properly handled when you die. Homes, cars, savings, life
						insurance and much more are all documented in a Will.
					</p>
					<p className="text-justify">
						Through the Will, you decide how your assets are distributed to the
						people you love. Without a Will, the State decides who gets what...
						if anything.
					</p>
					<h2 className="mt-5 font30 weight700">
						Sounds important? <span className="blue">It is.</span>
					</h2>
				</div>
			</div>

			<Form formTitle="Get in Touch!" tab="Free Will Kit"/>
		</section>
	);
}
