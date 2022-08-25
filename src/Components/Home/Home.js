import Form from "../Form/Form";
import Portrait from "../Portrait/Portrait";
import homeImage from "../../Images/homeImage.png";

export default function Home() {
	return (
		<section>
			<div className="d-flex flex-column justify-content-center align-items-center mb-5">
				<Portrait img={homeImage} />
				<div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
					<p className="text-justify">
						<strong>Paulino Life Agents</strong> is a group of independent and
						entrepreneur agents located in Orlando, Florida. We are currently
						Junior Partners with Quintero & Partners, and Supervising Agents for
						American Income Life Insurance company, Daniel and Marissa Paulino
						have over 3 years of experience in the Insurance Industry.
					</p>
					<h2 className="mt-5 blue font30 weight700">
						We enjoy helping others feel safe.
					</h2>
				</div>
			</div>

			<Form formTitle="Get in Touch!" tab="home"/>
		</section>
	);
}
