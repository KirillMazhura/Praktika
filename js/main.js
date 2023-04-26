var app = new Vue({
    el:".container2",
    data:{
        products:[{'id':1, 'title':'TAG 1000 (TAG 789)','image':'image1.jpg', 'short_text': 'Breburn', 'desc': 'Full description'},
        {'id':2, 'title':'TAG 1001 (TAG 855)','image':'image2.jpg', 'short_text': 'Pink Lady', 'desc': 'Full description'},
        {'id':3, 'title':'TAG 1002 (TAG 809)','image':'image3.jpg', 'short_text': 'Hala', 'desc': 'Full description'},
        {'id':4, 'title':'TAG 1003 (TAG 834 )','image':'image4.jpg', 'short_text': 'Quinty', 'desc': 'Full description'},
        {'id':5, 'title':'TAG 1004 (TAG 848)','image':'image5.jpg', 'short_text': 'Jeneva', 'desc': 'Full description'}],
        product:[],
        cart:[],
        contactFields:[],
        menu:0,
        btnVisible:0,
        order:0
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct(){
            if(window.location.hash!=null){
                let id = window.location.hash.replace('#', '');
     
                if(this.products!=null && this.products.length>0){
                    for(let i in this.products){
                        if(this.products[i] != null && this.products[i].id != null && this.products[i].id==id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart(id) {
            let cart = [];
            if (window.localStorage.getItem('cart') != null) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id)) == -1) {
                this.cart.push(id);
                window.localStorage.setItem('cart', cart.join(','));
                this.btnVisible = 1;
            }
        },
        checkInCart(){
            if(this.product!=null && this.product.id!=null && window.localStorage.getItem('cart')!=null && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        },
        getCart(){
            if(window.localStorage.getItem('cart') != null){
                if(this.products!=null && this.products.length>0){
                    for(let i in this.products){
                        if(this.products[i] !=null && this.products[i].id !=null && window.localStorage.getItem('cart').split(',').indexOf(String(this.products[i].id))!=-1)this.cart.push(this.products[i]);
                    }
                }
            }
        },
        removeFromCart(id){
            let cart = [];
            if(window.localStorage.getItem('cart') != null){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))!=-1){
                cart.splice(cart.indexOf(String(id)),1);
                this.cart = cart;
                window.localStorage.setItem('cart', cart.join(','));
            }
        },
        makeOrder(){
            this.cart = [];
            window.localStorage.setItem('cart','');
            this.order=1;
        }
        
    }

});