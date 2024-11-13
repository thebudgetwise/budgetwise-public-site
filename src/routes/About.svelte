<script>
    import { t } from '$lib/i18n';
</script>
<section class="page-section bg-primary" id="about">
	<div class="container px-4 px-lg-5" data-aos="fade-up" data-aos-delay="100">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
				<h2 class="text-white mt-0">{$t('about.heading')}</h2>
				<hr class="divider divider-light" />
				<p class="text-white-75 mb-4">
					{$t('about.description1')}
				</p>
				<p class="text-white-75 mb-4">
					{$t('about.description2')}
				</p>
				<a class="btn btn-success btn-lg rounded-pill" href="#">{$t('about.button')}</a>
			</div>
		</div>
	</div>
</section>
