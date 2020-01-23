<template>
	<div>
		<v-container mt-n12 mb-10>
			<v-layout row>
				<v-flex xs12>
					<v-carousel
					cycle
					height="400"
					hide-delimiter-background
					show-arrows-on-hover
					>
					<v-carousel-item
					v-for="(ad, i) in ads"
					:key="i"			
					>
					<div class="car-link">
						<v-btn :to="'/ad/' + ad.id" outlined color="black">{{ad.title}}</v-btn>
					</div>
					<v-sheet
					height="100%"
					>
					<v-row
					class="fill-height"
					align="center"
					justify="center"
					>
					<img class="imgSize" :src='ad.imageSrc'/>
				</v-row>
			</v-sheet>
			
		</v-carousel-item>
	</v-carousel>
</v-flex>
</v-layout>
</v-container>

<v-container grid-list-lg mb-10>
	<v-layout row wrap>
		<v-flex 
		xs12
		sm6
		md4
		v-for="ad of ads"
		:key="ad.id"
		>
		<v-card
		class="mx-auto"
		max-width="400"
		>
		<v-img
		class="white--text align-end"
		height="200px"
		:src="ad.imageSrc"
		>
		<v-card-title primary-title>
			<div>
				<h3 class="headline mb-0">{{ ad.title }}</h3>
			</div>
		</v-card-title>
	</v-img>

	<v-card-text class="text--primary">
		<div>{{ad.description}}</div>
	</v-card-text>

	<v-card-actions>
		<v-spacer></v-spacer>

		<v-btn text :to="'/ad/' + ad.id">Смотреть</v-btn>
		<v-btn raised class="primary">Заказать</v-btn>
	</v-card-actions>
</v-card>
</v-flex>
</v-layout>
</v-container>
</div>
</template>

<script>
export default {
	data () {
		return {
			ads: [
			{title: 'Cessna', 
			description: 'Cessna 750 Citation X', 
			promo: false, 
			imageSrc: require('@/img/cessna-citation-x.jpg'), 
			id: '123'},
			{title: 'Cessna', 
			description: 'Cessna 680 Citation Sovereign', 
			promo: true, 
			imageSrc: require('@/img/cessna-citation-sovereign.jpg'), 
			id: '1234'},
			{title: 'Cessna', 
			description: 'Cessna 510 Citation Mustang', 
			promo: true, 
			imageSrc: require('@/img/cessna-citation-mustang.jpg'), 
			id: '12345'},
			{title: 'Gulfstream', 
			description: 'Gulfstream G650', 
			promo: true, 
			imageSrc: require('@/img/gulfstream-g650.jpg'), 
			id: '123456'},
			{title: 'Gulfstream', 
			description: 'Gulfstream G550', 
			promo: true, 
			imageSrc: require('@/img/gulfstream-g550.jpg'), 
			id: '1234567'},
			{title: 'Gulfstream', 
			description: 'Gulfstream V', 
			promo: true, 
			imageSrc: require('@/img/gulfstream-v.jpg'), 
			id: '12345678'},
			{title: 'Bombardier', 
			description: 'Bombardier Global Express', 
			promo: true, 
			imageSrc: require('@/img/bombardier-global-express.jpg'), 
			id: '123456789'},
			{title: 'Bombardier', 
			description: 'Bombardier Challenger 600', 
			promo: true, 
			imageSrc: require('@/img/bombardier-challenger-600.jpg'), 
			id: '1234567890'},
			{title: 'bombardier', 
			description: 'bombardier-cgallenger-300', 
			promo: true, 
			imageSrc: require('@/img/bombardier-challenger-300.jpg'), 
			id: '12345678901'}
			]
		}
	}
}
</script>

<style scoped>
.imgSize{
	height: 400px;
	width: 600px;
}

.car-link{
	position: absolute;
	bottom: 50px;
	left: 50%;
	background: lightgrey;
	transform: translate(-50%, 0);
	padding: 5px, 15px;
	border-radius: 5px;
}

</style>