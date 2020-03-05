<template>
	<v-container class="fill-height" style="margin-top: -50px;">
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Мои модели</h1>

				<v-card 
				class="elevation-10 mb-5"
				v-for="ad in myAds"
				:key="ad.id"
				>
				<v-layout row>
					<v-flex xs6>
						<v-img
						:src="ad.imageSrc"
						height="135"
						style="margin-left: 12px;"
						></v-img>
					</v-flex>
					<v-flex xs6>
						<v-card-text>
							<h2 class="text--primary">{{ad.title}}</h2>
							<p>{{ad.description}}</p>
						</v-card-text>
						<v-card-actions style="padding-right: 20px;">
							<v-spacer></v-spacer>
							<v-btn class="info" :to="'/ad/' + ad.id">Открыть</v-btn>
						</v-card-actions>
					</v-flex>
				</v-layout>
			</v-card>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
export default {
	computed: {
		myAds () {
			return this.$store.getters.myAds
		}
	}
}
</script>