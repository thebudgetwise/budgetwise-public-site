<script>
	import pig from '$lib/svg/pig.svg';
	import coinGeen from '$lib/svg/Coin-green.svg';
</script>

<section class="page-section service" id="features">
	<div class="art">
		<div class="pig">
			<img src={coinGeen} alt="coin" class="coin-green" data-aos="fade-down" data-aos-delay="600" />
			<img src={pig} alt="pig" class="pig" data-aos="zoom-in" data-aos-delay="400" />
		</div>
	</div>
	<div class="container" data-aos="fade-up" data-aos-delay="100">
		<h2 class="text-center">Why BWealthy</h2>
		<div class="small-container">
			<div class="card bg-secondary" data-aos="zoom-up" data-aos-delay="600">
				<div class="card-body">
					<div class="bg-success circle"><i class="bi-laptop fs-1"></i></div>
					<h2 class="card-title">Home</h2>
					<h5 class="card-title">Easy-to-use Interface</h5>
					<p class="card-text">Intuitive design to simplify your budgeting experience.</p>
					<a href="#" class="btn btn-primary rounded-pill">Get Started</a>
				</div>
			</div>

			<div class="card bg-success" data-aos="zoom-up" data-aos-delay="700">
				<div class="card-body">
					<div class=" circle"><i class="bi-phone fs-1"></i></div>
					<h2 class="card-title text-white">Realtime</h2>
					<h5 class="card-title">Expense Tracking</h5>
					<p class="card-text">Track your spending as it happens in real-time.</p>
					<a href="#app" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>

			<div class="card bg-primary" data-aos="zoom-up" data-aos-delay="800">
				<div class="card-body">
					<div class="bg-silver circle">$</div>
					<h2 class="card-title text-white">Pricing</h2>
					<h5 class="card-title">Expose Tracking</h5>
					<p class="card-text">Lorem ipsum dolor sit amet</p>
					<a href="#pricing" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>

			<div class="card bg-info" data-aos="zoom-up" data-aos-delay="900">
				<div class="card-body">
					<div class="circle"><i class="bi-table fs-1"></i></div>
					<h2 class="card-title text-white">Reports</h2>
					<h5 class="card-title">& Analytics</h5>
					<p class="card-text">Get insights into your spending habits with detailed reports.</p>
					<a href="#contact" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>

			<div class="card bg-secondary" data-aos="zoom-up" data-aos-delay="1000">
				<div class="card-body-bg"></div>
				<div class="card-body px-2">
					<div class="bg-success circle"><i class="bi-person fs-1"></i></div>
					<h4 class="card-title">Customizable</h4>
					<h5 class="card-title">Categories</h5>
					<p class="card-text">Create categories that suit your financial goals.</p>
					<a href="#app" class="btn btn-primary rounded-pill">Learn more!</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.page-section {
		position: relative;
	}
	.art {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-areas: ". t t t c"
							 ". t t t ."
							 ". t t t .";
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}

	.pig {
		position: relative;
		grid-area: c;
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

	.small-container {
		max-width: 72rem;
		margin: 0 auto;
		/* border-radius: 12rem; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
	}
	.service {
		background-color: #d9d7d8;
	}

	.card {
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
