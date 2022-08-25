import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ButtonMailTo({ mailto, label }) {
	return (
		<Link
			to="#"
			onClick={(e) => {
				window.location.href = mailto;
				e.preventDefault();
			}}
		>
			<span>
				<span className="d-none d-md-block">
					<FontAwesomeIcon icon={faEnvelope} className="me-2" />
					{label}
				</span>
				<span className="d-md-none">
					<FontAwesomeIcon icon={faEnvelope} className="me-2" />
					Email me
				</span>
			</span>
		</Link>
	);
}
