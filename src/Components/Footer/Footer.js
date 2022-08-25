import footerLogo from "../../Images/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ButtonMailTo from "../Common/ButtonMailTo";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="col-4">
				<img
					src={footerLogo}
					className="footerLogo img-fluid"
					alt="Footer logo"
				></img>
			</div>
			<div className="col-8">
				<div className="d-md-flex justify-content-evenly align-items-center">
					<div className="p-2">
						<h5>
							<strong>In association with</strong>
						</h5>
						<p className="m-0">Quintero & Partners</p>
						<p className="m-0">American Income Life</p>
					</div>
					<div className="p-2 d-none d-md-block">
						<div className="vr"></div>
					</div>

					<div className="hr ms-2 d-md-none"></div>
					<div className="p-2">
						<h6>
							<strong>Daniel N Paulino</strong>
						</h6>
						<a
							href="https://licenseesearch.fldfs.com/Licensee/2131846"
							target="_blank"
							rel="noreferrer"
						>
							Life Insurance Agent American Income Life FL License # W792452
						</a>
						<p className="mb-1">
							<ButtonMailTo
								label="info@paulinolifeagents.com"
								mailto="mailto:info@paulinolifeagents.com"
							/>
						</p>
						<a href="tel:+1 (407) 716-9869 ">
							<FontAwesomeIcon icon={faPhone} className="me-2" />
							+1 (407) 716-9869
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
