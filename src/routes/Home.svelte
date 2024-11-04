<script>
	import coinGeen from '$lib/svg/Coin-green.svg';
	import coinBlue from '$lib/svg/Coin-blue.svg';
	import cointPink from '$lib/svg/Coin-pink.svg';
	import pig from '$lib/svg/pig2.svg';
</script>

<section class="page-section hero" id="home">
	<div class="art">
		<div class="empty"></div>
		<div class="a">
			<img src={pig} alt="pig" class="pig" data-aos="zoom-in" data-aos-delay="300" />
			<img src={coinGeen} alt="coin" class="coin-green" data-aos="fade-down" data-aos-delay="400" />
		</div>
		<img src={cointPink} alt="coin" class="d" data-aos="fade-down" data-aos-delay="600" />
		<img src={coinBlue} alt="coin" class="b" data-aos="fade-down" data-aos-delay="800" />
		<img src={cointPink} alt="coin" class="e" data-aos="fade-down" data-aos-delay="900" />
		<img src={coinGeen} alt="coin" class="c" data-aos="fade-down" data-aos-delay="1000" />
		<div></div>
		<img src={cointPink} alt="coin" class="f" data-aos="fade-down" data-aos-delay="1100" />
	</div>
	<div class="container" data-aos="fade-up" data-aos-delay="100">
		<h1>Track Your Spending, Stay Financially Wise</h1>
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

	.art {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-areas:
			'. . t t . .'
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
	}
</style>
