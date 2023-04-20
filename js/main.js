var app = new Vue ({
    el:"article",
    data:{
        products:[{id:1,title:"Prod 1", short_text:'short_text', image: 'TAG10003.png', desc:"Full desc"},
        {id:2,title:"Prod 2", short_text:'short_text', image: 'TAG10003.png', desc:"Full desc"},
        {id:3,title:"Prod 3", short_text:'short_text', image: 'TAG10003.png', desc:"Full desc"},
        {id:4,title:"Prod 4", short_text:'short_text', image: 'TAG10003.png', desc:"Full desc"},
        {id:5,title:"Prod 5", short_text:'short_text', image: 'TAG10003.png', desc:"Full desc"}]
    },
    mounted:function(){
        console.log(window.localStorage.getItem('prod'));
    },
    methods:{
        addItem:function(id){
            window.localStorage.setItem('prod', id);
        }
    }
});