<script>
	import coinGeen from '$lib/svg/Coin-green.svg';
	import coinBlue from '$lib/svg/Coin-blue.svg';
	import cointPink from '$lib/svg/Coin-pink.svg';
	import pig from '$lib/svg/pig2.svg';
	import dashboard from '$lib/svg/dashboard.svg';

	import { collection, getDoc, doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';

	let success = false;
	let error = false;
	let blockSubmition = false;
	let repeat = 0;
	let repeatDiff = 0;

	async function submit(event) {
		event.preventDefault();
		if (blockSubmition) return;
		blockSubmition = true;

		const email = event.target.email.value;

		console.log(email);

		const wishlist = collection(db, 'wishlist');

		try {
			// Read document
			const docRef = doc(wishlist, email);

			const document = await getDoc(docRef);
			if (document.exists()) {
				repeat++;
				await new Promise((resolve) => setTimeout(resolve, 2000+repeat*2000));

				console.log('Document data:', document.data());

				const data = document.data();
				const counter = data.counter + 1;

				await setDoc(docRef, { counter });

				console.log('Document rewritten with ID: ', docRef.id);
				success = true;
				
			} else {
				// Add a new document with a generated id.
				await new Promise((resolve) => setTimeout(resolve, repeatDiff*1000));

				await setDoc(docRef, {
					counter: 1
				});
				console.log('Document written with ID: ', docRef.id);
				success = true;

				repeatDiff++;
			}
		} catch (e) {
			console.error('Error adding document: ', e);
			error = true;
		} finally {
			blockSubmition = false;
		}

		// console.log(data);
	}
</script>

<section class="page-section hero" id="home">
	<div class="art">
		<div class="empty"></div>
		<div class="a">
			<img src={pig} alt="pig" class="pig" data-aos="zoom-in" data-aos-delay="300" />
			<img src={coinGeen} alt="coin" class="coin-green" data-aos="fade-down" data-aos-delay="400" />
		</div>
		<img src={coinBlue} alt="coin" class="d" data-aos="fade-down" data-aos-delay="600" />
		<img src={coinGeen} alt="coin" class="b" data-aos="fade-down" data-aos-delay="800" />
		<img src={coinBlue} width="70" alt="coin" class="e" data-aos="fade-down" data-aos-delay="900" />
		<img
			src={coinGeen}
			width="70"
			alt="coin"
			class="c"
			data-aos="fade-down"
			data-aos-delay="1000"
		/>
		<img src={cointPink} alt="coin" class="f" data-aos="fade-down" data-aos-delay="1100" />
		<div class="g">
			<img
				src={dashboard}
				alt="dashboard"
				class="dashboard"
				data-aos="zoom-in"
				data-aos-delay="900"
			/>
			<img src={cointPink} alt="coin" class="coin" data-aos="fade-down" data-aos-delay="900" />
			<img src={cointPink} alt="coin" class="coin2" data-aos="fade-down" data-aos-delay="900" />
		</div>
		<div></div>
	</div>
	<div class="container" data-aos="fade-up" data-aos-delay="100">
		<h1>Track Your Spending, Stay <br /> Financially Wise</h1>

		<div class="card bg-solid bg-info border-0 subscribe" data-aos="fade-up" data-aos-delay="400">
			<div class="card-body">
				<h5>Subscribe to our mailing list!</h5>
				<!-- CTA -->

				<!-- subscribe form -->
				<form id="contactForm" on:submit={submit}>
					{#if !blockSubmition && success}
						<div class="alert alert-dismissible alert-success">
							<button
								type="button"
								on:click={() => (success = false)}
								class="btn-close"
								data-bs-dismiss="alert"
							></button>
							<div class="fw-bolder">Thank you for subscribing to our mailing list!</div>
						</div>
					{/if}
					{#if !blockSubmition && error}
						<div class="alert alert-dismissible alert-danger">
							<button
								type="button"
								on:click={() => (error = false)}
								class="btn-close"
								data-bs-dismiss="alert"
							></button>
							Error sending message!
						</div>
					{/if}
					{#if blockSubmition}
						<div class="spinner-border text-primary" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					{/if}
					{#if !blockSubmition && !success && !error}
						<div class="form-floating input-group mb-3">
							<input
								class="form-control"
								id="email"
								required
								type="email"
								placeholder="name@example.com"
								data-sb-validations="required,email"
								data-sb-can-submit="no"
							/>
							<label for="email">Email address</label>
							<div class="invalid-feedback" data-sb-feedback="email:required">
								An email is required.
							</div>
							<div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>

							<!-- Submit success message-->
							<!---->
							<!-- This is what your users will see when the form-->
							<!-- has successfully submitted-->

							<button
								class="btn btn-primary"
								disabled={blockSubmition}
								type="submit"
								id="button-addon2"
							>
								Subscribe
							</button>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.subscribe {
		/* display: flex; */
		/* justify-content: center; */
		/* align-items: center; */
		max-width: 50rem;
		margin: 0 auto;
		padding: 1rem;

		border-radius: 2rem;

		.form-control {
			/* border-top-left-radius: 2rem; */
			/* border-bottom-left-radius: 2rem; */
			padding-top: 0.5rem;
		}
		/* .btn {
			border-top-right-radius: 2rem;
			border-bottom-right-radius: 2rem;
		} */
		h5 {
			font-weight: 600;
		}
		/* box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1); */
	}
	.page-section {
		position: relative;
	}
	.hero {
		display: flex;
		text-align: center;
		/* height: 40vh; */
		justify-content: center;
		align-items: center;

		h1,
		h5 {
			margin-bottom: 2rem;
		}
	}
	img {
		max-width: 100%;
	}

	.art {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-areas:
			'. . t t b .'
			'. . t t b .'
			'. . t t . .';

		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

		.empty {
			grid-area: t;
		}

		/* overflow: visible; */

		/* z-index: 1000; */
		.a {
			position: relative;
			justify-self: end;
			align-self: start;

			img.pig {
				width: 100%;
				height: auto;
			}

			width: 100%;
			.coin-green {
				left: 40%;
				top: -2rem;
				position: absolute;
			}

			.coin-green {
				width: 25%;
				height: auto;
			}
		}
		/* .a {
			align-self: end;
			justify-self: start;
		} */

		.b {
			align-self: start;
			justify-self: center;

			grid-area: b;
		}
		.c {
			align-self: center;
			justify-self: end;
		}
		.d {
			align-self: start;
			justify-self: end;
		}
		.e {
			align-self: end;
			justify-self: start;
		}
		.f {
			align-self: end;
			justify-self: end;
		}
		.g {
			grid-area: b;
			align-self: end;
			justify-self: start;
			position: relative;

			img.dashboard {
				width: 100%;
				height: auto;
			}

			.coin {
				position: absolute;
				width: 32%;
				top: -15%;
				left: 2%;
				height: auto;
			}

			.coin2 {
				position: absolute;
				width: 25%;
				bottom: 0;
				left: -15%;
				height: auto;
			}
		}

		.a,
		.b,
		.c,
		.d,
		.e,
		.f,
		.g {
			z-index: 2;
		}
	}

	.container {
		z-index: 3;
	}
</style>
