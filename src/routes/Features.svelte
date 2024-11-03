<section class="page-section service" id="features">
	<div class="container" data-aos="fade-up" data-aos-delay="500">
		<h2 class="text-center">Features</h2>
		<div class="small-container">
			<div class="card bg-secondary" data-aos="zoom-up" data-aos-delay="600">
				<div class="card-body">
					<div class="bg-success circle">$</div>
					<h2 class="card-title">Home</h2>
					<h5 class="card-title">Expose Tracking</h5>
					<p class="card-text">Lorem ipsum dolor sit amet</p>
					<a href="#" class="btn btn-primary rounded-pill">Get Started</a>
				</div>
			</div>

			<div class="card bg-success" data-aos="zoom-up" data-aos-delay="700">
				<div class="card-body">
					<div class=" circle">$</div>
					<h2 class="card-title text-white">Feature</h2>
					<h5 class="card-title">Expose Tracking</h5>
					<p class="card-text">Lorem ipsum dolor sit amet</p>
					<a href="#app" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>

			<div class="card bg-primary" data-aos="zoom-up" data-aos-delay="800">
				<div class="card-body">
					<div class="bg-silver circle">$</div>
					<h2 class="card-title text-white">Abount</h2>
					<h5 class="card-title">Expose Tracking</h5>
					<p class="card-text">Lorem ipsum dolor sit amet</p>
					<a href="#about" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>

			<div class="card bg-info" data-aos="zoom-up" data-aos-delay="900">
				<div class="card-body">
					<div class="circle">#</div>
					<h2 class="card-title text-white">Contact</h2>
					<h5 class="card-title">Expose Tracking</h5>
					<p class="card-text">Lorem ipsum dolor sit amet</p>
					<a href="#contact" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>

			<div class="card bg-secondary" data-aos="zoom-up" data-aos-delay="1000">
				<div class="card-body-bg"></div>
				<div class="card-body">
					<div class="bg-success circle">%</div>
					<h2 class="card-title">App</h2>
					<h5 class="card-title">Expose Tracking</h5>
					<p class="card-text">Lorem ipsum dolor sit amet</p>
					<a href="#app" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.small-container {
		max-width: 72rem;
		margin: 0 auto;
		/* border-radius: 12rem; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
	}
	.service {
		
		/* background-color: #d9d7d8; */
	}

	.card {
		/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.4),  11px 11px 11px rgba(0, 0, 0, 0.1); */

		/* box-shadow: ; */
		box-shadow:
			0.1em 0.1em 0.2em rgba(0, 0, 0, 0.4),
			1.1em 1.1em 1.1em rgba(0, 0, 0, 0.1),
			inset 5rem 5rem 5rem rgba(255, 255, 255, 0.2);
		overflow: hidden;
		margin-bottom: 1rem;

		.card-body {
			padding: 2rem;
			.card-title {
				/* font-size: 2rem; */
				font-weight: 600;
				margin-bottom: 0.5rem;
			}
			text-align: center;
		}

		border-top-left-radius: 50rem;
		border-top-right-radius: 50rem;
		border-bottom-left-radius: 20rem;
		border-bottom-right-radius: 20rem;

		border: none;
		box-shadow:
			/* rgba(0, 0, 0, 0.17) -10px -10px 10px 0px inset, */
			/* rgba(0, 0, 0, 0.15) -15px -15px 15px 0px inset, */
			rgba(0, 0, 0, 0.1) -40px -40px 20px 0px inset,
			rgba(0, 0, 0, 0.06) 2px 2px 1px,
			rgba(0, 0, 0, 0.09) 4px 4px 2px,
			rgba(0, 0, 0, 0.09) 8px 8px 4px,
			rgba(0, 0, 0, 0.09) 16px 16px 8px,
			rgba(0, 0, 0, 0.09) 32px 32px 16px,
			-1px -1px 15px -8px rgba(0, 0, 0, 0.09);

		max-width: 194px;
		justify-self: center;
	}

	.circle {
		/* z-index: 1; */
		/* position: absolute; */
		inset: 0px;
		/* transform: translateX(-95px); */
		box-shadow:
			rgba(0, 0, 0, 0.17) -10px -10px 10px 0px inset,
			rgba(0, 0, 0, 0.15) -15px -15px 15px 0px inset,
			rgba(0, 0, 0, 0.1) -40px -40px 20px 0px inset,
			rgba(0, 0, 0, 0.06) 2px 2px 1px,
			rgba(0, 0, 0, 0.09) 4px 4px 2px,
			rgba(0, 0, 0, 0.09) 8px 8px 4px,
			rgba(0, 0, 0, 0.09) 16px 16px 8px,
			rgba(0, 0, 0, 0.09) 32px 32px 16px,
			-1px -1px 15px -8px rgba(0, 0, 0, 0.09);
		border-radius: 100%;
		width: 7rem;
		height: 7rem;

		margin-top: 1rem;
		margin-bottom: 1rem;
		justify-self: center;

		/* transition: transform 800ms cubic-bezier(1, -0.4, 0, 1.4); */
		background-color: rgb(177, 212, 236);

		font-size: 4rem;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;

		text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.24);
		color: white;
	}

	.card {
		display: inline-block;
	}
</style>
