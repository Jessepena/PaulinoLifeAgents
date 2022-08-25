import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "bootstrap";
import check from "../../Images/check.png";
import error from "../../Images/error.png";

export default function Form(props) {
	const form = useRef();

	const textToShowInForm = props.tab !== "home" ?  ` to arrange a convenient time
	to deliver our ${props.tab}®(s) and explain additional insurance
	coverage available` : "";

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_t6rzntt",
				"template_hjelnck",
				form.current,
				"sAOsv7h-ZkI3BFFIN"
			)
			.then(
				(result) => {
					console.log(result.text);
					const toastLiveSuccess = document.getElementById("liveToast");
					const toast = new Toast(toastLiveSuccess);
					toast.show();
					form.current.reset();
				},
				(error) => {
					const toastLiveError = document.getElementById("liveToastError");
					const toast = new Toast(toastLiveError);
					toast.show();
					console.log(error.text);
				}
			);
	};

	return (
		<div className="container">
			<h4>{props.formTitle}</h4>
			<form id="form" className="form p-4 mb-4" ref={form} onSubmit={sendEmail}>
				<div className="mb-3">
					<div className="row">
						<div className="col-6">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="lastName" className="form-label">
								Last name
							</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								name="lastName"
								required
							/>
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label">
						Address
					</label>
					<input
						type="text"
						className="form-control"
						id="address"
						name="address"
						required
					/>
				</div>
				<div className="mb-3">
					<div className="row">
						<div className="col-6">
							<label htmlFor="city" className="form-label">
								City
							</label>
							<input
								type="text"
								className="form-control"
								id="city"
								name="city"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="state" className="form-label">
								State
							</label>
							<input
								type="text"
								className="form-control"
								id="state"
								name="state"
								required
							/>
						</div>
					</div>
				</div>
				<div className="mb-3">
					<div className="row">
						<div className="col-6">
							<label htmlFor="zipCode" className="form-label">
								Zip code
							</label>
							<input
								type="text"
								className="form-control"
								id="zipCode"
								name="zipCode"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="phoneNumber" className="form-label">
								Phone Number
							</label>
							<input
								type="tel"
								className="form-control"
								id="phoneNumber"
								name="phoneNumber"
								required
							/>
						</div>
					</div>
				</div>
				<input
					type="text"
					name="tab"
					id="tab"
					hidden
					readOnly
					value={window.location.pathname.slice(1)}
				/>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<p className="text-justify mt-3">
					By entering and submitting your information, you give consent for a
					licensed insurance agent to contact you{textToShowInForm}. You are also giving consent for these Companies to
					use automated or manual technology to call, text, or email you for
					insurance purposes at the telephone number above, including your
					wireless number. Please note, you are not required to provide this
					consent to make a purchase from these companies.
				</p>
			</form>

			<div className="toast-container position-fixed top-0 end-0 p-3">
				<div
					id="liveToast"
					className="toast text-bg-success"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div className="toast-header">
						<img src={check} className="rounded me-2 checkIcon" alt="..." />
						<strong className="me-auto">Success</strong>
						<small>Just now</small>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="toast"
							aria-label="Close"
						></button>
					</div>
					<div className="toast-body">
						The information has been sent successfully
					</div>
				</div>
			</div>
			<div className="toast-container position-fixed top-0 end-0 p-3">
				<div
					id="liveToastError"
					className="toast text-bg-danger"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div className="toast-header">
						<img src={error} className="rounded me-2 checkIcon" alt="..." />
						<strong className="me-auto">Error</strong>
						<small>Just now</small>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="toast"
							aria-label="Close"
						></button>
					</div>
					<div className="toast-body">
						Oops! There was an error sending the information
					</div>
				</div>
			</div>
		</div>
	);
}
