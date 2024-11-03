<script>
	import financeImage from '$lib/images/finances-img.jpg';
</script>

<div id="portfolio" class="bg-light">
	<div class="container-fluid p-0" data-aos="zoom-out" data-aos-delay="400">
		<div class="row g-0">
			<div class="col-lg-4 col-sm-6">
				<a class="portfolio-box" href={financeImage} title="Project Name">
					<img class="img-fluid" src={financeImage} alt="..." />
					<div class="portfolio-box-caption">
						<div class="project-category text-white-50">Category</div>
						<div class="project-name">Project Name</div>
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-sm-6">
				<a class="portfolio-box" href={financeImage} title="Project Name">
					<img class="img-fluid" src={financeImage} alt="..." />
					<div class="portfolio-box-caption">
						<div class="project-category text-white-50">Category</div>
						<div class="project-name">Project Name</div>
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-sm-6">
				<a class="portfolio-box" href={financeImage} title="Project Name">
					<img class="img-fluid" src={financeImage} alt="..." />
					<div class="portfolio-box-caption">
						<div class="project-category text-white-50">Category</div>
						<div class="project-name">Project Name</div>
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-sm-6">
				<a class="portfolio-box" href={financeImage} title="Project Name">
					<img class="img-fluid" src={financeImage} alt="..." />
					<div class="portfolio-box-caption">
						<div class="project-category text-white-50">Category</div>
						<div class="project-name">Project Name</div>
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-sm-6">
				<a class="portfolio-box" href={financeImage} title="Project Name">
					<img class="img-fluid" src={financeImage} alt="..." />
					<div class="portfolio-box-caption">
						<div class="project-category text-white-50">Category</div>
						<div class="project-name">Project Name</div>
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-sm-6">
				<a class="portfolio-box" href={financeImage} title="Project Name">
					<img class="img-fluid" src={financeImage} alt="..." />
					<div class="portfolio-box-caption p-3">
						<div class="project-category text-white-50">Category</div>
						<div class="project-name">Project Name</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.portfolio-box {
		position: relative;
		display: block;
	}

	.portfolio-box-caption {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		text-align: center;
		opacity: 0;
		color: #fff;
		background: var(--bs-primary);
		transition: opacity 0.25s ease;
		text-align: center;
		z-index: 10;
	}

	.portfolio-box-caption:hover {
		opacity: 1;
	}
</style>
