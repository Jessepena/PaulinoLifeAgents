import React from "react";

export default function TextDivider(props) {
	return (
		<section className="mb-5">
			<div className="d-flex align-items-center">
				<div className="divider"></div>
				<div className="mx-3 dividerText">{props.title}</div>
				<div className="divider"></div>
			</div>
			<div className="d-flex justify-content-center dividerDescription">
				<span>{props.description}</span>
			</div>
		</section>
	);
}
