let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + "<h1>Hello World</h1>"

let div = document.createElement('div');
div.innerHTML = '<h1> Append</h1>';
a.append(div);

let div1 = document.createElement('div');
div1.innerHTML = '<h1> Prepend</h1>';
a.prepend(div1);

let div2 = document.createElement('div');
div2.innerHTML = '<h1> Before</h1>';
a.before(div2);

let div3 = document.createElement('div');
div3.innerHTML = '<h1> After</h1>';
a.after(div3);

// a.replaceWith("HAHAH")