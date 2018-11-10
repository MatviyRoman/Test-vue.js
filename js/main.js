var pics = []
for (var i = 1; i <= 11; i++) {
	pics.push({
		id: i
	})
}
new Vue({
	el: '.cb-item-pics',
	data: {
		pics,
		selected: undefined,
		selected2: []
	}
})