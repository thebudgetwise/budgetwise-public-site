<script>
	import pig from '$lib/svg/pig.svg';
	import coinGeen from '$lib/svg/Coin-green.svg';
	import foliage from '$lib/svg/foliage.svg';
	import { t } from '$lib/i18n';
</script>

<section class="page-section service" id="features">
	<div class="art">
		<div class="pig">
			<img src={coinGeen} alt="coin" class="coin-green" data-aos="fade-down" data-aos-delay="600" />
			<img src={pig} alt="pig" class="pig" data-aos="zoom-in" data-aos-delay="400" />
		</div>
		<img src={foliage} alt="foliage" class="foliage" data-aos="fade-right" data-aos-delay="400" />
	</div>
	<div class="container" data-aos="fade-up" data-aos-delay="100">
		<h2 class="text-center mb-5">{$t('features.whyBWealthy')}</h2>
		<div class="small-container">
			<div class="card bg-secondary" data-aos="zoom-up" data-aos-delay="600">
				<div class="card-body px-2">
					<div class="bg-success circle"><i class="bi-laptop fs-1"></i></div>
					<h2 class="card-title text-white">{$t('features.simplify.title')}</h2>
					<h5 class="card-title">{$t('features.simplify.subtitle')}</h5>
					<p class="card-text">{$t('features.simplify.description')}</p>
					<a href="#" class="btn btn-primary rounded-pill">{$t('features.simplify.button')}</a>
				</div>
			</div>

			<div class="card bg-success" data-aos="zoom-up" data-aos-delay="700">
				<div class="card-body px-2">
					<div class=" circle"><i class="bi-phone fs-1"></i></div>
					<h2 class="card-title text-white">{$t('features.realTime.title')}</h2>
					<h5 class="card-title">{$t('features.realTime.subtitle')}</h5>
					<p class="card-text">{$t('features.realTime.description')}</p>
					<a href="#" class="btn btn-primary rounded-pill">{$t('features.realTime.button')}</a>
				</div>
			</div>

			<div class="card bg-primary" data-aos="zoom-up" data-aos-delay="800">
				<div class="card-body px-2">
					<div class="bg-silver circle"><i class="bi-person fs-1"></i></div>
					<h2 class="card-title text-white">{$t('features.learning.title')}</h2>
					<h5 class="card-title">{$t('features.learning.subtitle')}</h5>
					<p class="card-text">{$t('features.learning.description')}</p>
					<a href="#" class="btn btn-primary rounded-pill">{$t('features.learning.button')}</a>
				</div>
			</div>

			<div class="card bg-info" data-aos="zoom-up" data-aos-delay="900">
				<div class="card-body px-2">
					<div class="circle"><i class="bi-table fs-1"></i></div>
					<h2 class="card-title text-white">{$t('features.reports.title')}</h2>
					<h5 class="card-title">{$t('features.reports.subtitle')}</h5>
					<p class="card-text">{$t('features.reports.description')}</p>
					<a href="#" class="btn btn-primary rounded-pill">{$t('features.learning.button')}</a>
				</div>
			</div>

			<div class="card bg-secondary" data-aos="zoom-up" data-aos-delay="1000">
				<div class="card-body-bg"></div>
				<div class="card-body px-2">
					<div class="bg-success circle">$</div>
					<h2 class="card-title text-white">{$t('features.adapts.title')}</h2>
					<h5 class="card-title">{$t('features.adapts.subtitle')}</h5>
					<p class="card-text">{$t('features.adapts.description')}</p>
					<a href="#" class="btn btn-primary rounded-pill">{$t('features.adapts.button')}</a>
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
		grid-template-areas: "f t t t c"
							 "f t t t ."
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

	.foliage {
		position: relative;
		grid-area: f;
		margin-left: -20%;
		justify-self: start;
		align-self: end;
		/* width: 100%; */
		height: auto;
	}

	.small-container {
		max-width: 72rem;
		margin: 0 auto;
		/* border-radius: 12rem; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
	}
	.service {
		background-color: #ffffffaa;
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
