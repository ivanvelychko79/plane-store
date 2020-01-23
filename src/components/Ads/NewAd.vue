<template>
	<v-container class="fill-height" mb-5>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Новый борт</h1>
				<v-form v-model="valid" ref="form" validation>
					<v-text-field	
					label="Название самолета"	
					name="title" 	
					type="text"
					v-model="title"	
					required
					:rules="[v => !!v || 'Введите название']"/>

					<v-textarea
					label="Описание"
					name="description"
					type="text"
					v-model="description"
					:rules="[v => !!v || 'Введите описание']"
					/>
				</v-form>
				<v-layout row>
					<v-flex xs12>
						<v-btn class="warning">Загрузить фото
							<v-icon right dark>mdi-cloud-upload</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12 mb-5>
						<v-img style="margin-top: 15px;"
						src=""
						height="250px"
						></v-img>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-switch
						v-model="promo"
						label="Add to promo?"
						></v-switch>
					</v-flex>
				</v-layout>
				<v-layout row mb-5>
					<v-flex xs12>
					<v-spacer></v-spacer>
					<v-btn class="success" @click="createAd" :disabled="!valid">Добавить новый борт</v-btn>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			title: '',
			description: '',
			promo: false,
			valid: false
		}
	},
	methods: {
		createAd () {
			if (this.$refs.form.validate()) {
				const ad = {
					title: this.title,
					description: this.description,
					promo: this.promo
				}
				window.console.log(ad)
			}
		}
	}
}
</script>