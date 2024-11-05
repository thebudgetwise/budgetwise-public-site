<script>
	import coinGeen from '$lib/svg/Coin-green.svg';
	import coinBlue from '$lib/svg/Coin-blue.svg';
	import cointPink from '$lib/svg/Coin-pink.svg';
	import pig from '$lib/svg/pig2.svg';
	import dashboard from '$lib/svg/dashboard.svg';
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
		<h5>Take control of your budget with BWealthy</h5>
		<!-- CTA -->
		<a
			href="#about"
			class="btn btn-success btn-lg text-uppercase rounded-pill"
			style="font-weight: 600; font-size: 1.5rem;">Get Started</a
		>
	</div>
</section>

<style>
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
