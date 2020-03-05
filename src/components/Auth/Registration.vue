<template>
	<v-container
	class="fill-height"
	fluid
	>
	<v-row
	align="center"
	justify="center"
	>
	<v-col
	cols="12"
	sm="8"
	md="6"
	>
	<v-card class="elevation-12">
		<v-toolbar
		color="#424242"
		dark
		flat
		>
		<v-toolbar-title>Registration form</v-toolbar-title>


	</v-toolbar>

	<v-form v-model='valid' ref='form' validation>
		<v-text-field
		label="Email"
		name="email"
		prepend-icon="mdi-account"
		type="email"
		v-model="email"
		:rules="emailRules"
		/>

		<v-text-field
		label="Password"
		name="password"
		prepend-icon="mdi-lock"
		type="password"
		:counter="6"
		v-model="password"
		:rules="passwordRules"
		/>
		<v-text-field
		label="Confirm password"
		name="confirm-password"
		prepend-icon="mdi-lock"
		type="password"
		:counter="6"
		v-model="confirmPassword"
		:rules="confirmPasswordRules"
		/>
	</v-form>
<v-card-actions>
	<v-spacer></v-spacer>
	<v-btn
	color="#424242"
	dark
	@click="onSubmit"
	:loading='loading'
	:disabled="!valid || loading"
	>Create account</v-btn>
</v-card-actions>
</v-card>
</v-col>
</v-row>
</v-container>
</template>

<script>
export default {
	data () {
		return {
			email: '',
			password: '',
			confirmPassword: '',
			valid: false,
			emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
			],
			passwordRules: [
			v => !!v || 'Password is required',
			v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
			],
			confirmPasswordRules: [
			v => !!v || 'Password is required',
			v => v === this.password || 'Password should match'
			]
		}
	},
	computed: {
		loading () {
			return  this.$store.getters.loading
		}
	},
	methods: {
		onSubmit () {
			if (this.$refs.form.validate()) {
				const user = {
					email: this.email,
					password: this.password
				}
				this.$store.dispatch('registerUser', user)
				.then(() => {
					this.$router.push('/')
				})
				.catch(() => {})
			}
		}
	}
}
</script>