import React from "react";

export default function IconCard(props) {
	const classname = "pb-2 iconSize" + props.iconSize;

	return !props.horizontal ? (
		<div className="iconCard d-flex flex-column py-3 px-2 align-items-center justify-content-center responsiveMargin">
			<img src={props.icon} className={classname} alt="" />
			<p className="m-0">{props.text}</p>
		</div>
	) : (
		<div className="iconCardHorizontal d-flex py-3 px-4 align-items-center justify-content-center responsiveMargin2">
			<img src={props.icon} className={classname} alt="" />
			<p className="m-0 ms-2">{props.text}</p>
		</div>
	);
}
