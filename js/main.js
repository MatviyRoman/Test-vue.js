// new Vue({
//   el: '.cb-item-pics',
//   data: {
//     selected: undefined
//   }
 //  	methods: {
 //  		someMethod() {
 //    		const imgUrl = this.$ref.imgInfo
 //    		const imgTitle = img.dataset.Title
 //   			axios.get(imgTitle).then(/* ... */)
 //  		}
	// }
// })



// new Vue({
//   	el: '.cb-result__content',
//   	data: {
//     	selected: undefined

  //  		methods: {
	 //  		someMethod() {
	 //    		const imgUrl = this.$ref.imgInfo
	 //    		const imgTitle = img.dataset.Title
	 //   			// axios.get(imgTitle).then(/* ... */)
	 //  		}
		// }
//   	}
// })



// const cb-item-pics = new Vue({
// 	el: '.cb-item-pics',
// 	data: {
// 		imgPics: [
// 		01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11,
// 		]
// 	}
// })



var cb-item-pics new Vue({
  	el: '.cb-item-pics',
  	data: dataImg
});

var dataImg = {
  	imgPics: [
    	{ imgPic: '01' },
    	{ imgPic: '02' },
    	{ imgPic: '03' },
    	{ imgPic: '04' },
    	{ imgPic: '05' },
    	{ imgPic: '06' },
    	{ imgPic: '07' },
    	{ imgPic: '08' },
    	{ imgPic: '09' },
    	{ imgPic: '10' },
    	{ imgPic: '11' }
  	]
};




// // a method in your component:
// methods: {
//   someMethod() {
//     const imgInfo = this.$refs.imgInfo
//    const url = button.dataset.UrlDesc
//    axios.get(url).then(/* ... */)
//   }
// }


var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Привет, Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!'
  }
})

// Определяем новый компонент под именем todo-item
Vue.component('todo-item', {
  template: '<li>Это одна задача в списке</li>'
})

Vue.component('todo-item', {
  // Компонент todo-item теперь принимает
  // "prop", то есть входной параметр.
  // Имя входного параметра todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})

// module.exports = {
//   // ...
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
//     }
//   }
// }




// rollup
// const alias = require('rollup-plugin-alias')

// rollup({
//   // ...
//   plugins: [
//     alias({
//       'vue': 'vue/dist/vue.esm.js'
//     })
//   ]
// })

// module.exports = {
//   mode: 'production'
// }


// Наш объект data
var data = { a: 1 }

// Объект добавляется в экземпляр Vue
var vm = new Vue({
  data: data
})

// Получение свойства из экземпляра
// возвращает то же значение из исходных данных
vm.a === data.a // => true

// Изменение свойства экземпляра
// влияет на оригинальные данные
vm.a = 2
data.a // => 2

// ... и наоборот
data.a = 3
vm.a // => 3


vm.b = 'hi'



// data: {
//   newTodoText: '',
//   visitCount: 0,
//   hideCompletedTodos: false,
//   todos: [],
//   error: null
// }


var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})



var vm = new Vue({
  el: '#example',
  data: {
    message: 'Привет'
  },
  computed: {
    // геттер вычисляемого значения
    reversedMessage: function () {
      // `this` указывает на экземпляр vm
      return this.message.split('').reverse().join('')
    }
  }
})



// // в компоненте
// methods: {
//   reverseMessage: function () {
//     return this.message.split('').reverse().join('')
//   }
// }



var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})


// data: {
//   isActive: true,
//   hasError: false
// }