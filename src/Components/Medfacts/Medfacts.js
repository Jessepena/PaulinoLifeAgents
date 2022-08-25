import Portrait from "../Portrait/Portrait";
import MedfactsImg from "../../Images/MedfactsImg.png";
import MedfactsImage from "../../Images/Medfacts.png";
import Form from "../Form/Form";

export default function Medfacts() {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center mb-5">
			<Portrait img={MedfactsImage} />
			<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
				<p className="text-justify">
					It is of particular importance that seniors are diligent about their
					own healthcare, as they are usually the most at risk for complications
					and mistakes in emergency situations. On average, 1 in 2 adults over
					the age of 64 visits a hospital emergency room every year. Even more
					frightening, medical errors kill more than a quarter million people
					every year in the U.S. Between April and September of 2013, there were
					227,597 recorded medical accidents and errors in Quebec’s Health
					Ministry. This small, six-month sample is a frightening insight into
					the larger picture. More than half of those incidents involved senior
					citizens.
				</p>
				<img src={MedfactsImg} className="py-5 img-fluid" alt="" />
				<Form formTitle="Get your no cost MedFacts kit today!" />
			</div>
		</div>
	);
}
