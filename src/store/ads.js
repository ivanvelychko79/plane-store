export default {
	state: {
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
		promo: false, 
		imageSrc: require('@/img/cessna-citation-mustang.jpg'), 
		id: '12345'},
		{title: 'Gulfstream', 
		description: 'Gulfstream G650', 
		promo: true, 
		imageSrc: require('@/img/gulfstream-g650.jpg'), 
		id: '123456'},
		{title: 'Gulfstream', 
		description: 'Gulfstream G550', 
		promo: false, 
		imageSrc: require('@/img/gulfstream-g550.jpg'), 
		id: '1234567'},
		{title: 'Gulfstream', 
		description: 'Gulfstream V', 
		promo: true, 
		imageSrc: require('@/img/gulfstream-v.jpg'), 
		id: '12345678'},
		{title: 'Bombardier', 
		description: 'Bombardier Global Express', 
		promo: false, 
		imageSrc: require('@/img/bombardier-global-express.jpg'), 
		id: '123456789'},
		{title: 'Bombardier', 
		description: 'Bombardier Challenger 600', 
		promo: true, 
		imageSrc: require('@/img/bombardier-challenger-600.jpg'), 
		id: '1234567890'},
		{title: 'bombardier', 
		description: 'bombardier-cgallenger-300', 
		promo: false, 
		imageSrc: require('@/img/bombardier-challenger-300.jpg'), 
		id: '12345678901'}
		]
	},
	mutations: {
		createAd (state, payload) {
			state.ads.push(payload)
		}
	},
	actions: {
		createAd ({commit}, payload) {
			payload.id = 'zxcvxvzcxzvcxz'
			commit('createAd', payload)
		}
	},
	getters: {
		ads (state) {
			return state.ads
		},
		promoAds (state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds (state) {
			return state.ads
		},
		adById (state) {
			return adId => {
				return state.ads.find(ad => ad.id ===adId)
			}
		}
	}
}