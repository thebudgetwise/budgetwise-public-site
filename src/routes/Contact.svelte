<script>
	import { t } from '$lib/i18n';

	import { collection, addDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';

	let success = false;
	let error = false;
	let blockSubmission = false;
	let repeat = 0;

	async function submit(event) {
		event.preventDefault();
		if (blockSubmission) return;
		blockSubmission = true;
		const contactRef = collection(db, 'contact');

		try {
			// add a new document with a generated id.
			repeat++;
			await new Promise((resolve) => setTimeout(resolve, 2000 + repeat * 500));

			await addDoc(contactRef, {
				name: event.target.name.value,
				email: event.target.email.value,
				phone: event.target.phone.value,
				message: event.target.message.value
			});

			// clear form
			event.target.name.value = '';
			event.target.email.value = '';
			event.target.phone.value = '';
			event.target.message.value = '';
			
			success = true;
		} catch (e) {
			error = true;
			console.error('Error adding document: ', e);
		} finally {
			blockSubmission = false;
		}
	}
</script>

<section class="page-section bg-light" id="contact">
	<div class="container px-4 px-lg-5" data-aos="fade-up" data-aos-delay="100">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8 col-xl-6 text-center">
				<h2 class="mt-0">
					{$t('contact.heading')}
				</h2>
				<hr class="divider" />
				<p class="text-muted mb-5">
					{$t('contact.subheading')}
				</p>
			</div>
		</div>
		<div class="row gx-4 gx-lg-5 justify-content-center mb-5">
			<div class="col-lg-6">
				<form id="contactForm" on:submit={submit}>
					<!-- Name input-->
					<div class="form-floating mb-3" data-aos="fade-up" data-aos-delay="300">
						<input
							class="form-control"
							id="name"
							required
							type="text"
							placeholder="Enter your name..."
							data-sb-validations="required"
							data-sb-can-submit="no"
						/>
						<label for="name">{$t('contact.fullName.label')}</label>
						<div class="invalid-feedback" data-sb-feedback="name:required">
							{$t('contact.fullName.requiredFeedback')}
						</div>
					</div>
					<!-- Email address input-->
					<div class="form-floating mb-3" data-aos="fade-up" data-aos-delay="400">
						<input
							class="form-control"
							id="email"
							required
							type="email"
							placeholder="name@example.com"
							data-sb-validations="required,email"
							data-sb-can-submit="no"
						/>
						<label for="email">
							{$t('contact.email.label')}
						</label>
						<div class="invalid-feedback" data-sb-feedback="email:required">
							{$t('contact.email.requiredFeedback')}
						</div>
						<div class="invalid-feedback" data-sb-feedback="email:email">
							{$t('contact.email.invalidFeedback')}
						</div>
					</div>
					<!-- Phone number input-->
					<div class="form-floating mb-3" data-aos="fade-up" data-aos-delay="500">
						<input
							class="form-control"
							id="phone"
							type="tel"
							placeholder="(123) 456-7890"
							data-sb-validations="required"
							data-sb-can-submit="no"
						/>
						<label for="phone">{$t('contact.phone.label')}</label>
						<div class="invalid-feedback" data-sb-feedback="phone:required">
							{$t('contact.phone.requiredFeedback')}
						</div>
					</div>
					<!-- Message input-->
					<div class="form-floating mb-3" data-aos="fade-up" data-aos-delay="600">
						<textarea
							class="form-control"
							id="message"
							type="text"
							placeholder={$t('contact.message.placeholder')}
							style="height: 10rem"
							data-sb-validations="required"
							data-sb-can-submit="no"
						></textarea>
						<label for="message">{$t('contact.message.label')}</label>
						<div class="invalid-feedback" data-sb-feedback="message:required">
							{$t('contact.message.requiredFeedback')}
						</div>
					</div>
					<!-- Submit success message-->
					<!---->
					<!-- This is what your users will see when the form-->
					<!-- has successfully submitted-->
					{#if success}
						<div id="submitSuccessMessage">
							<div class="text-center mb-3">
								<div class="fw-bolder">{$t('contact.submitSuccessMessage.title')}</div>
							</div>
						</div>
					{/if}
					<!-- Submit error message-->
					<!---->
					<!-- This is what your users will see when there is-->
					<!-- an error submitting the form-->
					{#if error}
						<div id="submitErrorMessage">
							<div class="text-center text-danger mb-3">{$t('contact.submitErrorMessage')}</div>
						</div>
					{/if}
					<!-- Submit Button-->
					<div class="d-grid" data-aos="fade-up" data-aos-delay="700">
						<button
							disabled={blockSubmission}
							class="btn btn-primary rounded-pill btn-lg"
							id="submitButton"
							type="submit">{$t('contact.submitButton')}</button
						>
					</div>
				</form>
			</div>
		</div>
		<!-- <div class="row gx-4 gx-lg-5 justify-content-center" data-aos="fade-up" data-aos-delay="100">
			<div class="col-lg-4 text-center mb-5 mb-lg-0">
				<i class="bi-phone fs-2 mb-3 text-muted"></i>
				<div>+1 (555) 123-4567</div>
			</div>
		</div> -->
	</div>
</section>
